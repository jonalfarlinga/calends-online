from files.calendar_fetch import (get_CSV_holidays,
                                  get_SUU_holidays,
                                  get_TXST_holidays)
from files.main import build_dates
from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def SUU_calendar(request):
    start, end, weekdays, format = request.data

    holidays = get_SUU_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)


@require_GET
def TXST_calendar(request):
    start, end, weekdays, format = request.data

    holidays = get_TXST_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)


@require_GET
def CSV_calendar(request):
    start, end, weekdays, format = request.data

    holidays = get_CSV_holidays(start, end)  # get observed holidays

    class_dates = build_dates(start, end, weekdays, holidays)  # populate list
    return JsonResponse(class_dates)
