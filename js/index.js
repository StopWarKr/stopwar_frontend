import { getNews } from './modules/category.js';
import { search } from './modules/search.js';

//
const currentCategory = ['ALL'];

// 카테고리 클릭 이벤트(이벤트 캡쳐링)
const buttonWrapper = document.querySelector('.news-category');

buttonWrapper.addEventListener('click', (e) => {
  const btnNodes = [...buttonWrapper.children];

  btnNodes.forEach((node) => {
    node.classList.remove('on');
  });

  // for (let btn in buttonWrapper.children)

  const currentNode = e.target;
  currentCategory.pop();
  currentCategory.push(currentNode.textContent);
  if (currentNode.nodeName === 'BUTTON') {
    currentNode.parentElement.classList.add('on');
    getNews(currentNode.textContent);
  }
});

const searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener('click', search);

// 모달창
const supportModal = document.querySelector('.modal-background');

const openBtn = document.querySelector('.sponsor-info-btn');
export const openModal = () => {
  supportModal.style.display = 'flex';
};

const closeBtn = document.querySelector('.btn-close');
export const closeModal = () => {
  supportModal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
