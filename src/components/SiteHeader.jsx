import { SITE_NAME } from '../data/site.js';

export default function SiteHeader({ isGame }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label={`${SITE_NAME}, página inicial`}>
        <span className="brand-mark" aria-hidden="true"><span>B</span></span>
        <span className="brand-name">{SITE_NAME}<small>APRENDER É UMA AVENTURA</small></span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a className={!isGame ? 'nav-link is-active' : 'nav-link'} href="#/">Início</a>
        <a className={isGame ? 'nav-link is-active' : 'nav-link'} href="#/jogo">Roleta</a>
      </nav>
      <a className="header-cta" href="#/jogo">Vamos jogar <span aria-hidden="true">↗</span></a>
    </header>
  );
}
