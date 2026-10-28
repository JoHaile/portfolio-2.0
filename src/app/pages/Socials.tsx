import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { site } from '../../data/site'
import { Reveal } from '../components/motion'

function SocialLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex w-full items-center justify-between border-b border-line py-6 sm:py-7"
    >
      <div className="overflow-hidden">
        <div className="relative">
          <span className="block whitespace-nowrap pb-[0.16em] pr-[0.3em] font-display text-[clamp(40px,8vw,120px)] leading-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            {label}
          </span>
          <span className="absolute left-0 top-full block whitespace-nowrap pb-[0.16em] pr-[0.12em] font-display text-[clamp(40px,8vw,120px)] leading-[0.9] text-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            {label.split('').map((char, i) => (
              <motion.span
                key={`${label}-${i}`}
                initial={{ y: '110%' }}
                animate={hovered ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: hovered ? i * 0.01 : 0 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </div>
      </div>
      <ArrowUpRight className="size-7 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-9" />
    </a>
  )
}

export function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <Reveal>
        <div className="flex items-end justify-between border-b border-line pb-5">
          <h2 className="font-display text-[clamp(36px,5vw,64px)]">Social media</h2>
          <p className="hidden text-[13px] text-muted sm:block">Say hi, follow along</p>
        </div>
      </Reveal>
      <div className="flex flex-col">
        {site.socials.map((s) => (
          <SocialLink key={s.label} href={s.href} label={s.label} />
        ))}
      </div>
    </section>
  )
}
