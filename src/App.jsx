import Header from './header'
import Links from './links'
import './App.css'
import Footer from './footer'
import BackButton from './menuButton'

function App() {
  return (
    <div className="App">
      <BackButton />
      <Header />
      <Links />
      <Footer />
    </div>
  )
}

export default App
