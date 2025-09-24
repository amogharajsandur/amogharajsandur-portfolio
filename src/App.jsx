import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx' 
import TechProjectsCard from './components/cards/tech-projects-card.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <TechProjectsCard />
      </main>
      <Footer />
    </>
  )
}

export default App