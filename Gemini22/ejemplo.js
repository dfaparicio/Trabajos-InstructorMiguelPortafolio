// ================== CONFIGURACIÓN ==================
// Importamos la librería de Google Generative AI desde un CDN
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Guardamos la clave de la API (permite conectarnos con el modelo de IA)
const API_KEY = "AIzaSyBBAEYltiVyWscwACtzAbqZCysBH1lSxs0";

// Creamos un objeto de conexión con la API usando la clave
const genAI = new GoogleGenerativeAI(API_KEY);

// Seleccionamos el modelo de IA que vamos a usar (gemini-2.0-flash)
// Este modelo se encargará de generar las respuestas de los mecánicos
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


// ================== ELEMENTOS DOM ==================
// Función abreviada para obtener elementos por su ID (en vez de escribir document.getElementById siempre)
const $ = (id) => document.getElementById(id);

// Guardamos en variables los elementos principales de la página para manipularlos más fácil:
const chatForm = $("chat-form"),         // El formulario donde el usuario escribe mensajes
      userInput = $("user-input"),       // El cuadro de texto donde el usuario escribe
      chatMessages = $("chat-messages"), // El contenedor donde aparecen los mensajes
      clearButton = $("clear-chat"),     // Botón para limpiar el chat
      selectSide = $("select-side"),     // Menú desplegable para elegir mecánico (carros o motos)
      autoDebateButton = $("auto-debate"); // Botón que inicia el debate automático entre mecánicos


// ================== MECÁNICOS ==================
// Objeto que define a los dos mecánicos con su personalidad y forma de hablar
const mecanicos = {
  carros: {
    nombre: "Diego 🚗",       // Nombre y emoji de mecánico de carros
    avatar: "🚗",             // Icono que aparece junto al mensaje
    personalidad:             // Cómo debe expresarse la IA al responder
      "Eres Diego, mecánico de carros experto. Valoras seguridad, comodidad y confiabilidad. Hablas con respeto y base técnica, usando expresiones como 'joven' o 'jefe'. Argumentas que el carro es más seguro y estable.",
  },
  motos: {
    nombre: "Andrés 🏍️",     // Nombre y emoji de mecánico de motos
    avatar: "🏍️",            // Icono que aparece junto al mensaje
    personalidad:             // Cómo debe expresarse la IA al responder
      "Eres Andrés, mecánico de motos con experiencia. Para ti la moto es libertad, eficiencia y control. Hablas con seguridad y respeto, usando 'parce' o 'amigo'. Argumentas que la moto es más económica y práctica.",
  },
};


// ================== VARIABLES ==================
let debateActivo = false; // Controla si ya hay un debate en curso
// Lista de temas que se usarán en el debate automático
const temasDebate = [
  "Seguridad en carretera",
  "Costo de mantenimiento",
  "Comodidad para viajes",
  "Facilidad de estacionamiento",
  "Consumo de gasolina",
  "Capacidad de carga",
  "Manejo en tráfico",
  "Protección climática",
  "Diversión al conducir",
  "Costo inicial",
];


// ================== FUNCIONES BÁSICAS ==================
// Función de espera (para simular tiempo de respuesta de la IA)
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Agrega un mensaje al chat con avatar y estilo
function agregarMensaje(texto, clase = "", avatar = "") {
  chatMessages.innerHTML += `<div class="message ${clase}">
    ${avatar ? `<span class="mechanic-avatar">${avatar}</span>` : ""} ${texto}
  </div>`;
  // Hace scroll automático al último mensaje
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Muestra el indicador "escribiendo..." con el avatar del mecánico
function mostrarTyping(mec) {
  chatMessages.innerHTML += `<div id="typing" class="typing-indicator">
    <span class="mechanic-avatar">${mec.avatar}</span> ...</div>`;
}
// Oculta el indicador de escritura
function ocultarTyping() { $("typing")?.remove(); }

// Consulta a la IA usando la personalidad del mecánico y el contexto
async function consultarMecanico(mec, contexto, tema = "", esUsuario = false) {
  // prompt que se envía al modelo
  const prompt = `${mec.personalidad}
  ${esUsuario ? `Usuario: "${contexto}"` : `Tema: "${tema}"\nÚltimo mensaje: "${contexto}"`}
  Responde en máximo 2 oraciones.`;

  try {
    mostrarTyping(mec);      // muestra "escribiendo..."
    await delay(1500);       // espera para simular tiempo real
    const res = await model.generateContent(prompt); // llama a la IA
    ocultarTyping();
    return res.response.text().trim() || "⚠️ Respuesta vacía";
  } catch {
    ocultarTyping();
    return "⚠️ Error al responder.";
  }
}








// ================== CHAT CON USUARIO ==================
// Evento cuando el usuario envía un mensaje en el formulario
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que se recargue la página
  const texto = userInput.value.trim();
  if (!texto) return; // si está vacío no hace nada

  // Agrega el mensaje del usuario en el chat
  agregarMensaje(texto, "user-message", "👤");
  userInput.value = "";

  // Selecciona el rival (si elijo carros, responde motos y viceversa)
  const rival = mecanicos[selectSide.value === "carros" ? "motos" : "carros"];
  const btn = chatForm.querySelector("button");
  btn.disabled = true; // desactiva botón mientras responde

  // Consulta la IA para que el rival responda
  const resp = await consultarMecanico(rival, texto, "", true);

  // Agrega la respuesta del rival con estilo y avatar
  agregarMensaje(`<strong>${rival.nombre}:</strong> ${resp}`,
    rival === mecanicos.carros ? "car-mechanic" : "moto-mechanic", rival.avatar);

  btn.disabled = false; // vuelve a activar el botón
});








// ================== DEBATE AUTOMÁTICO ==================
// Evento al presionar el botón "auto-debate"
autoDebateButton.addEventListener("click", async () => {
  if (debateActivo) return; // si ya hay un debate, no inicia otro
  debateActivo = true;
  agregarMensaje("⚡ Iniciando debate...");

  // Selecciona 5 temas de la lista
  for (let i = 0; i < 5; i++) {
    agregarMensaje(`📌 Tema: ${temasDebate[i]}`);
    let turno = Math.random() < 0.5 ? "carros" : "motos", ultimo = "";

    // Cada tema tiene 4 rondas de intercambio entre mecánicos
    for (let j = 0; j < 4; j++) {
      const mec = mecanicos[turno];
      const resp = await consultarMecanico(mec, ultimo, temasDebate[i]);
      agregarMensaje(`<strong>${mec.nombre}:</strong> ${resp}`,
        turno === "carros" ? "car-mechanic" : "moto-mechanic", mec.avatar);
      ultimo = resp; // guarda el último mensaje para dar contexto
      turno = turno === "carros" ? "motos" : "carros"; // alterna turno
      await delay(2000); // pausa entre mensajes
    }
  }
  agregarMensaje("🏁 Debate finalizado.");
  debateActivo = false;
});









// ================== LIMPIAR CHAT ==================
// Limpia todo el historial de mensajes
clearButton.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  agregarMensaje("🎯 ¡Hola! Elige tu equipo y empecemos el debate.");
  debateActivo = false;
});

// Autoenfoca el input para escribir de inmediato
userInput.focus();

