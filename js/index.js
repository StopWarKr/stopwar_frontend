import { getLocalLive, removeData } from './locallive.js';
import { getRegul } from './regulation.js';
import { getNegotiation } from './negotiation.js';
import { getDamageList } from './category_damage.js';
import { search } from './search.js';

const clickDamageBtn = document
  .getElementsByClassName('damage-btn')[0]
  .addEventListener('click', () => {
    console.log('hi');
  });

const init = funtion(() => {
  clickDamageBtn();
});
init();
