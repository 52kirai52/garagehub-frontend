import './App.css'
import Header from './layouts/Header'
import Main from './layouts/Main'
import Category from './layouts/Category'

function App() {
  return (
    <div className="app-container">
      <div className="app-grid">
        <Header />
        <Main />
        <Category />
      </div>
    </div>
  )
}

export default App