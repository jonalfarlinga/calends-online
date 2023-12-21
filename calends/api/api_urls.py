from django.urls import path
from .api_views import SUU_calendar, TXST_calendar, CSV_calendar, api_list


urlpatterns = [
    path(
        'SUU_calendar/<str:start>/<str:end>/<str:weekdays>/',
        SUU_calendar,
        name="api_SUU"
    ),
    path(
        'TXST_calendar/<str:start>/<str:end>/<str:weekdays>/',
        TXST_calendar,
        name="api_TXST"
    ),
    path(
        'CSV_calendar/<str:start>/<str:end>/<str:weekdays>/',
        CSV_calendar,
        name="api_CSV"
    ),
    path(
        'api_list/',
        api_list,
        name="api_list"
    )
]
