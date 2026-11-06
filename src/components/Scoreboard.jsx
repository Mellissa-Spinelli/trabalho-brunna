const items = [
  { key: 'correct', label: 'Acertos', icon: '✓', tone: 'green' },
  { key: 'incorrect', label: 'Erros', icon: '×', tone: 'purple' },
  { key: 'answered', label: 'Respondidas', icon: '↗', tone: 'blue' },
];

export default function Scoreboard({ stats }) {
  return (
    <div className="scoreboard" aria-label="Placar do jogo">
      {items.map((item) => (
        <div className="score-card" key={item.key}>
          <span className={`score-icon ${item.tone}`} aria-hidden="true">{item.icon}</span>
          <span className="score-copy"><strong>{stats[item.key]}</strong><small>{item.label}</small></span>
        </div>
      ))}
    </div>
  );
}
