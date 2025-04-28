// 저장된 데이터 가져오기
const detailContainer = document.getElementById('detail-container');
const photoData = JSON.parse(localStorage.getItem('selectedPhoto'));

// X 버튼 생성
const closeButton = document.createElement('button');
closeButton.innerText = '✖'; // X 아이콘
closeButton.className = 'close-button';
closeButton.onclick = () => {
    window.location.href = 'index.html?from=detail'; // 항상 메인으로 이동
};
document.body.appendChild(closeButton);

// detail-container에 버튼 추가
document.body.appendChild(closeButton);

// 데이터가 있으면 출력
if (photoData) {
    const createdTime = photoData.galCreatedtime;
    const formattedDate = `${createdTime.substring(2, 4)}/${createdTime.substring(4, 6)}/${createdTime.substring(6, 8)}`;
    
    const keywords = photoData.galSearchKeyword 
        ? photoData.galSearchKeyword.split(' ').map(kw => `#${kw}`).join(' ') 
        : '정보 없음';
    
    detailContainer.innerHTML = `
        <img src="${photoData.galWebImageUrl}" style="width:100%; height:300px; object-fit:cover; border-radius:10px;">
        <h2>${photoData.galTitle}</h2>
        <p>⛳ 장소: ${photoData.galPhotographyLocation}</p>
        <p>📅 날짜: ${formattedDate}</p>
        <p>📸 촬영자: ${photoData.galPhotographer || '정보 없음'}</p>
        <p>🔎 키워드: ${keywords}</p>
    `;
} else {
    detailContainer.innerHTML = '<p>불러올 데이터가 없습니다.</p>';
}
