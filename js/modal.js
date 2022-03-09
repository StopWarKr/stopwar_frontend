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

// [이예슬] modal background click -> modal close
document.addEventListener('mousemove', (e) => {
  const element = document.elementFromPoint(e.pageX, e.pageY);
  const isBg = element.className == 'modal-background';

  if(isBg) closeBtn();
});