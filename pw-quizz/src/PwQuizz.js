import { html, css, LitElement } from 'lit';
import './pw-quizz-item.js';

export class PwQuizz extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      score: Number,
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
          ?is-last=${index === this.options.length - 1}
          @finalized=${this.finalized}
        ></pw-quizz-item>`
      )}
      <h1>${this.score}</h1>
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

  finalized() {
    this.score = this.options.reduce((prev, current) => {
      let add = 0;
      if (current.answer === current.optionCorrect) {
        add = 1;
      }
      return prev + add;
    }, 0);
  }
}
