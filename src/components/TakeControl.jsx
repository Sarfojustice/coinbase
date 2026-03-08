import { useState } from 'react'

export default function TakeControl() {
  const [email, setEmail] = useState('')

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left - text */}
          <div className="flex-1 max-w-[520px]">
            <h2
              className="text-[56px] sm:text-[68px] lg:text-[80px] leading-[1.04] text-gray-900 mb-6"
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Take control of your money
            </h2>

            <p className="text-[18px] text-gray-700 mb-8 font-normal">
              Start your portfolio today and discover crypto
            </p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-[16px] text-gray-900 placeholder-gray-400 border border-gray-300 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button className="px-7 py-4 text-[16px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>

          {/* Right - crypto icons image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/cryptos.avif"
              alt="Crypto currencies"
              className="w-full max-w-[560px] h-auto object-contain self-end"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
