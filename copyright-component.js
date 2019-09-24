let template = document.createElement('template');
template.innerHTML = `
<style>
.container{
    text-align: center;
    width: 100%;
}
.hidden{
    display: none;
}
</style>

<div class="container">
  &copy; My awesome company 2019 <span id="secret-emoji" class="hidden">🤓</span>
</div>
`;

class CopyrightNotice extends HTMLElement {
  constructor() {
    super();

    let templateClone = template.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(templateClone);

    let contentElement = this.shadowRoot.querySelector('.container');
    contentElement.addEventListener('click', this.showEmoji);
  }

  showEmoji() {
    const emoji = this.querySelector('#secret-emoji');
    if (emoji.classList.contains('hidden')) {
      emoji.classList.remove('hidden');
    } else {
      emoji.classList.add('hidden');
    }
  }
}

customElements.define('copyright-notice', CopyrightNotice);
