from .calendar_fetch import (get_CSV_holidays,
                             get_SUU_holidays,
                             get_TXST_holidays,
                             build_dates)
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from datetime import datetime


@require_GET
def SUU_calendar(request, start, end, weekdays):
    '''
    On GET request returns a dictionary with three keys:
        "dates": list of dates the class meets,
        "topics": list of blanks for filling in topic for the day,
        "assignments": list that is blank except on holidays,
    '''
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_SUU_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)


@require_GET
def TXST_calendar(request, start, end, weekdays):
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_TXST_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)


@require_GET
def CSV_calendar(request, start, end, weekdays):
    start = datetime.strptime(start, "%m%d%y")
    end = datetime.strptime(end, "%m%d%y")
    holidays = get_CSV_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)
