import { css, html, LitElement } from 'lit';

export class PwQuizzButton extends LitElement {
  static get styles() {
    return css`
      button {
        padding: 0.5rem;
        background-color: #ee7008;
        color: wheat;
        outline: none;
        font-weight: bold;
        border: none;
        border-radius: 1rem;
        margin: 2rem auto;
        width: 18vw;
      }

      button:hover{
        background-color: #d86406;
      }

      @media screen and (max-width: 700px) {
        button {
          padding: 0.5rem;
          width: 36vw;
        }
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<button>${this.title}</button>`;
  }
}

customElements.define('pw-quizz-button', PwQuizzButton);
