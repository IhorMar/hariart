from __future__ import absolute_import, unicode_literals
# from celery import shared_task
from django.core.mail import send_mail
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