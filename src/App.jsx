import { useState } from 'react'
import './App.css'

const PAGES = ['home', 'types', 'recipes', 'history']

function PageBackground({ current }) {
  return (
    <div className="page-bg-container" aria-hidden="true">
      {PAGES.map(page => (
        <div
          key={page}
          className={`page-bg page-bg--${page}`}
          style={{ opacity: current === page ? 1 : 0 }}
        />
      ))}
    </div>
  )
}

const CUPS = [
  { left: '4%',  top: '10%', fontSize: '4rem',   opacity: 0.12, delay: 0 },
  { left: '87%', top: '5%',  fontSize: '5rem',   opacity: 0.10, delay: 1.2 },
  { left: '78%', top: '55%', fontSize: '3.5rem', opacity: 0.09, delay: 0.6 },
  { left: '12%', top: '65%', fontSize: '4.5rem', opacity: 0.11, delay: 1.8 },
  { left: '48%', top: '80%', fontSize: '3rem',   opacity: 0.08, delay: 0.9 },
]

function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      {CUPS.map((cup, i) => (
        <div key={i} className="bg-cup" style={{ left: cup.left, top: cup.top, opacity: cup.opacity }}>
          <div className="smoke-wrap">
            <div className="smoke-puff puff-1" style={{ animationDelay: `${cup.delay}s` }} />
            <div className="smoke-puff puff-2" style={{ animationDelay: `${cup.delay + 0.7}s` }} />
            <div className="smoke-puff puff-3" style={{ animationDelay: `${cup.delay + 1.4}s` }} />
          </div>
          <span style={{ fontSize: cup.fontSize }}>☕</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'types':
        return <CoffeeTypes />
      case 'recipes':
        return <Recipes />
      case 'history':
        return <History />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <PageBackground current={currentPage} />
      <BackgroundDecor />
      <header>
        <h1>Мир кофе</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Главная</button>
          <button onClick={() => setCurrentPage('types')}>Виды кофе</button>
          <button onClick={() => setCurrentPage('recipes')}>Рецепты</button>
          <button onClick={() => setCurrentPage('history')}>История</button>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Добро пожаловать в мир кофе</h2>
      <p>Откройте для себя богатый мир кофе: от его происхождения до вкусных рецептов.</p>
    </div>
  )
}

function CoffeeTypes() {
  return (
    <div>
      <h2>Виды кофе</h2>
      <ul>
        <li><strong>Арабика:</strong> самый популярный вид, известный своим мягким вкусом.</li>
        <li><strong>Робуста:</strong> более крепкий и горький сорт, который часто используют в эспрессо.</li>
        <li><strong>Либерика:</strong> редкий фруктовый сорт, выращиваемый в Юго-Восточной Азии.</li>
        <li><strong>Эксцельза:</strong> терпкий и необычный вид, близкий к либерике.</li>
      </ul>
    </div>
  )
}

function Recipes() {
  return (
    <div>
      <h2>Рецепты кофе</h2>
      <h3>Классический эспрессо</h3>
      <p>Ингредиенты: молотые зерна для эспрессо, вода.</p>
      <p>Приготовление: сварите 30 мл мелко молотого кофе с 30 мл горячей воды под давлением.</p>
      <h3>Латте</h3>
      <p>Ингредиенты: эспрессо, подогретое молоко, молочная пена.</p>
      <p>Приготовление: налейте эспрессо в чашку, добавьте подогретое молоко и завершите слоем пены.</p>
    </div>
  )
}

function History() {
  return (
    <div>
      <h2>История кофе</h2>
      <p>Кофе появился в Эфиопии примерно в IX веке. Впервые его начали выращивать в Йемене, а в XVI веке напиток распространился по Европе. Сегодня кофе остается одним из самых популярных напитков в мире.</p>
    </div>
  )
}

export default App
