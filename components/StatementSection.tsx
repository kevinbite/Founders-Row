const StatementSection = () => {
  return (
    <section className="relative z-40 bg-black">
      {/* Three Part Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="text-center whitespace-nowrap">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-montserrat tracking-wide">
              Part investment firm.
            </p>
          </div>
          
          <div className="w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
          
          <div className="text-center whitespace-nowrap">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-montserrat tracking-wide">
              Part creative producer.
            </p>
          </div>
          
          <div className="w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
          
          <div className="text-center whitespace-nowrap">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-montserrat tracking-wide">
              100% founder-obsessed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatementSection

