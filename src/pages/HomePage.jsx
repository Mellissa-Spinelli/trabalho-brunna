import { SITE_DESCRIPTION, SITE_NAME } from '../data/site.js';
import RouletteWheel from '../components/RouletteWheel.jsx';
import StudentMascot from '../components/StudentMascot.jsx';

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> CONHECIMENTO EM MOVIMENTO</p>
          <h1>{SITE_NAME.split(' ')[0]}<br /><span>{SITE_NAME.split(' ').slice(1).join(' ')}</span><b className="title-star" aria-hidden="true">✳</b></h1>
          <p className="hero-description">{SITE_DESCRIPTION}</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#/jogo">Jogar Roleta <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#destaque">Conheça o jogo <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span className="note-avatars" aria-hidden="true"><i>✦</i><i>+</i><i>↗</i></span><span>Uma forma leve e divertida de aprender.</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustração da roleta e da estudante mascote">
          <div className="hero-art-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
          <div className="hero-art-label"><span className="label-star">✳</span><span>Aprender<br />pode ser<br /><strong>uma aventura!</strong></span></div>
          <div className="hero-wheel-card"><RouletteWheel rotation={0} spinning={false} /><div className="wheel-card-caption"><span>GIRE E DESCUBRA</span><b>5 temas para explorar</b></div></div>
          <StudentMascot className="hero-mascot" />
          <span className="art-spark art-spark-a" aria-hidden="true">✦</span><span className="art-spark art-spark-b" aria-hidden="true">✳</span>
          <span className="go-badge"><span>GO</span> Goiás<br />no coração</span>
        </div>
        <a className="scroll-cue" href="#destaque"><span /> ROLE PARA EXPLORAR</a>
      </section>

      <section className="featured-section" id="destaque">
        <div className="container featured-layout">
          <div className="section-intro">
            <p className="eyebrow dark-eyebrow"><span className="eyebrow-dot" /> APRENDER JOGANDO</p>
            <h2>Seu próximo<br />desafio está<br /><em>na roleta.</em></h2>
            <p>Gire, escolha uma resposta e descubra o quanto você já sabe. Cada rodada é uma nova chance de aprender.</p>
            <a className="button button-blue" href="#/jogo">Jogar agora <span aria-hidden="true">↗</span></a>
          </div>
          <article className="game-feature-card">
            <div className="feature-topline"><span className="feature-chip"><span>✦</span> JOGO EM DESTAQUE</span><span className="feature-index">01 / 01</span></div>
            <div className="feature-content">
              <div className="feature-text"><p>DESAFIO INTERATIVO</p><h3>Roleta do<br /><span>Conhecimento</span></h3><div className="feature-detail"><span className="feature-detail-icon">◷</span><span>Rápido de jogar<br /><b>Aprenda no seu ritmo</b></span></div></div>
              <div className="feature-illustration"><div className="feature-wheel"><RouletteWheel rotation={0} spinning={false} /></div><StudentMascot /></div>
            </div>
            <a className="feature-play" href="#/jogo" aria-label="Jogar Roleta do Conhecimento">↗</a>
            <div className="feature-bottom"><span>01</span><span>GIRE A ROLETA. ACERTE. APRENDA.</span><span>✳</span></div>
          </article>
        </div>
      </section>
      <footer className="site-footer container"><span>© 2026 {SITE_NAME}</span><span>Feito para aprender com curiosidade <b>✳</b></span></footer>
    </main>
  );
}
