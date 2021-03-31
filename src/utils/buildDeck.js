/* eslint-disable linebreak-style */
import shuffle from 'lodash.shuffle';
import img1 from '../public/img/1.jpg';
import img2 from '../public/img/2.jpg';
import img3 from '../public/img/3.jpg';
import img4 from '../public/img/4.jpg';
import img5 from '../public/img/5.jpg';
import img6 from '../public/img/6.jpg';
import img7 from '../public/img/7.jpg';
import img8 from '../public/img/8.jpg';

const N = 16;

export default () => {
  const cards = [];
  let index = 1;

  while (cards.length < N) {
    let img0 = null;

    if (index === 1) {
      img0 = img1;
    } else if (index === 2) {
      img0 = img2;
    } else if (index === 3) {
      img0 = img3;
    } else if (index === 4) {
      img0 = img4;
    } else if (index === 5) {
      img0 = img5;
    } else if (index === 6) {
      img0 = img6;
    } else if (index === 7) {
      img0 = img7;
    } else if (index === 8) {
      img0 = img8;
    }

    const card = {
      img: img0,
      guess: false,
    };
    cards.push(card);
    cards.push({ ...card });

    index += 1;
  }

  return shuffle(cards);
};
