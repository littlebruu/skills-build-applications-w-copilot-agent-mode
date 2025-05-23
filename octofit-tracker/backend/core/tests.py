from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email="test@example.com", name="Test User", password="123456")
        self.assertEqual(user.email, "test@example.com")

class TeamModelTest(TestCase):
    def test_create_team(self):
        user = User.objects.create(email="team@example.com", name="Team User", password="123456")
        team = Team.objects.create(name="Team A")
        team.members.add(user)
        self.assertIn(user, team.members.all())

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(email="activity@example.com", name="Activity User", password="123456")
        activity = Activity.objects.create(user=user, activity_type="run", duration=30, date="2025-04-25")
        self.assertEqual(activity.activity_type, "run")

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        user = User.objects.create(email="workout@example.com", name="Workout User", password="123456")
        workout = Workout.objects.create(user=user, description="Pushups", date="2025-04-25")
        self.assertEqual(workout.description, "Pushups")

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        user = User.objects.create(email="leader@example.com", name="Leader User", password="123456")
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)
