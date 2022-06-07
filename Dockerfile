# syntax=docker/dockerfile:1

FROM node:14.19.3

COPY hariart_frontend /app/hariart_frontend

WORKDIR /app/hariart_frontend

RUN npm install
RUN npm run dev

FROM python:3.9-alpine3.13

ENV PYTHONUNBUFFERED 1

COPY requirements.txt /requirements.txt
COPY . /app

WORKDIR /app
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev && \
    /py/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home app

ENV PATH="/py/bin:$PATH"

USER app