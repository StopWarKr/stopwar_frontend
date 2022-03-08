export const getRegul = async() => {
  try {
    const regulBtn = document.querySelector('.regul-btn');
    const res = await fetch('../crawlingData/kr_HistoryNewsData.json');
    const json = await res.json();

    json.map(ele => {
      const newsCardList = document.querySelector('.news-card-list');
      const title = ele.title;
      const content = ele.content;
      const url = ele.link;
      const time = ele.time;
      const source = ele.source;

      const li = document.createElement('li');
      const newsCard= document.createElement("article");
      const cardLink = document.createElement("a");
      const cardImgFrame = document.createElement("div");
      const cardImg = document.createElement("img");
      const cardCont = document.createElement("div");
      const cardTit = document.createElement("h3");
      const cardDesc = document.createElement("p");
      const cardDate = document.createElement("span");
      const cardSource = document.createElement("span");
      
      newsCard.classList.add("news-card");
      cardLink.classList.add("news-card-link");
      cardImgFrame.classList.add("card-img-frame");
      cardImg.classList.add("card-img");
      cardCont.classList.add("card-cont");
      cardTit.classList.add("card-tit");
      cardDesc.classList.add("card-desc");
      cardDate.classList.add("card-date");
      cardSource.classList.add("card-source");

      cardTit.textContent = title;
      cardDesc.textContent = content;
      cardDate.textContent = time;
      cardSource.textContent = source;
  
      cardLink.setAttribute('href', url);

      newsCardList.appendChild(li);
      li.appendChild(newsCard);
      newsCard.appendChild(cardLink);
      cardLink.appendChild(cardImgFrame);
      cardImgFrame.appendChild(cardImg);
      cardLink.appendChild(cardCont);
      cardCont.appendChild(cardTit);
      cardCont.appendChild(cardDesc);
      cardCont.appendChild(cardDate);
      cardCont.appendChild(cardSource);
    })
  } catch(err) {
    console.error(err)
  }
}



