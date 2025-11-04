<template>
  <footer class="footer">
    <LayoutView>
      <div class="footer-grid">
        <div>
          <h3 class="footer-brand">UnDevCode</h3>
          <p class="footer-text">
            Transformando el futuro digital con soluciones innovadoras de software
          </p>
        </div>
        <div>
          <h4 class="footer-heading">Servicios</h4>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Desarrollo Web</a></li>
            <li><a href="#" class="footer-link">Apps Móviles</a></li>
            <li><a href="#" class="footer-link">Consultoría</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Empresa</h4>
          <ul class="footer-list">
            <li><a href="#nosotros" class="footer-link">Sobre nosotros</a></li>
            <li><a href="#" class="footer-link">Equipo</a></li>
            <li><a href="#" class="footer-link">Carreras</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Contacto</h4>
          <ul class="footer-list">
            <li>info@undevcode.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 UnDevCode. Todos los derechos reservados.</p>
      </div>
    </LayoutView>
  </footer>
</template>

<script setup>
import LayoutView from './LayoutView.vue'
</script>

<style scoped>
.footer {
  background: rgba(245, 245, 245, 0.3);
  border-top: 1px solid #e5e5e5;
  padding: 3rem 1rem;
}

@media (min-width: 640px) {
  .footer {
    padding: 3rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .footer {
    padding: 3rem 2rem;
  }
}

.footer-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-brand {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-text {
  font-size: 0.875rem;
  color: #737373;
  line-height: 1.75;
}

.footer-heading {
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-list li {
  font-size: 0.875rem;
  color: #737373;
}

.footer-link {
  color: #737373;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #0a0a0a;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
  text-align: center;
  font-size: 0.875rem;
  color: #737373;
}
</style>
