import os
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import User, Team, Activity, Leaderboard, Workout

@api_view(['GET'])
def api_root(request, format=None):
    base_url = os.getenv('CODESPACE_URL', 'http://localhost:8000').rstrip('/')
    api_suffix = '/api'
    return Response({
        'users': f'{base_url}{api_suffix}/users/',
        'teams': f'{base_url}{api_suffix}/teams/',
        'activities': f'{base_url}{api_suffix}/activities/',
        'leaderboard': f'{base_url}{api_suffix}/leaderboard/',
        'workouts': f'{base_url}{api_suffix}/workouts/'
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer