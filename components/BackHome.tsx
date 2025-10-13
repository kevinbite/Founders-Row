import Link from 'next/link'

const BackHome = () => (
  <div className="fixed top-24 left-4 lg:left-6 z-40">
    <Link
      href="/"
      aria-label="Back to Home"
      className="flex items-center text-white/90 hover:text-white font-cinzel text-base sm:text-lg transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Home
    </Link>
  </div>
)

export default BackHome
