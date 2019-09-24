let template = document.createElement('template');
template.innerHTML = `
&copy; My awesome company 2019
`;

class CopyrightNotice extends HTMLElement {
  constructor() {
    super();

    let templateClone = template.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(templateClone);
  }
}

customElements.define('copyright-notice', CopyrightNotice);
