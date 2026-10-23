function Motif({ type, className='' }) {
  const common = { fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round' };
  return <svg className={`motif ${className}`} viewBox="0 0 240 180" role="img" aria-label={`${type} illustration`}>
    {type==='pulse' && <g {...common}><path d="M8 95h48l19-42 26 89 26-68 17 21h88"/><path d="M30 36c27-17 52-12 69 1M155 143c24 9 44 5 60-8" strokeDasharray="4 9" opacity=".5"/><circle cx="127" cy="74" r="7" fill="currentColor" stroke="none"/></g>}
    {type==='dice' && <g {...common} transform="rotate(-12 120 90)"><rect x="61" y="29" width="118" height="118" rx="15"/><circle cx="88" cy="56" r="6" fill="currentColor"/><circle cx="151" cy="56" r="6" fill="currentColor"/><circle cx="120" cy="88" r="6" fill="currentColor"/><circle cx="88" cy="120" r="6" fill="currentColor"/><circle cx="151" cy="120" r="6" fill="currentColor"/></g>}
    {type==='shield' && <g {...common}><path d="M120 19l70 28v42c0 42-27 69-70 84-43-15-70-42-70-84V47z"/><path d="M91 94l20 20 40-44"/><path d="M26 28l8-10m-4 39l-14-4m185 65l16 8"/></g>}
    {type==='book' && <g {...common}><path d="M120 47c-27-18-55-19-91-9v99c35-11 65-8 91 10 26-18 56-21 91-10V38c-36-10-64-9-91 9z"/><path d="M120 47v100M48 59c20-4 37-1 53 7m38 0c16-8 33-11 53-7"/></g>}
    {type==='road' && <g {...common}><path d="M91 15L47 166M149 15l44 151M120 23v25m0 22v28m0 22v29"/><path d="M28 166h184"/></g>}
    {type === 'browser' && <g {...common}><rect x="33" y="34" width="174" height="116" rx="9"/><path d="M33 60h174M48 47h2m13 0h2m13 0h2M89 102h62m-31-30v60"/></g>}
    {type === 'weather' && <g {...common}><circle cx="96" cy="73" r="30"/><path d="M96 23v-13M48 73H34m14-35-9-9m103 9 9-9M145 73h16"/><path d="M80 146h94a26 26 0 0 0 0-52 42 42 0 0 0-78-4 29 29 0 0 0-16 56z" fill="none" /></g>}
    {type === 'checklist' && <g {...common}><rect x="65" y="22" width="115" height="142" rx="8"/><path d="M85 65l9 9 16-20m16 12h35M85 108l9 9 16-20m16 12h35M85 143h76"/></g>}
    {type === 'flower' && <g {...common}><circle cx="120" cy="81" r="15"/><ellipse cx="120" cy="47" rx="16" ry="25"/><ellipse cx="120" cy="115" rx="16" ry="25"/><ellipse cx="86" cy="81" rx="25" ry="16"/><ellipse cx="154" cy="81" rx="25" ry="16"/><path d="M120 130v42m0-17c-25-23-39-9-34-2 8 11 23 11 34 2z"/></g>}
    {type === 'leaf' && <g {...common}><path d="M51 140C32 57 99 19 194 29c-3 98-55 146-143 111z"/><path d="M51 140c38-40 74-68 121-91M105 94l-5-38m25 19 40 2"/></g>}
  </svg>;
}

function Doodle({ type }) {
  if(type==='wave') return <svg className="mini-doodle" viewBox="0 0 120 44" aria-hidden="true"><path d="M3 21c14-18 25 18 39 0s25 18 39 0 25 18 36 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>;
  if(type==='star') return <svg className="mini-doodle" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 5l6 19 19 6-19 6-6 19-6-19-19-6 19-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>;
  return <svg className="mini-doodle" viewBox="0 0 70 70" aria-hidden="true"><path d="M17 50c4-30 30-43 36-23 5 19-30 28-30 7 0-12 14-16 22-11" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></svg>;
}


// Small original line drawings: scalable, theme-aware and intentionally imperfect.
function Sketch({ type, className = '' }) {
  const strokes = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.1, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const drawings = {
    lotus: <g {...strokes}>
      <path d="M40 65C27 54 28 38 40 17c12 21 13 37 0 48Z" />
      <path d="M40 65C20 61 14 46 17 27c17 7 25 19 23 38Z" />
      <path d="M40 65C60 61 66 46 63 27c-17 7-25 19-23 38Z" />
      <path d="M39 65C19 70 9 60 5 45c17-1 28 5 34 20ZM41 65c20 5 30-5 34-20-17-1-28 5-34 20Z" />
      <path d="M13 69c17 7 37 8 54 0M24 73c10 3 22 3 32 0" strokeWidth="1.5" />
    </g>,
    reading: <g {...strokes}>
      <path d="M40 23c-12-8-24-8-34-4v40c13-4 24-3 34 5 10-8 21-9 34-5V19c-10-4-22-4-34 4Z" />
      <path d="M40 23v41M13 28c9-2 15-1 21 3M13 37c8-2 14-1 21 3M47 31c6-4 13-5 20-3M47 40c7-4 13-5 20-3" strokeWidth="1.5" />
      <path d="m13 10 2-5m-9 9-4-3m65-1 3-6m4 13 5-2" strokeWidth="1.5" />
    </g>,
    ocean: <g {...strokes}>
      <path d="M3 49c14-1 17-30 34-30 15 0 17 23 6 29-8 4-16-3-11-10 3-4 8-4 12-1" />
      <path d="M3 57c11 0 15-5 24-5 11 0 13 7 24 7 9 0 14-6 26-5M8 66c9-2 15-5 24-3 10 2 15 7 25 5 7-1 12-4 18-4" strokeWidth="1.7" />
      <path d="m48 13 5-3 5 3m4-8 4-3 5 2" strokeWidth="1.5" />
    </g>,
    coffee: <g {...strokes}>
      <path d="M18 29h42v22c0 13-9 18-21 18S18 64 18 51V29Z" />
      <path d="M60 34c19-3 19 23 0 23M61 40c10-2 11 11 0 11" />
      <path d="M12 72c16 5 42 6 57 0M17 77c13 3 34 3 47 0" strokeWidth="1.6" />
      <path d="M29 23c-6-7 5-10 0-18M43 23c-6-7 5-10 0-18M54 23c-5-6 3-9 1-14" strokeWidth="1.7" />
      <path d="M24 47c2 6 5 9 9 10" strokeWidth="1.4" />
    </g>,
  };
  return <svg className={`sketch sketch--${type} ${className}`} viewBox="0 0 80 80" aria-hidden="true" focusable="false">{drawings[type]}</svg>;
}

export { Motif, Doodle, Sketch };
