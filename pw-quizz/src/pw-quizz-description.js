import { css, html, LitElement } from 'lit';

export class PwQuizzDescription extends LitElement {
  static get styles() {
    return css`
      .title__question {
        text-align: center;
        margin-bottom: 1.8rem;
        font-size: 1.07rem;
        color: #4b2a9e;
        font-family: 'Fuzzy Bubbles', cursive;
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<p class="title__question">${this.item}</p>`;
  }
}

customElements.define('pw-quizz-description', PwQuizzDescription);
