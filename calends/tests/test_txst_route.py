from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_TXST_calendar():
    response = client.get(
        "/TXST_calendar?start=081321&end=121321&weekdays=1000000"
    )
    assert response.status_code == 200
    assert response.json() == {
        "dates": []
