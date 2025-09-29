const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Selecteer de derde section in main
const section = document.querySelector('main > section:nth-child(3)');
const artikelen = section.querySelectorAll('article');
let huidigepagina = 0;

function toonArtikel(index) {
  artikelen.forEach((artikel, i) => {
    artikel.style.display = i === index ? 'grid' : 'none';
  });
}

nextBtn.addEventListener('click', () => {
  huidigepagina = (huidigepagina + 1) % artikelen.length;
  toonArtikel(huidigepagina);
});

prevBtn.addEventListener('click', () => {
  huidigepagina = (huidigepagina - 1 + artikelen.length) % artikelen.length;
  toonArtikel(huidigepagina);
});

/* bron: javascript featured and recommended */