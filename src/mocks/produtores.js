import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';
import george from '../assets/produtores/george.jpg';
import anacleto from '../assets/produtores/anacleto.jpg';
import renato from '../assets/produtores/renato.jpg';
import yuri from '../assets/produtores/yuri.jpg';
import ryan from '../assets/produtores/ryan.jpg';
import paulo from '../assets/produtores/paulo.jpg';
import kevin from '../assets/produtores/kevin.jpg';
import mario from '../assets/produtores/mario.jpg';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Glorys Farm',
      imagem: george,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Renatoso Farm',
      imagem: renato,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Gago Farm',
      imagem: anacleto,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Androulis Farm',
      imagem: yuri,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Sleiman Farm',
      imagem: kevin,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Gamer Farm',
      imagem: ryan,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Plabo Farm',
      imagem: paulo,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Mario Farm',
      imagem: mario,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
