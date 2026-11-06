export default function StudentMascot({ mood = 'idle', className = '' }) {
  return (
    <div className={`student-mascot mood-${mood} ${className}`}>
      <svg viewBox="0 0 250 300" role="img" aria-label="Ilustração de uma estudante de Goiás com uniforme azul e caderno">
        <ellipse cx="125" cy="282" rx="77" ry="12" fill="#101827" opacity=".12" />
        <g className="mascot-body">
          <path d="M59 178c-7 11-14 43-9 83l17 8 19-71-27-20Z" fill="#8B5CF6" />
          <path d="M184 175c11 8 23 34 22 59l-16 13-25-55 19-17Z" fill="#8B5CF6" />
          <path d="M74 161c9-15 32-22 52-22 23 0 44 8 53 23l14 91H57l17-92Z" fill="#3B82F6" />
          <path d="m103 143 22 20 22-20v20l-22 15-22-15v-20Z" fill="#F8FAFC" />
          <path d="M125 176v66" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 196c-13 17-14 42-12 66" stroke="#A3E635" strokeWidth="5" strokeLinecap="round" />
          <path d="M51 249c-5 0-9 4-10 9l-2 10c-1 6 4 10 10 8l13-5 5-15-16-7Z" fill="#F4BE9D" />
          <path d="M187 212c9-16 12-30 8-43" stroke="#F4BE9D" strokeWidth="12" strokeLinecap="round" />
          <path className="mascot-wave" d="M194 176c-1-12 4-22 13-26" stroke="#F4BE9D" strokeWidth="12" strokeLinecap="round" />
          <path d="M93 246h64v30H93z" fill="#A3E635" />
          <path d="M103 253h44v3h-44zm0 8h35v3h-35z" fill="#3F6212" opacity=".6" />
          <path d="M103 275v8m43-8v8" stroke="#101827" strokeWidth="13" strokeLinecap="round" />
          <path d="M91 282h-2c-10 0-17 5-17 11h38c1-5-4-10-10-11m65 0h2c10 0 17 5 17 11h-38c-1-5 4-10 10-11" fill="#101827" />
          <path d="M101 121c0 14 10 25 24 25s24-11 24-25v-19h-48v19Z" fill="#F4BE9D" />
          <path d="M82 92c0-29 18-47 43-47 27 0 44 20 44 48v23c-7-4-14-12-16-23-13 8-31 10-51 4-4 12-10 18-20 21V92Z" fill="#101827" />
          <path d="M89 87c1-22 15-36 36-36 20 0 33 11 38 30-13-4-24-12-29-21-8 14-23 23-45 27Z" fill="#172339" />
          <circle cx="77" cy="102" r="9" fill="#F4BE9D" /><circle cx="173" cy="102" r="9" fill="#F4BE9D" />
          <path d="M103 101v1m42-1v1" stroke="#101827" strokeWidth="6" strokeLinecap="round" />
          <path d="M112 122c8 7 18 7 26 0" fill="none" stroke="#A95248" strokeWidth="3" strokeLinecap="round" />
          <path d="M95 79c8-5 15-6 22-5m19 0c7-1 14 0 21 5" fill="none" stroke="#101827" strokeWidth="4" strokeLinecap="round" />
          <path d="m83 86-12-6 11-4m85 10 12-6-11-4" fill="#A3E635" />
          <circle cx="125" cy="198" r="11" fill="#A3E635" />
          <path d="m121 198 3 3 6-7" fill="none" stroke="#365314" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {mood === 'correct' && <g className="sparkles" fill="#A3E635"><path d="m49 130 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Zm148 3 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" /></g>}
        {mood === 'incorrect' && <g className="mood-cloud"><path d="M181 69c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12Z" fill="#F1F5F9"/><path d="M191 63v8m0 4v.5" stroke="#64748B" strokeWidth="3" strokeLinecap="round" /></g>}
      </svg>
    </div>
  );
}
