import { useState, useEffect, useCallback } from 'react'
import { API_URL } from '../api/config'

/**
 * Custom hook to fetch live crypto prices from CoinGecko
 * and the USD→GHS exchange rate.
 * Auto-refreshes every 60 seconds.
 */
export default function useCryptoData(perPage = 20) {
  const [coins, setCoins] = useState([])
  const [ghsRate, setGhsRate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const [cryptoRes, rateRes] = await Promise.all([
        fetch(`${API_URL}/crypto`, { credentials: 'include' }),
        fetch('https://open.er-api.com/v6/latest/USD'),
      ])

      if (!cryptoRes.ok || !rateRes.ok) throw new Error('API error')

      const cryptoData = await cryptoRes.json()
      const rateData = await rateRes.json()

      // Map backend fields to frontend expectations
      const mappedCoins = cryptoData.data.cryptos.map(c => ({
        ...c,
        id: c._id || c.id,
        current_price: c.price,
        price_change_percentage_24h: parseFloat(c.change24h || 0)
      }))

      setCoins(mappedCoins)
      setGhsRate(rateData.rates.GHS)
      setLoading(false)
      setError(false)
    } catch {
      setError(true)
      setLoading(false)
    }
  }, [perPage])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [fetchData])

  return { coins, ghsRate, loading, error, refetch: fetchData }
}
