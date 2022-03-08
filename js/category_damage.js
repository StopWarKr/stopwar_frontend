const loadData = function() {
    return fetch('../crawlingData/kr_HistoryNewsData.json')
    .then((response) => response.json())
    .then((json) => json)
}

loadData()
.then((items) => {
  
})