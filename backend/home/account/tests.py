from django.test import TestCase
from django.contrib.auth import get_user_model, authenticate

class AuthenticationTestCase(TestCase):
    def setUp(self):
        # Set up a test user
        self.user = get_user_model().objects.create_user(
            username='kto30@example.com',
            email='kto30@example.com',
            password='123456'
        )

    def test_user_authentication(self):
        # Test user authentication
        user = authenticate(username='kto30@example.com', password='123456')
        self.assertIsNotNone(user)  # Ensure that user is authenticated
        self.assertEqual(user.email, 'kto30@example.com')  # Ensure correct user is authenticated

    def test_wrong_credentials(self):
        # Test authentication with wrong credentials
        user = authenticate(username='kto30@example.com', password='wrongpassword')
        self.assertIsNone(user)  # Ensure authentication fails
