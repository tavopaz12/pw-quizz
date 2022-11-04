import { html, css, LitElement } from 'lit';
import './pw-quizz-item.js';

export class PwQuizz extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      options: { type: Array },
      current: { type: Number },
      counterCorrect: { type: Number },
    };
  }

  constructor() {
    super();
    this.options = [];
    this.current = 0;
    this.counterCorrect = 0;
  }

  render() {
    console.log(this.counterCorrect);
    return html`
      ${this.options.map(
        (item, index) => html` <pw-quizz-item
          .value=${item}
          .counterCorrect=${this.counterCorrect}
          ?hidden=${this.current !== index}
          @pw-item-next=${this.setNext}
          @pw-item-prev=${this.setPrev}
        ></pw-quizz-item>`
      )}
    `;
  }

  setNext() {
    if (this.current === this.options.length - 1) {
      return;
    }

    this.current += 1;
  }

  setPrev() {
    if (this.current === 0) {
      return;
    }
    this.current -= 1;
  }
}
