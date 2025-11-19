<template>
  <div class="terminal">
    <!-- Terminal Header -->
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="btn-close"></span>
        <span class="btn-minimize"></span>
        <span class="btn-maximize"></span>
      </div>
      <div class="terminal-title">terminal@undevcode:~</div>
    </div>
    
    <!-- Terminal Body -->
    <div class="terminal-body">
      <div class="terminal-line">
        <span class="prompt">$</span>
        <span class="command">{{ displayedCommand }}</span>
        <span v-if="showCursor && !isComplete" class="cursor">█</span>
      </div>
      
      <div v-if="showOutput" class="output-lines">
        <div v-for="(line, index) in outputLines" :key="index" class="output-line">
          {{ line }}
        </div>
      </div>
      
      <div v-if="isComplete" class="terminal-line">
        <span class="prompt">$</span>
        <span class="cursor blink">█</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const command = "npm run dev"
const displayedCommand = ref("")
const showCursor = ref(true)
const showOutput = ref(false)
const isComplete = ref(false)
const currentCharIndex = ref(0)

const outputLines = [
  "",
  "VITE v5.0.8  ready in 234 ms",
  "",
  "➜  Local:   http://localhost:5173/",
  "➜  Network: use --host to expose",
  "➜  press h + enter to show help",
  "",
  "✓ Client ready"
]

let typingInterval = null
let cursorInterval = null

const typeCommand = () => {
  if (currentCharIndex.value < command.length) {
    displayedCommand.value += command[currentCharIndex.value]
    currentCharIndex.value++
  } else {
    clearInterval(typingInterval)
    setTimeout(() => {
      showOutput.value = true
      setTimeout(() => {
        isComplete.value = true
      }, 800)
    }, 500)
  }
}

const startCursorBlink = () => {
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
}

const reset = () => {
  displayedCommand.value = ""
  showOutput.value = false
  isComplete.value = false
  currentCharIndex.value = 0
  showCursor.value = true
  
  setTimeout(() => {
    typingInterval = setInterval(typeCommand, 100)
  }, 1000)
}

onMounted(() => {
  startCursorBlink()
  setTimeout(() => {
    typingInterval = setInterval(typeCommand, 100)
  }, 1000)
  
  // Reiniciar animación cada 10 segundos
  // setInterval(reset, 10000)
})

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
  if (cursorInterval) clearInterval(cursorInterval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

.terminal {
  background: #0a0a0a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0 0 50px rgba(0, 255, 0, 0.1);
  font-family: 'Fira Code', monospace;
  width: 100%;
  min-height: 400px;
}

.terminal-header {
  background: #1a1a1a;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #2a2a2a;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.btn-close {
  background: #ff5f56;
}

.btn-minimize {
  background: #ffbd2e;
}

.btn-maximize {
  background: #27c93f;
}

.terminal-title {
  color: #666;
  font-size: 0.875rem;
  flex: 1;
  text-align: center;
}

.terminal-body {
  padding: 1.5rem;
  color: #00ff00;
  font-size: 0.95rem;
  line-height: 1.6;
  min-height: 350px;
}

.terminal-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.prompt {
  color: #00ff00;
  margin-right: 0.5rem;
  font-weight: 500;
}

.command {
  color: #00ff00;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.cursor {
  display: inline-block;
  color: #00ff00;
  animation: none;
  margin-left: 2px;
}

.cursor.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.output-lines {
  margin-top: 1rem;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.output-line {
  color: #4ade80;
  margin-bottom: 0.25rem;
  text-shadow: 0 0 3px rgba(74, 222, 128, 0.3);
}

/* Efecto CRT */
.terminal::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 2;
}

/* Responsive */
@media (max-width: 640px) {
  .terminal-body {
    font-size: 0.8rem;
    padding: 1rem;
    text-align: left;
  }
  
  .terminal-title {
    font-size: 0.75rem;
  }
}
</style>