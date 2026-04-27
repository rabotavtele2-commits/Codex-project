import { useState } from 'react'
import './App.css'

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
      <header>
        <h1>Coffee World</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('types')}>Coffee Types</button>
          <button onClick={() => setCurrentPage('recipes')}>Recipes</button>
          <button onClick={() => setCurrentPage('history')}>History</button>
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
      <h2>Welcome to Coffee World</h2>
      <p>Discover the rich world of coffee - from its origins to delicious recipes.</p>
    </div>
  )
}

function CoffeeTypes() {
  return (
    <div>
      <h2>Coffee Types</h2>
      <ul>
        <li><strong>Arabica:</strong> The most popular type, known for its smooth flavor.</li>
        <li><strong>Robusta:</strong> Stronger and more bitter, often used in espresso.</li>
        <li><strong>Liberica:</strong> Rare and fruity, grown in Southeast Asia.</li>
        <li><strong>Excelsa:</strong> Tart and unique, similar to Liberica.</li>
      </ul>
    </div>
  )
}

function Recipes() {
  return (
    <div>
      <h2>Coffee Recipes</h2>
      <h3>Classic Espresso</h3>
      <p>Ingredients: Ground espresso beans, water.</p>
      <p>Instructions: Brew 1 oz of finely ground coffee with 1 oz hot water under pressure.</p>
      <h3>Latte</h3>
      <p>Ingredients: Espresso, steamed milk, milk foam.</p>
      <p>Instructions: Pour espresso into a cup, add steamed milk, top with foam.</p>
    </div>
  )
}

function History() {
  return (
    <div>
      <h2>History of Coffee</h2>
      <p>Coffee originated in Ethiopia around the 9th century. It was first cultivated in Yemen and spread to Europe in the 16th century. Today, it's one of the most popular beverages worldwide.</p>
    </div>
  )
}

export default App