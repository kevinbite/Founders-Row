const StatementSection = () => {
  return (
    <section className="relative z-40 bg-black">
      {/* Three Part Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <div className="text-center flex-shrink">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight">
              Part investment firm.
            </p>
          </div>
          
          <div className="w-[2px] h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight">
              Part creative producer.
            </p>
          </div>
          
          <div className="w-[2px] h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-transparent via-white/80 to-transparent flex-shrink-0"></div>
          
          <div className="text-center flex-shrink">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold font-montserrat tracking-wide leading-tight">
              100% founder-obsessed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatementSection

