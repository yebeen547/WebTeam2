document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  app.innerHTML = ''

  const categories = [
    {
      title: '코드 작성 도구 AI',
      tools: [
        {
          name: 'GitHub Copilot',
          img: '/img/GitHub Copilot.png',
          link: 'github.html',
        },
        { name: 'Cursor', img: '/img/Cursor.jpeg', link: 'cursor.html' },
        { name: 'Codeium', img: '/img/codeium.png', link: 'codeium.html' },
        {
          name: 'Replit Ghostwriter',
          img: '/img/Replit Ghostwriter.png',
          link: 'replit.html',
        },
      ],
    },
    {
      title: '질문/검색/대화형 AI',
      tools: [
        { name: 'ChatGPT', img: '/img/chatgpt.png', link: 'chatgpt.html' },
        { name: 'Phind', img: '/img/phind.jpg', link: 'phind.html' },
      ],
    },
    {
      title: 'UI/디자인 관련 AI',
      tools: [
        {
          name: 'Galileo AI',
          img: '/img/Galileo AI.png',
          link: 'galileo.html',
        },
        { name: 'Uizard', img: '/img/Uizard.jpeg', link: 'uizard.html' },
      ],
    },
  ]

  const container = document.createElement('div')
  container.className = 'container py-5'

  const pageHeader = document.createElement('div')
  pageHeader.className = 'page-title-section'
  pageHeader.innerHTML = `<h1>AI Pedia</h1><p>다양한 웹 개발 AI의 정보를 찾아보세요. 카드를 클릭하면 상세 정보로 이동합니다.</p>`
  container.appendChild(pageHeader)

  categories.forEach((category) => {
    const categorySection = document.createElement('div')
    categorySection.className = 'category-section'

    const categoryTitle = document.createElement('h2')
    categoryTitle.className = 'category-title'
    categoryTitle.textContent = category.title
    categorySection.appendChild(categoryTitle)

    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'

    category.tools.forEach((tool) => {
      const link = document.createElement('a')
      link.href = tool.link
      link.className = 'text-decoration-none text-dark ai-card-link'

      const card = document.createElement('div')
      card.className = 'ai-card'

      const img = document.createElement('img')
      img.src = tool.img
      img.alt = tool.name

      const cardBody = document.createElement('div')
      cardBody.className = 'card-body'

      const cardTitle = document.createElement('h5')
      cardTitle.className = 'card-title'
      cardTitle.textContent = tool.name

      cardBody.appendChild(cardTitle)
      card.appendChild(img)
      card.appendChild(cardBody)
      link.appendChild(card)
      cardContainer.appendChild(link)
    })

    categorySection.appendChild(cardContainer)
    container.appendChild(categorySection)
  })

  app.appendChild(container)
})
