const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendButton.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  // Muestra el mensaje del usuario en el chat
  appendMessage("user", message);

  try {
    // Enviar el mensaje al backend
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Muestra la respuesta de la IA
    if (data.response) {
      appendMessage("bot", data.response);
    } else {
      appendMessage("bot", "Hubo un error al obtener la respuesta.");
    }
  } catch (error) {
    // Si hay un error en la solicitud
    appendMessage("bot", `Error: ${error.message}`);
  }

  // Limpia el campo de entrada
  userInput.value = "";
});

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Asegura que el chat siempre se desplace hacia abajo
}
