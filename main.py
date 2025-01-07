from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY")) # HAY UN PROBLEMA CON LA API KEY --> {"error":"Error code: 429 - {'error': {'message': 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.', 'type': 'insufficient_quota', 'param': None, 'code': 'insufficient_quota'}}"}%   
from fastapi.middleware.cors import CORSMiddleware

# Inicializar FastAPI
app = FastAPI()

# Configuración de CORS para permitir solicitudes desde el puerto 5500
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Permite solicitudes solo desde el puerto 5500
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)


# Modelo para la solicitud de chat
class ChatRequest(BaseModel):
    message: str

# Endpoint para manejar el chat con la API Key de OpenAI
# @app.post("/chat")
# async def chat(request: ChatRequest):
#     try:
#         # Solicitar respuesta a la API de OpenAI
#         response = client.chat.completions.create(model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "Eres un asistente muy útil y amable."},
#             {"role": "user", "content": request.message}
#         ])
#         return {"response": response.choices[0].message.content}
#     except Exception as e:
#         return {"error": str(e)}

@app.post("/chat")
async def chat(request: ChatRequest):
    # Respuesta simulada para la demo
    responses = [
        "¡Hola! ¿En qué puedo ayudarte hoy?",
        "No lo tengo claro, pero me gusta ViewNext.",
        "Lo siento, no tengo suficiente información sobre ese tema, pero me gusta ViewNext.",
    ]
    # Devuelve una respuesta aleatoria
    import random
    return {"response": random.choice(responses)}