const StatementSection = () => {
  return (
    <section className="relative z-40 bg-black">
      {/* Three Part Statement */}
      <div className="relative z-10 w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 max-w-6xl mx-auto">
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              Part investment firm.
            </p>
          </div>
          
          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              Part creative producer.
            </p>
          </div>
          
          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink-0 flex items-center justify-center">
            <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight text-center">
              100% founder-obsessed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatementSection

