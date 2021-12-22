from django.db import models


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=False, null=True, blank=False)

    def __str__(self):
        return self.name
