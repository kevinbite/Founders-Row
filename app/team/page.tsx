'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlowButton from '@/components/ui/GlowButton'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import Parallax3DCard from '@/components/ui/Parallax3DCard'
import Image from 'next/image'

const team = [
  {
    name: 'Jamie Weeks',
    title: 'Founder & Managing Partner',
    bio: 'Serial entrepreneur who built and sold Orangetheory (7.4x return) and SweatHouz (7x return). On a mission to fix the relationship between founders and capital.',
    featured: true,
    photo: '/team headshots/Website Headshots Jamie.png',
  },
  {
    name: 'Jess Yuan',
    title: 'Chief Operating Officer',
    bio: 'With Jamie since the early Orangetheory days. 12+ years in consumer private equity.',
    photo: '/team headshots/Website Headshots Jess.png',
  },
  {
    name: 'Tori Woodhull',
    title: 'Chief of Staff',
    bio: '10 years working alongside Jamie. Runs the day-to-day operations of the firm.',
    photo: '/team headshots/Website Headshots (2) Tori W.png',
  },
  {
    name: 'Mike Mehr',
    title: 'Chief Development Officer',
    bio: 'Scaled Orangetheory from 1 to 142 locations. Expert in real estate and expansion.',
    photo: '/team headshots/Website Headshots (1) Mike.png',
  },
  {
    name: 'Kevin Bite',
    title: 'Head of AI Implementation',
    bio: 'Leading AI integration across all portfolio brands.',
    photo: '/team headshots/Website Headshots (3) Kevin.png',
  },
]

export default function TeamPage() {
  // Order for display: Jamie, Jess, Tori, Mike, Kevin
  const orderedTeam = [
    team.find(m => m.name === 'Jamie Weeks')!,
    team.find(m => m.name === 'Jess Yuan')!,
    team.find(m => m.name === 'Tori Woodhull')!,
    team.find(m => m.name === 'Mike Mehr')!,
    team.find(m => m.name === 'Kevin Bite')!,
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-3">Team</p>
            <h1 className="metallic-text text-4xl sm:text-5xl">Our People</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20 sm:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Mobile: 2 columns, Desktop: 6 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-6">
            {orderedTeam.map((member, i) => (
              <AnimateOnScroll 
                key={member.name} 
                animation="fadeInUp" 
                delay={i * 50}
                className={`
                  ${i === 0 ? 'lg:col-start-3 lg:col-span-2 lg:row-start-1' : ''}
                  ${i === 1 ? 'lg:col-start-1 lg:col-span-2 lg:row-start-2' : ''}
                  ${i === 2 ? 'lg:col-start-3 lg:col-span-2 lg:row-start-2' : ''}
                  ${i === 3 ? 'lg:col-start-5 lg:col-span-2 lg:row-start-2' : ''}
                  ${i === 4 ? 'col-span-2 justify-self-center lg:col-start-3 lg:col-span-2 lg:row-start-3' : ''}
                `}
              >
                <Parallax3DCard className="rounded-2xl border border-white/20 overflow-hidden h-full" tiltAmount={10}>
                  {/* Photo section */}
                  <div className="relative h-44 sm:h-72 w-full -m-[1px] mt-[-1px] ml-[-1px] mr-[-1px] mb-0" style={{ width: 'calc(100% + 2px)' }}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <Image
                          src="/logos/FR LOGO WITH SPADE (1).png"
                          alt=""
                          width={48}
                          height={48}
                          className="w-12 h-12 opacity-30"
                        />
                      </div>
                    )}
                    {/* Spade logo top-left */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <Image
                        src="/logos/FR LOGO WITH SPADE (1).png"
                        alt=""
                        width={32}
                        height={32}
                        className="w-5 h-5 sm:w-7 sm:h-7 opacity-70"
                      />
                    </div>
                  </div>
                  {/* Info section */}
                  <div className="p-3 sm:p-5 bg-black">
                    <h3 className="font-heading text-white text-sm sm:text-lg font-medium mb-0.5 sm:mb-1 uppercase tracking-wide">{member.name}</h3>
                    <p className="font-body text-white/50 text-[10px] sm:text-sm">{member.title}</p>
                  </div>
                </Parallax3DCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16 sm:py-24 lg:pt-12 lg:pb-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="fadeInUp">
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-3">Contact</p>
            <h2 className="metallic-text text-3xl sm:text-4xl mb-6">
              Let&apos;s Connect
            </h2>
            <p className="font-body text-white/50 text-base sm:text-lg mb-10 text-balance">
              We would love to hear your founder story.<br />
              Email us to do a Zoom with Jamie and the team.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <GlowButton href="mailto:founder@foundersrow.co">
              founder@foundersrow.co
            </GlowButton>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
