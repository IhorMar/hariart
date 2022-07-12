import pytest
from rest_framework.test import APIClient


@pytest.fixture
def anon_api_client():
    client = APIClient()
    return client
