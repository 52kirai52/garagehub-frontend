import Header from './layouts/Header'
import Main from './layouts/Main'
import Category from './layouts/Category'

function App() {
  return (
    <div style={{ backgroundColor: '#d1d5db', minHeight: '100vh', overflow: 'auto'}}>
      <div style={{ 
        display: 'grid',
        gridTemplateAreas: `"header main" "category main"`,
        gridTemplateColumns: '180px 1076px',
        gridTemplateRows: '160px 596px',
        gap: '8px',
        padding: '8px',
      }}>
        <Header />
        <Main />
        <Category />
      </div>
    </div>
  )
}

export default App