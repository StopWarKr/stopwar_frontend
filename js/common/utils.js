export const getData = (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    alert('데이터 호출에 실패하였습니다.');
    console.log(`Error: ${error}`);
  }
};
