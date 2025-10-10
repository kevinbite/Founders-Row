const StatementSection = () => {
  return (
    <section className="relative z-40 bg-black">
      {/* Three Part Statement */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 max-w-6xl mx-auto">
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              Part investment firm.
            </p>
          </div>
          
          <div className="w-[2px] h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              Part creative producer.
            </p>
          </div>
          
          <div className="w-[2px] h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              100% founder-obsessed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatementSection

