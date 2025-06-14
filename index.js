document.addEventListener('DOMContentLoaded', function () {
  const slides = [
    {
      title: 'DevWithAI에 오신 것을 환영합니다!',
      description:
        'DevWithAI는 웹 개발자를 위한 AI 활용 가이드입니다. 넘쳐나는 AI 도구들 속에서 길을 잃지 않도록, 당신의 프로젝트에 딱 맞는 AI를 찾고 활용하는 방법을 알려드립니다.',
    },
    {
      title: 'AI Pedia',
      description:
        '코드 작성, 디자인, 질의응답 등 개발의 각 단계에 맞는 AI 모델들의 상세 정보와 특징을 소개하는 페이지입니다.',
    },
    {
      title: 'News',
      description:
        'AI 기술 및 개발자 생태계와 관련된 최신 뉴스와 트렌드를 한눈에 파악할 수 있는 페이지입니다.',
    },
    {
      title: 'AI-Vs',
      description:
        '다양한 AI 모델들의 핵심 기능과 가격 플랜을 표로 정리하여, 당신의 예산과 요구사항에 맞는 최적의 선택을 돕는 페이지입니다.',
    },
    {
      title: 'TEAM',
      description:
        'DevWithAI 프로젝트를 만든 저희 팀과 팀원들을 소개합니다. 프로젝트의 진행 과정과 각 팀원의 역할을 확인하실 수 있습니다.',
    },
  ]

  let currentIndex = 0
  const slideContainer = document.createElement('div')
  slideContainer.classList.add('slide-container')

  const textWrapper = document.createElement('div')
  textWrapper.classList.add('slide-text')
  const titleElement = document.createElement('h2')
  const descriptionElement = document.createElement('p')

  const updateSlide = (index) => {
    slideContainer.style.opacity = 0
    setTimeout(() => {
      titleElement.textContent = slides[index].title
      descriptionElement.innerHTML = slides[index].description
        .split('\n')
        .join('<br>')
      slideContainer.style.opacity = 1
    }, 300)
  }

  textWrapper.appendChild(titleElement)
  textWrapper.appendChild(descriptionElement)
  slideContainer.appendChild(textWrapper)

  const createButton = (direction) => {
    const button = document.createElement('button')
    button.innerHTML = direction === 'left' ? '&#10094;' : '&#10095;'
    button.classList.add('slide-button', direction)
    button.addEventListener('click', () => {
      currentIndex =
        (currentIndex + (direction === 'left' ? -1 : 1) + slides.length) %
        slides.length
      updateSlide(currentIndex)
    })
    return button
  }

  const leftButton = createButton('left')
  const rightButton = createButton('right')
  slideContainer.appendChild(leftButton)
  slideContainer.appendChild(rightButton)

  const mainSection = document.querySelector('#slide-section .container')
  mainSection.innerHTML = ''
  mainSection.appendChild(slideContainer)

  updateSlide(currentIndex)

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlide(currentIndex)
  }, 5000)
})
