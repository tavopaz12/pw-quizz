import { css, html, LitElement } from 'lit';

export class PwQuizzAnswer extends LitElement {
  static get styles() {
    return css`
      .answers {
        border: 1px solid #5e39ba;
        margin-bottom: 1rem;
        border-radius: 5px;
        padding: 0.4rem 0.5rem 0.4rem;
        text-align: center;
        color: #37054b;
      }
      .answers:hover {
        background-color: #5e39ba;
        border: 1px solid #15ffd8;
        color: white;
      }
      ul {
        list-style: none;
      }
    `;
  }

  static get properties() {
    return {
      isCorrect: { type: Boolean },
      items: { type: Array },
      _items: { type: Array },
    };
  }

  constructor() {
    super();
    this.isCorrect = false;
    this.items = [];
  }

  render() {
    console.log(this.isCorrect);
    return html`
      <ol type="A">
        ${this.items.map(
          item =>
            html`<li class="answers" @click=${this.checkAnswer}>${item}</li>`
        )}
      </ol>
    `;
  }

  checkAnswer(e) {
    const validatedAnswer = new CustomEvent('pw-answer-selected', {
      detail: e.target.textContent,
    });
    this.dispatchEvent(validatedAnswer);
  }
}

customElements.define('pw-quizz-answer', PwQuizzAnswer);
