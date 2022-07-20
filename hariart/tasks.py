from __future__ import absolute_import, unicode_literals
from celery.schedules import crontab
from django.core.mail import send_mail

import parsing.crawler
from config.celery import app
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)


@app.task(name="send_email_on_new_order")
def send_email_on_new_order(subject, message, sender, recipients):
    logger.info("Sent email about the order successfully")
    return send_mail(subject, message, sender, recipients, fail_silently=False)


@app.task(name="send_email_contact_us")
def send_email_contact_us(subject, message, sender, recipients):
    logger.info("Sent contact us email successfully")
    return send_mail(subject, message, sender, recipients, fail_silently=False)


@app.task(name='start_crawler')
def parse():
    parsing.crawler.main()
    logger.info("Parsing script was run")


app.conf.beat_schedule = {
    'start-crawler': {
        'task': 'start_crawler',
        # 'schedule': crontab(minute=0, hour=3),
        'schedule': 20,
        'args': (),
    },
}
