let template = document.createElement('template');
template.innerHTML = `
<style>
.container{
    text-align: center;
    width: 100%;

}
</style>

<div class="container">
  &copy; My awesome company 2019
</div>
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
