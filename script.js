const words = [
  // ОН
  { word: 'го́род', gender: 'masc' },
  { word: 'стол', gender: 'masc' },
  { word: 'сын', gender: 'masc' },
  { word: 'брат', gender: 'masc' },
  { word: 'уро́к', gender: 'masc' },
  { word: 'каранда́ш', gender: 'masc' },
  { word: 'нож', gender: 'masc' },
  { word: 'шарф', gender: 'masc' },
  { word: 'со́к', gender: 'masc' },
  { word: 'за́втрак', gender: 'masc' },

  // ОНА
  { word: 'су́мка', gender: 'fem' },
  { word: 'страна́', gender: 'fem' },
  { word: 'ры́ба', gender: 'fem' },
  { word: 'ма́ма', gender: 'fem' },
  { word: 'бу́ква', gender: 'fem' },
  { word: 'шко́ла', gender: 'fem' },
  { word: 'ло́жка', gender: 'fem' },
  { word: 'ко́мната', gender: 'fem' },
  { word: 'вода́', gender: 'fem' },

  // ОНО
  { word: 'окно́', gender: 'neut' },
  { word: 'молоко́', gender: 'neut' },
  { word: 'сло́во', gender: 'neut' },
  { word: 'вино́', gender: 'neut' },
  { word: 'у́тро', gender: 'neut' },
  { word: 'фо́то', gender: 'neut' }
];

function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

const pool = document.getElementById('pool');
shuffle(words);

words.forEach(item => {
  const el = document.createElement('div');
  el.className = 'word';
  el.textContent = item.word;
  el.draggable = true;
  el.dataset.gender = item.gender;

  el.addEventListener('dragstart', () => {
    window.dragged = el;
  });

  pool.appendChild(el);
});

['masc','fem','neut'].forEach(id => {
  const col = document.getElementById(id);

  col.addEventListener('dragover', e => e.preventDefault());

  col.addEventListener('drop', () => {
    if (window.dragged && window.dragged.dataset.gender === id) {
      window.dragged.classList.add('correct');
      col.appendChild(window.dragged);
      window.dragged = null;
    }
  });
});
