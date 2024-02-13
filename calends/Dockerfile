FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip

WORKDIR /app

COPY acl acl
COPY routers routers

COPY main.py main.py
COPY requirements.txt requirements.txt

RUN python -m pip install -r requirements.txt

CMD uvicorn main:app --reload --host 0.0.0.0 --port 80 --forwarded-allow-ips "*"
