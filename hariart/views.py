from django.http import HttpResponse
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from .models import Painting, PaintingSize, PaintingOrder, Order, Contact, COUNTRY_CHOICES
from .serializers import PaintingSerializer, PaintingSizeSerializer, OrderSerializer, PaintingOrderSerializer, ContactSerializer
from .tasks import send_email_on_new_order, send_email_contact_us

class PaintingViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingSerializer
    queryset = Painting.objects.all()
    filterset_fields = ['category', 'ref']


class PaintingSizeViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingSizeSerializer
    queryset = PaintingSize.objects.all()
    filterset_fields = ['painting']


class ConactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects

    def create(self, request):
        try:
            post_data = request.data

            orderLatestId = self.queryset.create(
                customer_name=post_data['name'],
                customer_surname=post_data['surname'],
                customer_email=post_data['email'],
                customer_phone=post_data['phone'],
                country=post_data['country']['name']
            )

            paintings = list(map(lambda painting: PaintingOrder(
                painting=Painting.objects.get(pk=painting['ref']),
                order=orderLatestId,
                quantity=painting['amount']
            ), post_data['paintings']))

            PaintingOrder.objects.bulk_create(paintings)

            contact_emails = Contact.objects.filter(country=post_data['country']['id']).values('email')

            subject = f'{post_data["name"]} {post_data["surname"]} made an order'
            message = f'Customer {post_data["name"]} {post_data["surname"]} wanted to order paintings.\n{displayPaintingsForMessage(post_data["paintings"])}\n\nClient email: {post_data["email"]}\n\nClient phone: {post_data["phone"]}'
            sender = 'mskabwork@gmail.com'
            recipients = list(map(lambda contact_email: contact_email['email'], contact_emails))

            try:
                send_email_on_new_order.delay(subject, message, sender,
                          ['metallistvalon@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header in send email found')

        except:
            return HttpResponse('Invalid header found')

        return HttpResponse('Success...Your email has been sent')


class PaintingOrderViewSet(viewsets.ModelViewSet):
    serializer_class = PaintingOrderSerializer
    queryset = PaintingOrder.objects.all()


@api_view(['POST'])
def contact_us(request):
    try:
        post_data = request.data

        contact_emails = Contact.objects.filter(country__in=checkCountryByLanguage(post_data["language"])).values('email')

        subject = f'Message from {post_data["name"]}'
        message = f'Customer {post_data["name"]} sended you a message.\n\n{post_data["message"]}\n\nClient email: {post_data["email"]}\n\nClient phone: {post_data["phone"]}'
        sender = 'mskabwork@gmail.com'
        recipients = list(map(lambda contact_email: contact_email['email'], contact_emails))

        try:
            send_email_contact_us(subject, message, sender, recipients)
        except BadHeaderError:
            return HttpResponse('Invalid header in send email found')

    except BadHeaderError:
        return HttpResponse('Invalid header found')

    return HttpResponse('Success...Your email has been sent')

def displayPaintingsForMessage(paintingsDetail):
    return "\n".join(list(map(lambda painting: f'{painting["name"]} x {painting["amount"]}', paintingsDetail)))

def checkCountryByLanguage(language):
    if (language == "lt"):
        countriesRelateToLang = ["LT"]
    elif (language == "ru"):
        countriesRelateToLang = ["RU", "UA"]
    else:
        countriesRelateToLang = ["NW"]
 
    return list(map(lambda country: country[0], filter(lambda country: country[0] in countriesRelateToLang, COUNTRY_CHOICES)))

