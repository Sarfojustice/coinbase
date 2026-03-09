const articles = [
  {
    img: '/1.avif',
    title: 'USDC: The digital dollar for the global crypto economy',
    excerpt: 'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...',
    underline: true,
  },
  {
    img: '/2.avif',
    title: 'Can crypto really replace your bank account?',
    excerpt: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" or the term \"bankless\" — the idea being that...",
    underline: false,
  },
  {
    img: '/3.avif',
    title: 'When is the best time to invest in crypto?',
    excerpt: 'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...',
    underline: false,
  },
]

export default function CryptoBasics() {
  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">

        {/* Top row — headline left, text + button right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.06] text-gray-900 max-w-[480px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            New to crypto? Learn some crypto basics
          </h2>

          <div className="flex flex-col items-start gap-6 lg:max-w-[420px] lg:pt-3">
            <p className="text-[17px] text-gray-500 leading-relaxed">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <button className="px-7 py-4 text-[17px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a href="#" key={article.title} className="group flex flex-col gap-5 cursor-pointer">
              {/* Image */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[22px] leading-[1.3] text-gray-900 font-normal group-hover:underline"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[15px] text-gray-500 leading-relaxed">
                {article.excerpt}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
