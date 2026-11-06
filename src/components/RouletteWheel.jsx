import { questions } from '../data/questions.js';

function pointAt(angle, radius) {
  const radians = (angle * Math.PI) / 180;
  return { x: 100 + radius * Math.cos(radians), y: 100 + radius * Math.sin(radians) };
}

function segmentPath(index) {
  const start = pointAt(-90 + index * 72, 83);
  const end = pointAt(-90 + (index + 1) * 72, 83);
  return `M 100 100 L ${start.x} ${start.y} A 83 83 0 0 1 ${end.x} ${end.y} Z`;
}

export default function RouletteWheel({ rotation, spinning, selectedId }) {
  return (
    <div className={`wheel-wrap ${spinning ? 'is-spinning' : ''}`}>
      <span className="wheel-pointer" aria-hidden="true"><svg viewBox="0 0 30 36"><path d="M15 36 1 2l14 8L29 2 15 36Z" fill="#A3E635" stroke="#101827" strokeWidth="2" strokeLinejoin="round" /></svg></span>
      <div className="wheel-rim">
        <svg className="wheel" viewBox="0 0 200 200" style={{ transform: `rotate(${rotation}deg)` }} aria-label="Roleta colorida com cinco temas" role="img">
          <circle cx="100" cy="100" r="96" fill="#fff" />
          {questions.map((question, index) => {
            const label = pointAt(-90 + index * 72 + 36, 54);
            return (
              <g key={question.id}>
                <path className={`wheel-segment color-${index} ${selectedId === question.id ? 'is-selected' : ''}`} d={segmentPath(index)} />
                <text className="wheel-label" x={label.x} y={label.y + 3}>{question.shortLabel}</text>
              </g>
            );
          })}
          <circle cx="100" cy="100" r="19" fill="#fff" stroke="#101827" strokeWidth="3" />
          <circle cx="100" cy="100" r="6" fill="#101827" />
        </svg>
      </div>
      <span className="wheel-spark spark-one" aria-hidden="true">✳</span>
      <span className="wheel-spark spark-two" aria-hidden="true">✦</span>
    </div>
  );
}
