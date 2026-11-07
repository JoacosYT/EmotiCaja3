    const menuButton = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));

    const search = document.getElementById('emotion-search');
    const cards = [...document.querySelectorAll('.emotion-card')];
    const noResults = document.getElementById('no-results');
    search.addEventListener('input', () => {
      const term = search.value.trim().toLocaleLowerCase('es');
      let visible = 0;
      cards.forEach(card => {
        const match = card.dataset.name.includes(term);
        card.hidden = !match;
        if (match) visible++;
      });
      noResults.style.display = visible ? 'none' : 'block';
    });

    document.getElementById('contact-form').addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const recipient = 'CORREO_OFICIAL@ejemplo.com'; // Reemplazar por el correo real
      const subject = encodeURIComponent('Mensaje desde el sitio web de Emoticaja');
      const body = encodeURIComponent(
        `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\nMensaje:\n${data.get('message')}`
      );
      document.getElementById('form-status').textContent = 'Se abrirá tu aplicación de correo para completar el envío.';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
    document.getElementById('year').textContent = new Date().getFullYear();
