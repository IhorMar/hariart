from django.core import mail
from django.urls import reverse
import pytest

pytestmark = [pytest.mark.django_db]


def test_send_mail():
    mail.send_mail("subj", "body", "kabob@gmail.com", ["idk@gmail.com"])

    assert len(mail.outbox) == 1


def test_mail_was_sent_with_valid_data(anon_api_client):
    url = reverse("orders-list")
    response = anon_api_client.post(
        url,
        {
            "name": "ka",
            "surname": "bob",
            "email": "metallistvalon@gmail.com",
            "phone": "+38096999456522",
            "country": {"id": 1, "name": "Ukraine"},
            "paintings": [],
        },
        format="json",
    )
    assert response.status_code == 200
    assert response.data.startswith("Success")


def test_mail_sending_with_invalid_data(anon_api_client):
    url = reverse("orders-list")
    response = anon_api_client.post(
        url,
        {
            "name": "po",
            "surname": "tato",
        },
        format="json",
    )
    assert response.status_code == 400


def test_contact_us_mail_sending_with_valid_data(anon_api_client):
    url = reverse("contact_us")
    response = anon_api_client.post(
        url,
        {
            "name": "ka",
            "surname": "bob",
            "email": "metallistvalon@gmail.com",
            "phone": "+38096999456522",
            "country": {"id": 1, "name": "Ukraine"},
            "paintings": [],
            "language": "some",
            "message": "kabob?",
        },
        format="json",
    )
    assert response.status_code == 200


def test_contact_us_mail_not_valid_data(anon_api_client):
    url = reverse("contact_us")
    with pytest.raises(KeyError):
        anon_api_client.post(
            url,
            {
                "name": "ka",
                "surname": "bob",
                "email": "metallistvalon@gmail.com",
                "phone": "+38096999456522",
                "country": {"id": 1, "name": "Ukraine"},
                "paintings": [],
            },
            format="json",
        )
