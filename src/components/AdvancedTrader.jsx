export default function AdvancedTrader() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left - image in dark rounded card */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-[#0d0d0f] rounded-3xl overflow-hidden p-6 lg:p-10">
              <img
                src="/advanced.avif"
                alt="Advanced trading tools"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - text */}
          <div className="flex-1 max-w-[520px]">
            <h2
              className="text-[40px] sm:text-[48px] lg:text-[52px] leading-[1.08] text-gray-900 mb-6"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Powerful tools, designed for the advanced trader.
            </h2>

            <p className="text-[17px] text-gray-500 leading-relaxed mb-8">
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>

            <button className="px-7 py-4 text-[17px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              Start trading
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
