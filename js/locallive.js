export const removeData = () => {
  const newsCardList = document.querySelector('.news-card-list');

  while (newsCardList.hasChildNodes()) {
    newsCardList.removeChild(newsCardList.firstChild);
  }
};

export const getLocalLive = async () => {
  const newsCardList = document.querySelector('.news-card-list');

  const res = await (
    await fetch('../crawlingData/kr_HistoryNewsData.json')
  ).json();

  res.forEach((news) => {
    const newsCard = document.createElement('li');

    newsCard.innerHTML = `
          <article class="news-card">
            <a href=${news.link} class="news-card-link">
              <div class="card-img-frame">
                <img src="" alt="" class="card-img" />
              </div>
              <div class="card-cont">
                <strong class="card-tit"
                  >${news.name}</strong
                >
                <p class="card-desc">
                  ${news.name}
                </p>
                <span class="card-date">${news.category}</span>
                <span class="card-source">${news.category}</span>
              </div>
            </a>
          </article>
        `;

    newsCardList.appendChild(newsCard);
  });
};
