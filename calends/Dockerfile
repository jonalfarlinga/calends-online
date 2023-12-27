FROM python:3

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY api api
COPY calends calends
COPY manage.py manage.py
COPY requirements.txt requirements.txt

EXPOSE 443

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:443"]
