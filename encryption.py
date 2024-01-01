from cryptography.fernet import Fernet
import os
from dotenv import load_dotenv

# print(Fernet.generate_key())

load_dotenv()

ENCRYPTION_KEY = os.getenv("ENCRYPTION_KEY").encode("utf-8")
CANVAS_API_KEY = os.getenv("CANVAS_API_KEY").encode("utf-8")

f = Fernet(ENCRYPTION_KEY)

token = f.encrypt(CANVAS_API_KEY)
print(token)

token = f.decrypt(token).decode("utf-8")
print(token)