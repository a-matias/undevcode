<template>
  <div class="terminal-screen">
    <div class="screen-header">
      <div class="buttons">
        <span class="btn close"></span>
        <span class="btn minimize"></span>
        <span class="btn maximize"></span>
      </div>
      <div class="title">bash — node</div>
    </div>

    <div class="screen-body" ref="scrollContainer">
      <div class="code-content">
        <div class="line command-line">
          <span class="prompt">➜</span>
          <span class="directory">~/undevcode</span>
          <span class="command">npm run start:agency</span>
        </div>

        <div v-for="(line, index) in visibleLines" :key="index" class="line output-line">
          <span v-if="line.type === 'success'" class="success">✔ {{ line.text }}</span>
          <span v-else-if="line.type === 'info'" class="info">ℹ {{ line.text }}</span>
          <span v-else-if="line.type === 'json'" class="json-line" v-html="highlightJson(line.text)"></span>
          <span v-else class="text">{{ line.text }}</span>
        </div>

        <div class="line cursor-line" v-if="!isFinished">
          <span class="cursor">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const scrollContainer = ref(null)
const isFinished = ref(false)
const visibleLines = ref([])

// Datos a mostrar (Simulando respuesta de servidor/tabla)
const allLines = [
  { type: 'text', text: 'Initializing UndevCode Core...' },
  { type: 'info', text: 'Loading modules: [Vue3, UX/UI, Innovation]' },
  { type: 'success', text: 'System Online.' },
  { type: 'text', text: 'Fetching agency status...' },
  { type: 'json', text: '"agency": "UnDevCode Labs"' },
  { type: 'json', text: '"status": "Available for Projects"' },
  { type: 'json', text: '"stack": ["Vue", "Node", "Cloud"]' },
  { type: 'json', text: '"location": "Buenos Aires, AR"' },
  { type: 'success', text: 'Compiled successfully in 400ms' },
  { type: 'text', text: 'Ready to build the future...' },
]

const typeLines = async () => {
  for (const line of allLines) {
    // Velocidad de tipeo aleatoria
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100))
    visibleLines.value.push(line)
    
    // Auto-scroll hacia abajo cada vez que se agrega una línea
    await nextTick()
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
    }
  }
  isFinished.value = true
}

const highlightJson = (text) => {
  // Coloreado de sintaxis simple
  return text
    .replace(/^"([^"]+)":/g, '<span class="key">"$1":</span>')
    .replace(/: "([^"]+)"/g, ': <span class="string">"$1"</span>')
    .replace(/: \[(.*)\]/g, ': <span class="array">[$1]</span>')
}

onMounted(() => {
  setTimeout(typeLines, 500)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');

.terminal-screen {
  background-color: #0d1117; /* Fondo oscuro GitHub/Terminal */
  width: 100%;
  height: 100%;
  min-height: 300px; /* Altura mínima para desktop */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Importante para bordes redondeados */
  font-family: 'Fira Code', monospace;
}

/* HEADER */
.screen-header {
  background: #161b22;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #30363d;
}

.buttons {
  display: flex;
  gap: 6px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.title {
  flex: 1;
  text-align: center;
  color: #8b949e;
  font-size: 12px;
  margin-right: 40px;
}

/* BODY */
.screen-body {
  flex: 1;
  padding: 15px;
  overflow-y: auto; /* Scroll vertical si es muy largo */
  overflow-x: auto; /* Scroll horizontal si es muy ancho (FIX MOBILE) */
  scrollbar-width: thin;
  scrollbar-color: #30363d transparent;
}

/* Estilos de scrollbar para Webkit */
.screen-body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.screen-body::-webkit-scrollbar-track {
  background: transparent;
}
.screen-body::-webkit-scrollbar-thumb {
  background-color: #30363d;
  border-radius: 3px;
}

.code-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Estilos de Líneas */
.line {
  font-size: 14px;
  line-height: 1.6;
  white-space: nowrap; /* ESTO ES CLAVE: Evita que el texto baje y fuerza el scroll lateral */
  color: #c9d1d9;
}

.command-line { margin-bottom: 10px; }
.prompt { color: #d2a8ff; margin-right: 8px; font-weight: bold; }
.directory { color: #58a6ff; margin-right: 8px; }
.command { color: #f0f6fc; font-weight: bold; }

.success { color: #3fb950; }
.info { color: #58a6ff; }
.json-line { padding-left: 15px; display: block; }

/* Colores JSON (Deep selectors para v-html) */
:deep(.key) { color: #7ee787; } /* Verde brillante (la "tabla" verde) */
:deep(.string) { color: #a5d6ff; }
:deep(.array) { color: #d2a8ff; }

.cursor {
  color: #58a6ff;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* RESPONSIVE AJUSTES */
@media (max-width: 640px) {
  .terminal-screen {
    min-height: 100%; /* Se adapta al contenedor padre */
    display: none;
  }
  
  .line {
    font-size: 12px; /* Fuente un poco más chica en mobile */
  }
  
  .screen-body {
    padding: 10px;
  }
}
</style>