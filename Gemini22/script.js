// ================== CONFIGURACIÓN ==================
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyAJdZAgH5l0p9ki4YPfufTPCh7ipIopC-0";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// ================== ELEMENTOS DOM ==================
const $ = (id) => document.getElementById(id);
const chatForm = $("chat-form"), userInput = $("user-input"), chatMessages = $("chat-messages"),
  clearButton = $("clear-chat"), selectSide = $("select-side"), autoDebateButton = $("auto-debate");

// ================== MECÁNICOS ==================
const mecanicos = {
  carros: {
    nombre: "Diego 🚗",
    avatar: "🚗",
    personalidad:
      "Eres Diego, mecánico de carros experto. Valoras seguridad, comodidad y confiabilidad. Hablas con respeto y base técnica, usando expresiones como 'Señor'. Argumentas que el carro es más seguro, estable económica y práctica.",
  },
  motos: {
    nombre: "Andrés 🏍️",
    avatar: "🏍️",
    personalidad:
      "Eres Andrés, mecánico de motos con experiencia. Para ti la moto seguridad, comodidad y confiabilidad. Hablas con seguridad y respeto, usando 'Señor'. Argumentas que la moto es más seguro, estable económica y práctica.",
  },
};

// ================== VARIABLES ==================
let debateActivo = false;
const temasDebate = ["Seguridad en carretera", "Costo de mantenimiento", "Comodidad para viajes", "Facilidad de estacionamiento",
  "Consumo de gasolina", "Capacidad de carga", "Manejo en tráfico", "Protección climática", "Diversión al conducir", "Costo inicial",
];

// ================== FUNCIONES BÁSICAS ==================
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Agrega un mensaje al chat
function agregarMensaje(texto, clase = "", avatar = "") {
  chatMessages.innerHTML += `<div class="message ${clase}">
    ${avatar ? `<span class="mechanic-avatar">${avatar}</span>` : ""} ${texto}
  </div>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mostrar / ocultar indicador de escritura
function mostrarTyping(mec) {
  chatMessages.innerHTML += `<div id="typing" class="typing-indicator">
    <span class="mechanic-avatar">${mec.avatar}</span> ...</div>`;
}
function ocultarTyping() { $("typing")?.remove(); }

// Llama a la IA de cada mecánico
async function consultarMecanico(mec, contexto, tema = "", esUsuario = false) {
  const prompt = `${mec.personalidad}
  ${esUsuario ? `Usuario: "${contexto}"` : `Tema: "${tema}"\nÚltimo mensaje: "${contexto}"`}
  Responde en máximo 2 oraciones.`;

  try {
    mostrarTyping(mec);
    await delay(1500);
    const res = await model.generateContent(prompt);
    ocultarTyping();
    return res.response.text().trim() || "⚠️ Respuesta vacía";
  } catch {
    ocultarTyping();
    return "⚠️ Error al responder.";
  }
}

// ================== CHAT CON USUARIO ==================
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const texto = userInput.value.trim();
  if (!texto) return;

  agregarMensaje(texto, "user-message", "👤");
  userInput.value = "";

  const rival = mecanicos[selectSide.value === "carros" ? "motos" : "carros"];
  const btn = chatForm.querySelector("button");
  btn.disabled = true;

  const resp = await consultarMecanico(rival, texto, "", true);
  agregarMensaje(`<strong>${rival.nombre}:</strong> ${resp}`,
    rival === mecanicos.carros ? "car-mechanic" : "moto-mechanic", rival.avatar);

  btn.disabled = false;
});

// ================== DEBATE AUTOMÁTICO ==================
autoDebateButton.addEventListener("click", async () => {
  if (debateActivo) return;
  debateActivo = true;
  agregarMensaje("⚡ Iniciando debate...");

  for (let i = 0; i < 2; i++) {
    agregarMensaje(`📌 Tema: ${temasDebate[i]}`);
    let turno = Math.random() < 0.5 ? "carros" : "motos", ultimo = "";

    for (let j = 0; j < 4; j++) {
      const mec = mecanicos[turno];
      const resp = await consultarMecanico(mec, ultimo, temasDebate[i]);
      agregarMensaje(`<strong>${mec.nombre}:</strong> ${resp}`,
        turno === "carros" ? "car-mechanic" : "moto-mechanic", mec.avatar);
      ultimo = resp;
      turno = turno === "carros" ? "motos" : "carros";
      await delay(8000);
    }
  }
  agregarMensaje("🏁 Debate finalizado.");
  debateActivo = false;
});

// ================== LIMPIAR CHAT ==================
clearButton.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  agregarMensaje("🎯 ¡Hola! Elige tu equipo y empecemos el debate.");
  debateActivo = false;
});

userInput.focus();




