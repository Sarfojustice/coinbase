import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CryptoExplore from './components/CryptoExplore'
import AdvancedTrader from './components/AdvancedTrader'
import ZeroFees from './components/ZeroFees'
import Countless from './components/Countless'
import CryptoBasics from './components/CryptoBasics'
import TakeControl from './components/TakeControl'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CryptoExplore />
      <AdvancedTrader />
      <ZeroFees />
      <Countless />
      <CryptoBasics />
      <TakeControl />
      <Footer />
    </div>
  )
}

export default App
