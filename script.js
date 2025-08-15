const envelope = document.getElementById('envelope');

function toggleEnvelope() {
  const isOpen = envelope.classList.toggle('open');
  envelope.setAttribute('aria-expanded', String(isOpen));
}

envelope.addEventListener('click', toggleEnvelope);
