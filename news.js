// news.html의 '대표 뉴스' 슬라이드 쇼 기능

document.addEventListener('DOMContentLoaded', function () {
  // id="next" 안에 있는 class="item" 요소들을 모두 선택
  const items = document.querySelectorAll('#next .item')

  // 뉴스 아이템이 하나 이상 있을 때만 슬라이드 쇼 실행
  if (items.length > 0) {
    let currentIndex = 0
    const interval = 3000 // 3초마다 전환

    // 특정 인덱스의 아이템만 보여주는 함수
    function showItem(index) {
      items.forEach((item, i) => {
        // 현재 인덱스와 일치하는 아이템만 'block'으로 표시, 나머지는 'none'
        item.style.display = i === index ? 'block' : 'none'
      })
    }

    // 다음 아이템으로 순환하는 함수
    function cycleItems() {
      currentIndex = (currentIndex + 1) % items.length
      showItem(currentIndex)
    }

    // 페이지 로드 시 첫 번째 아이템을 보여줌
    showItem(currentIndex)

    // 3초 간격으로 cycleItems 함수를 계속 실행
    setInterval(cycleItems, interval)
  }
})
