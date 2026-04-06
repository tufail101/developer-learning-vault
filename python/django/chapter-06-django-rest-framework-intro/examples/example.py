"""This example shows the shape of a serializer and API view."""

from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response


class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)


class PostListView(APIView):
    def get(self, request):
        return Response([{"title": "First post"}])
