import { useState } from 'react';
import { questions } from '../data/questions.js';
import { SITE_NAME } from '../data/site.js';
import { useWheelGame } from '../hooks/useWheelGame.js';
import Scoreboard from '../components/Scoreboard.jsx';
import RouletteWheel from '../components/RouletteWheel.jsx';
import StudentMascot from '../components/StudentMascot.jsx';

export default function GamePage() {
  const game = useWheelGame();
  const [lastMood, setLastMood] = useState('idle');
  const question = game.currentQuestion;
  const feedbackMood = game.result || (game.spinning ? 'thinking' : lastMood);

  function selectAnswer(index) {
    if (!question || game.result !== null) return;
    game.answer(index);
    setLastMood(index === question.answer ? 'correct' : 'incorrect');
  }

  function continueGame() {
    game.continueGame();
    setLastMood('idle');
  }

  return (
    <main className="game-page container">
      <div className="game-heading">
        <div>
          <p className="eyebrow dark-eyebrow"><span className="eyebrow-dot" /> HORA DO DESAFIO</p>
          <h1>Roleta do <em>Conhecimento</em><span className="heading-spark">✳</span></h1>
          <p>Gire a roleta, responda e descubra algo novo pelo caminho.</p>
        </div>
        <button className="reset-button" type="button" onClick={() => { game.restart(); setLastMood('idle'); }}><span aria-hidden="true">↺</span> Reiniciar jogo</button>
      </div>

      <Scoreboard stats={game.stats} />

      <section className="game-board" aria-label="Roleta e pergunta">
        <div className="wheel-panel">
          <div className="panel-heading"><span className="panel-heading-dot" /> SUA ROLETA <span>01 — 05</span></div>
          <div className="wheel-stage">
            <div className="wheel-ground" aria-hidden="true" />
            <RouletteWheel rotation={game.rotation} spinning={game.spinning} selectedId={question?.id} />
            <div className="mascot-side"><StudentMascot mood={feedbackMood} /><div className="speech-bubble">{game.result === 'correct' ? 'Mandou bem!' : game.result === 'incorrect' ? 'Tente de novo!' : game.spinning ? 'Pensando...' : 'Vamos nessa!'}</div></div>
          </div>
          <button className={`spin-button ${game.spinning ? 'is-loading' : ''}`} type="button" onClick={game.spin} disabled={game.spinning || Boolean(question)}>
            <span className="spin-icon" aria-hidden="true">{game.spinning ? '◌' : '↻'}</span>
            {game.spinning ? 'A roleta está girando...' : question ? 'Pergunta sorteada' : 'Girar Roleta'}
            {!game.spinning && !question && <span className="spin-arrow" aria-hidden="true">↗</span>}
          </button>
          <p className="spin-hint">{game.spinning ? 'A sorte está lançada!' : 'Cada giro revela uma pergunta surpresa.'}</p>
        </div>

        <div className={`question-panel ${game.result ? `has-${game.result}` : ''}`}>
          <div className="question-panel-head"><span className="question-kicker">{question ? 'SUA PERGUNTA' : 'PREPARE-SE'}</span><span className="question-count">{question ? `0${game.usedCount}` : `0${Math.min(game.usedCount + 1, questions.length)}`} <i>/ 0{questions.length}</i></span></div>
          {!question ? (
            <div className="question-empty">
              <div className="question-icon" aria-hidden="true">{game.spinning ? '✦' : '？'}</div>
              <h2>{game.spinning ? 'A sorte está girando!' : 'Pronto para jogar?'}</h2>
              <p>{game.spinning ? 'Segure a curiosidade… sua pergunta já vem aí.' : 'Clique em “Girar Roleta” para sortear sua primeira pergunta.'}</p>
              {game.notice && <p className="round-notice" role="status">✳ {game.notice}</p>}
              <div className="question-empty-footer"><span>✳</span> UMA PERGUNTA POR GIRO</div>
            </div>
          ) : (
            <div className="question-active" key={question.id}>
              <span className="category-pill">✦ {question.category}</span>
              <h2>{question.prompt}</h2>
              <div className="answer-list" role="group" aria-label="Alternativas de resposta">
                {question.options.map((option, index) => {
                  const isRight = index === question.answer;
                  const isChosen = index === game.selectedAnswer;
                  let stateClass = '';
                  if (game.result && isRight) stateClass = 'is-correct';
                  else if (game.result && isChosen && !isRight) stateClass = 'is-incorrect';
                  return (
                    <button className={`answer-option ${stateClass}`} key={option} type="button" onClick={() => selectAnswer(index)} disabled={game.result !== null}>
                      <span className="answer-letter">{String.fromCharCode(65 + index)}</span><span className="answer-text">{option}</span>
                      {game.result && isRight && <span className="answer-mark" aria-label="Resposta correta">✓</span>}
                      {game.result && isChosen && !isRight && <span className="answer-mark" aria-label="Sua resposta">×</span>}
                    </button>
                  );
                })}
              </div>
              {game.result ? (
                <div className={`feedback-box ${game.result}`} role="status" aria-live="polite">
                  <span className="feedback-symbol" aria-hidden="true">{game.result === 'correct' ? '✓' : '↗'}</span>
                  <span><b>{game.result === 'correct' ? 'Resposta certa!' : 'Quase lá!'}</b><small>{game.result === 'correct' ? 'Você acertou. Continue assim!' : `A resposta correta é ${String.fromCharCode(65 + question.answer)}: ${question.options[question.answer]}.`}</small></span>
                </div>
              ) : (
                <p className="answer-hint"><span>↳</span> Escolha uma alternativa para responder</p>
              )}
              {game.result && <button className="continue-button" type="button" onClick={continueGame}>Continuar <span aria-hidden="true">→</span></button>}
            </div>
          )}
        </div>
      </section>
      <p className="game-footer-note"><span>✳</span> DICA DA BRUNNA <b>O importante é se divertir enquanto aprende!</b></p>
      <footer className="site-footer game-site-footer"><span>© 2026 {SITE_NAME}</span><a href="#/">Voltar para o início ↑</a></footer>
    </main>
  );
}
