import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { site } from '../../data/site'
import { cx } from '../lib/cx'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const time = useLocalTime()
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [cursorNearTop, setCursorNearTop] = useState(false)
  const nearTop = useRef(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - last
      last = y
      // Near the top, or with the pointer parked on the top edge, stay visible.
      if (y <= 120 || nearTop.current) {
        setHidden(false)
        return
      }
      // Ignore sub-pixel drift so the bar only flips on a real move.
      if (Math.abs(delta) < 6) return
      setHidden(delta > 0)
    }
    // Two ways back: scroll up, or slide the cursor to the top edge.
    const onMouseMove = (e: MouseEvent) => {
      const near = e.clientY < 80
      nearTop.current = near
      setCursorNearTop(near)
      if (near) setHidden(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const link = (to: string, label: string) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => cx('link-draw text-[14px] transition-colors', isActive || (to !== '/' && location.pathname.startsWith(to)) ? 'text-fg' : 'text-muted hover:text-fg')}
    >
      {label}
    </NavLink>
  )

  return (
    <header className={cx('fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]', hidden && '-translate-y-full')}>      
      <div className={cx('flex h-16 w-full items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-12', cursorNearTop ? 'backdrop-blur-md bg-bg/80 shadow-[0_1px_0_0_rgba(20,19,18,0.06)]' : 'backdrop-blur-sm bg-bg/40')}>
        <Link to="/" className="shrink-0 text-[14px] font-medium sm:text-[15px]">
          {site.name}
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          {link('/#work', 'Work')}
          {link('/about', 'About')}
          <Link to="/#socials" className="link-draw hidden text-[14px] text-muted transition-colors hover:text-fg sm:inline">
            Social
          </Link>
          <Link to="/#contact" className="link-draw hidden text-[14px] text-muted transition-colors hover:text-fg sm:inline">
            Contact
          </Link>
          <a
            href={site.resume}
            download
            className="inline-flex h-9 shrink-0 items-center rounded-full border border-fg/20 px-2.5 text-[12px] font-medium text-fg transition-colors hover:bg-fg hover:text-bg sm:px-3.5 sm:text-[13px]"
          >
            Resume
          </a>
          <span className="hidden text-[13px] tabular-nums text-muted/80 lg:inline">
            {site.location} {time}
          </span>
        </nav>
      </div>
    </header>
  )
}
