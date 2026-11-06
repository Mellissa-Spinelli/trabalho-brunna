import { useEffect, useState } from 'react';
import { SITE_NAME } from './data/site.js';
import SiteHeader from './components/SiteHeader.jsx';
import HomePage from './pages/HomePage.jsx';
import GamePage from './pages/GamePage.jsx';

function readRoute() {
  return window.location.hash.replace(/^#/, '') === '/jogo' ? 'game' : 'home';
}

export default function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(readRoute());
    window.addEventListener('hashchange', syncRoute);
    document.title = route === 'game' ? `Roleta do Conhecimento — ${SITE_NAME}` : `${SITE_NAME} — aprender é uma aventura`;
    return () => window.removeEventListener('hashchange', syncRoute);
  }, [route]);

  return (
    <div className={route === 'game' ? 'app app-game' : 'app app-home'}>
      <SiteHeader isGame={route === 'game'} />
      {route === 'game' ? <GamePage key="game" /> : <HomePage key="home" />}
    </div>
  );
}
