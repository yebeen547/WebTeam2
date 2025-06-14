// compare.html 전용 JavaScript 파일

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')

  const toolsData = [
    {
      name: 'GitHub Copilot',
      category: '코드 작성',
      keyFeature: '실시간 코드 제안 및 자동 완성',
      pricing: 'Pro: $10/월 (약 12,000)',
      targetUser: '모든 개발자',
    },
    {
      name: 'Cursor',
      category: '코드 작성',
      keyFeature: '프로젝트 컨텍스트를 이해하는 AI 에디터',
      pricing: 'Pro: $20/월 (약 29,000)',
      targetUser: 'AI 활용에 적극적인 개발자',
    },
    {
      name: 'Codeium',
      category: '코드 작성',
      keyFeature: '빠른 자동완성, 개인 무료 플랜 제공',
      pricing: '개인 무료',
      targetUser: '학생, 개인 개발자',
    },
    {
      name: 'Replit Ghostwriter',
      category: '코드 작성',
      keyFeature: '클라우드 IDE 내장, 협업 기능',
      pricing: 'Core: $20/월 (약 29,000)',
      targetUser: '웹 기반 개발, 교육용',
    },
    {
      name: 'ChatGPT',
      category: '질문/대화',
      keyFeature: '다양한 주제에 대한 대화형 질의응답',
      pricing: 'Plus: $20/월 (약 29,000)',
      targetUser: '개발자, 기획자, 작가 등',
    },
    {
      name: 'Phind',
      category: '질문/검색',
      keyFeature: '개발자용 질문에 특화된 AI 검색 엔진',
      pricing: 'Pro: $20/월 (약 29,000)',
      targetUser: '기술 문제 해결이 잦은 개발자',
    },
    {
      name: 'Galileo AI',
      category: 'UI/디자인',
      keyFeature: '텍스트 설명으로 UI 디자인 자동 생성',
      pricing: 'Standard: $16/월 (약 24,000)',
      targetUser: 'UI/UX 디자이너, 개발자',
    },
    {
      name: 'Uizard',
      category: 'UI/디자인',
      keyFeature: '스케치, 스크린샷을 디자인으로 변환',
      pricing: 'Pro: $12/월 (약 18,000)',
      targetUser: '기획자, 비전문 디자이너',
    },
  ]

  let tableRows = ''
  toolsData.forEach((tool) => {
    // [추가됨] 카테고리에 따라 뱃지 색상을 결정하는 로직
    let badgeColorClass = 'bg-secondary' // 기본값은 회색
    switch (tool.category) {
      case '코드 작성':
        badgeColorClass = 'bg-primary' // 파란색
        break
      case '질문/대화':
      case '질문/검색':
        badgeColorClass = 'bg-success' // 초록색
        break
      case 'UI/디자인':
        badgeColorClass = 'bg-warning text-dark' // 노란색 (어두운 글씨)
        break
    }

    tableRows += `
            <tr>
                <td class="logo-cell"><strong>${tool.name}</strong></td>
                <td><span class="badge ${badgeColorClass}">${tool.category}</span></td>
                <td>${tool.keyFeature}</td>
                <td class="price">${tool.pricing}</td>
                <td>${tool.targetUser}</td>
            </tr>
        `
  })

  app.innerHTML = `
        <div class="container py-5">
            <div class="text-center mb-5">
                <h1 class="display-4 fw-bold">AI Model Vs</h1>
                <p class="lead text-muted">주요 AI 모델의 기능과 가격을 한눈에 비교해 보세요.</p>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th>AI 모델</th>
                            <th>카테고리</th>
                            <th>주요 기능</th>
                            <th>가격 (개인용)</th>
                            <th>주요 대상</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `
})
