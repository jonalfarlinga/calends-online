from django.urls import path
from .api_views import SUU_calendar, TXST_calendar, CSV_calendar


urlpatterns = [
    path('SUU_calendar/<str:start>/<str:ennd>/', SUU_calendar, name="api_SUU"),
    path('TXST_calendar/<str:start>/<str:end>/', TXST_calendar, name="api_TXST"),
    path('CSV_calendar/<str:start>/<str:end>/', CSV_calendar, name="api_CSV"),
]
