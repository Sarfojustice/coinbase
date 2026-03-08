import { useState, useEffect, useCallback } from 'react'

const tabs = ['Tradable', 'Top gainers', 'New on Coinbase']

function formatPrice(usdPrice, ghsRate) {
  const price = usdPrice * ghsRate
  if (price >= 1000) return 'GHS ' + price.toLocaleString('en-US', { maximumFractionDigits: 2 })
  if (price >= 1) return 'GHS ' + price.toFixed(2)
  return 'GHS ' + price.toFixed(4)
}

export default function CryptoExplore() {
  const [activeTab, setActiveTab] = useState('Tradable')
  const [coins, setCoins] = useState([])
  const [ghsRate, setGhsRate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const [cryptoRes, rateRes] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h'),
        fetch('https://open.er-api.com/v6/latest/USD'),
      ])

      const cryptoData = await cryptoRes.json()
      const rateData = await rateRes.json()

      setCoins(cryptoData)
      setGhsRate(rateData.rates.GHS)
      setLoading(false)
      setError(false)
    } catch {
      setError(true)
      setLoading(false)
    }
  }, [])

  // Initial fetch + refresh every 60 seconds
  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [fetchData])

  const getTabCoins = () => {
    if (!coins.length) return []
    if (activeTab === 'Tradable') return coins.slice(0, 6)
    if (activeTab === 'Top gainers')
      return [...coins]
        .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
        .slice(0, 6)
    return coins.slice(14, 20)
  }

  const displayCoins = getTabCoins()

  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left - text */}
          <div className="flex-1 max-w-[520px]">
            <h2
              className="text-[40px] sm:text-[48px] lg:text-[52px] leading-[1.08] text-gray-900 mb-5"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>

            <p className="text-[17px] text-gray-500 mb-8 font-normal">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>

            <button className="px-7 py-4 text-[17px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              See more assets
            </button>
          </div>

          {/* Right - dark card */}
          <div className="flex-1 bg-[#0a0b0d] rounded-3xl overflow-hidden max-w-2xl ml-auto">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-6 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-[17px] font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-[#2a2b2f] text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Asset list */}
            <div className="px-6 pb-6">
              {loading && (
                <div className="py-10 text-center text-gray-500 text-[16px]">Loading...</div>
              )}
              {error && (
                <div className="py-10 text-center text-gray-500 text-[16px]">Failed to load data.</div>
              )}
              {!loading && !error && displayCoins.map((coin, i) => {
                const change = coin.price_change_percentage_24h
                const up = change >= 0
                return (
                  <div
                    key={coin.id}
                    className={`flex items-center justify-between py-5 ${
                      i < displayCoins.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-12 h-12 rounded-full shrink-0"
                      />
                      <span className="text-white text-[20px] font-medium">{coin.name}</span>
                    </div>

                    <div className="text-right">
                      <p className="text-white text-[19px] font-medium">
                        {ghsRate ? formatPrice(coin.current_price, ghsRate) : '—'}
                      </p>
                      <p className={`text-[16px] font-medium ${up ? 'text-green-400' : 'text-red-400'}`}>
                        {up ? '↗' : '↙'} {Math.abs(change).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
