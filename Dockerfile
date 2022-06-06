# syntax=docker/dockerfile:1

FROM node:14.19.3

COPY hariart_frontend /app/hariart_frontend
WORKDIR /app/hariart_frontend

RUN npm install
RUN npm run dev

FROM python:3.10-slim-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

COPY . /app/

EXPOSE 8000
CMD ["python", "manage.py", "runserver"]