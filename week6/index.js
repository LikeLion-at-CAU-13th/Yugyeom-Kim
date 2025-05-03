const baseURL="http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "7LdlYREt0BQzioX2neC%2FZUw0emWBcoxUdLK2CV1hDCae1mBvHpaMeCDmb%2BLNTD0JXatqO1%2F1RRZeIe81aL6nsg%3D%3D",
    numofRows: 6,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
  };

const container = document.getElementById('container');
let photoCount = 0;

// 저장된 사진 복원하는 함수
function restorePhotos() {
  const storedPhotos = JSON.parse(localStorage.getItem('storedPhotos'));
  if (storedPhotos) {
      storedPhotos.forEach((data) => {
          renderPhoto(data);
      });
  }
}

// 사진 하나 렌더링
function renderPhoto(data) {
  const list = document.createElement('div');
  list.className = 'list';

  const image = document.createElement('img');
  image.src = data.galWebImageUrl;
  
  const info = document.createElement('span');
  info.innerText = `
  📷 ${++photoCount}번째 사진
  💬 제목 : ${data.galTitle}
  ⛳️ 장소 : ${data.galPhotographyLocation}`;

  list.appendChild(image);
  list.appendChild(info);

  // 더보기 버튼 추가가
  const button = document.createElement('button');
  button.innerText = "더보기";
  button.onclick = () => {
      localStorage.setItem('selectedPhoto', JSON.stringify(data));
      window.location.href = 'detail.html';
  };
  list.appendChild(button);

  container.appendChild(list);
}

// 무작위 페이지 번호 생성 함수
function getRandomPageNumber() {
  return Math.floor(Math.random() * 50) + 1; 
}

// API에서 데이터 가져오기기
async function getData(params) {
    const randomPage = getRandomPageNumber();
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${randomPage}&serviceKey=${option.serviceKey}`

    const fetchData = await fetch(url);
    const toJson = await fetchData.json();
    const datas = await toJson.response.body.items.item;
    
    // 누적 저장
    let storedPhotos = JSON.parse(localStorage.getItem('storedPhotos')) || [];
    storedPhotos = storedPhotos.concat(datas);
    localStorage.setItem('storedPhotos', JSON.stringify(storedPhotos));

    datas.forEach((data) => {
        renderPhoto(data);
    });
     
}

// URL 파라미터 읽기
const urlParams = new URLSearchParams(window.location.search);
const from = urlParams.get('from');

// 만약 처음 방문이면 저장 초기화
if (from !== 'detail') {
    localStorage.removeItem('storedPhotos');
    photoCount = 0; // 번호도 초기화
}

// 처음 로딩될 때 복원 시도
restorePhotos();
