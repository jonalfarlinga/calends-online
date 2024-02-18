from fastapi import (
    APIRouter,
)
from acl.calendar_fetch import (
    get_CSV_holidays,
    get_SUU_holidays,
    get_TXST_holidays,
    build_dates
)
from pydantic import BaseModel
from datetime import datetime
from typing import List

router = APIRouter()


class CalendOut(BaseModel):
    dates: List[str]
    topics: List[str]
    holidays: List[str]


class APIList(BaseModel):
    apis: List[dict[str, str]]


@router.get(
    "/SUU_calendar",
    response_model=CalendOut,
)
async def SUU_calendar(
    start: str,
    end: str,
    weekdays: str
):
    '''
    On GET request returns a dictionary with three keys:
        "dates": list of dates the class meets,
        "topics": list of blanks for filling in topic for the day,
        "assignments": list that is blank except on holidays,
    '''
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_SUU_holidays(start, end)
    class_dates = build_dates(start, end, weekdays, holidays)
    return CalendOut(
        dates=class_dates['dates'],
        topics=class_dates['topics'],
        holidays=class_dates['holidays'],
    )


@router.get("/CSV_calendar")
async def CSV_calendar(
    start: str,
    end: str,
    weekdays: str
):
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_CSV_holidays(start, end)

    class_dates = build_dates(start, end, weekdays, holidays)
    return CalendOut(
        dates=class_dates['dates'],
        topics=class_dates['topics'],
        lidays=class_dates['holidays'],
    )


@router.get("/TXST_calendar")
async def TXST_calendar(
    start: str,
    end: str,
    weekdays: str
):
    print('hello')
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_TXST_holidays(start, end)

    class_dates = build_dates(start, end, weekdays, holidays)
    return CalendOut(
        dates=class_dates['dates'],
        topics=class_dates['topics'],
        holidays=class_dates['holidays'],
    )


@router.get("/list", response_model=APIList)
async def api_list():
    return APIList(
        apis=[
            {"name": "Texas State", "href": "TXST_calendar"},
            {"name": "Southern Utah", "href": "SUU_calendar"},
            {
                "name": "Invalid - Comma-Separated Values",
                "href": "CSV_calendar",
            },
        ]
    )
