from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer


class View(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
