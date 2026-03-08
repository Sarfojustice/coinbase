export default function ZeroFees() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left - text */}
          <div className="flex-1 max-w-[520px]">
            {/* Coinbase One badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 mb-8">
              <img src="/logo.svg" alt="Coinbase" className="w-4 h-4" />
              <span className="text-[13px] font-semibold text-gray-900 tracking-widest uppercase">Coinbase One</span>
            </div>

            <h2
              className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.06] text-gray-900 mb-6"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Zero trading fees, more rewards.
            </h2>

            <p className="text-[17px] text-gray-500 leading-relaxed mb-8">
              Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
            </p>

            <button className="px-7 py-4 text-[17px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              Claim free trial
            </button>
          </div>

          {/* Right - image */}
          <div className="flex-1 max-w-2xl ml-auto">
            <img
              src="/zero_fees_us.avif"
              alt="Zero trading fees with Coinbase One"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
