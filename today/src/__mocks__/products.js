import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2021',
    description: 'The guitar is a fretted musical instrument that typically has six strings',
    media: '/static/images/products/product1.png',
    title: 'Guitar',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2020',
    description: 'The bass drum, or kick drum, is a large drum that produces a note of low definite or indefinite pitch',
    media: '/static/images/products/product2.jpg',
    title: 'Bass drum',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2021',
    description: 'A tabla is a pair of twin hand drums from the Indian subcontinent. Since the 18th century, tabla has been the principal percussion instrument in Hindustani classical music',
    media: '/static/images/products/product6.jpg',
    title: 'Tabla',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2020',
    description: 'The veena, also spelled vina, comprises a family of chordophone instruments from the Indian subcontinent.Ancient musical instruments evolved into many variations, such as lutes, zithers and arched harps.',
    media: '/static/images/products/product4.jpg',
    title: 'veena',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '10/06/2020',
    description: 'The instruments in this family all used to be made of wood, which gives them their name. Today, they are made of wood, metal, plastic or some combination. ',
    media: '/static/images/products/product5.jpg',
    title: 'Woodwinds',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '02/12/2020',
    description: 'A piano usually has a protective wooden case surrounding the soundboard and metal strings, which are strung under great tension on a heavy metal frame.',
    media: '/static/images/products/product6.jpg',
    title: 'Piano',
    totalDownloads: '835'
  }
];
