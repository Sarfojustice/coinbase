export default function Countless() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left - image in light gray rounded card */}
          <div className="flex-1 max-w-5xl">
            <div className="bg-[#f2f2f2] rounded-[40px] lg:rounded-[60px] overflow-hidden aspect-[4/3] pt-6 px-8 pb-0 flex items-end justify-center">
              <img
                src="/countless.avif"
                alt="Base App"
                className="w-3/4 h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - text */}
          <div className="flex-1 max-w-[520px]">
            {/* Base App badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 mb-8">
              <div className="bg-[#f2f2f2] rounded-[8px] sm:rounded-[10px] p-1 flex items-center justify-center">
                <img src="/logo.svg" alt="Coinbase" className="w-4 h-4" />
              </div>
              <span className="text-[13px] font-semibold text-gray-900 tracking-widest uppercase">Base App</span>
            </div>

            <h2
              className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.06] text-gray-900 mb-6"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Countless ways to earn crypto with the Base App.
            </h2>

            <p className="text-[17px] text-gray-500 leading-relaxed mb-8">
              An everything app to trade, create, discover, and chat, all in one place.
            </p>

            <button className="px-7 py-4 text-[17px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              Learn more
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
