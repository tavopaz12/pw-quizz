import { css, html, LitElement } from 'lit';
import './pw-quizz-description.js';
import './pw-quizz-answer.js';
import './pw-quizz-button.js';

export class PwQuizzItem extends LitElement {
  static get styles() {
    return css`
      .container__button {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .quiz__item__container {
        background-color: white;
        border-radius: 0.8rem;
        padding: 1.5rem;
        width: 40%;
        align-items: center;
        margin: 3rem auto;
        height: 70vh;
      }
      .counter__item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        margin-bottom: 3rem;
        padding: 0.1rem;
      }

      @media screen and (max-width: 700px) {
        .quiz__item__container {
          width: 80%;
        }
      }
    `;
  }

  static get properties() {
    return {
      isLast: { type: Boolean, attribute: 'is-last', reflect: true },
      value: { type: Object },
      isCorrect: { type: Boolean },
      counterCorrect: { type: Number },
    };
  }

  constructor() {
    super();
    this.isCorrect = false;
  }

  render() {
    return html`
      <div class="quiz__item__container">
        <div class="counter__item">
          <h3>Acertadas: ${this.counterCorrect}</h3>
          <h3>${this.value.id} / 10</h3>
        </div>
        <pw-quizz-description
          .item=${this.value.description}
        ></pw-quizz-description>

        <pw-quizz-answer
          .isCorrect=${this.isCorrect}
          .items=${this.value.options}
          @pw-answer-selected=${this.validatedAnswer}
        ></pw-quizz-answer>

        <div class="container__button">
          <pw-quizz-button
            title="Previo"
            @click=${this.onPrev}
          ></pw-quizz-button>

          ${this.isLast
            ? html`<pw-quizz-button
                title="Finalizar"
                @click=${this.finalized}
              ></pw-quizz-button>`
            : html`<pw-quizz-button
                title="Next"
                @click=${this.onNext}
              ></pw-quizz-button>`}
        </div>
      </div>
    `;
  }

  finalized() {
    const finalizedEvent = new CustomEvent('finalized');

    this.dispatchEvent(finalizedEvent);
  }

  validatedAnswer(e) {
    this.value.answer = e.detail;
  }

  onNext() {
    const nextEvent = new CustomEvent('pw-item-next');
    this.dispatchEvent(nextEvent);
  }

  onPrev() {
    const prevEvent = new CustomEvent('pw-item-prev');
    this.dispatchEvent(prevEvent);
  }
}

customElements.define('pw-quizz-item', PwQuizzItem);
