from rest_framework import generics, viewsets
from .models import Event
from .serializers import EventSerializer


class CreateApi(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class ListApi(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class UpdateApi(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class DeleteApi(generics.DestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class DetailApi(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class TodoView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
