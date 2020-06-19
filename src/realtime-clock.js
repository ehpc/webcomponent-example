const template = document.createElement('template');
template.innerHTML = `
  <strong>
    <slot></slot>
  </strong>
  <span class="time"></span>
`;

class Clock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true));
    this.runClock();
  }

  runClock() {
    const timeEl = this.shadowRoot.querySelector('.time');
    timeEl.textContent = new Date().toLocaleString();
    setTimeout(this.runClock.bind(this), 1000);
  }
}

customElements.define('realtime-clock', Clock);
