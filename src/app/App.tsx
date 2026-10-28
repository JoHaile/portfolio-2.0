import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { getLenis, initSmoothScroll } from './lib/smoothScroll'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Socials } from './pages/Socials'
import { Work } from './pages/Work'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    let cancelled = false
    let attempts = 0
    let timer = 0

    const toTop = () => {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(0, { immediate: true })
      else window.scrollTo({ top: 0 })
    }

    const run = () => {
      if (cancelled) return
      // Wait for the incoming page: hash targets like #socials exist globally,
      // so an early hit would scroll the outgoing page instead.
      const mounted = document.querySelector('main')?.getAttribute('data-route') === pathname
      if (!mounted && attempts < 40) {
        attempts++
        timer = window.setTimeout(run, 50)
        return
      }
      if (!hash) {
        toTop()
        return
      }
      const target = document.querySelector(hash)
      if (target) {
        const lenis = getLenis()
        if (lenis) {
          // The page just changed height; otherwise the old limit clamps the target.
          lenis.resize()
          lenis.scrollTo(target as HTMLElement)
        } else {
          target.scrollIntoView({ behavior: 'smooth' })
        }
        return
      }
      if (attempts++ < 40) timer = window.setTimeout(run, 50)
    }

    timer = window.setTimeout(run, 50)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [pathname, hash])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        data-route={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="socials" element={<Socials />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

function Shell() {
  const { pathname } = useLocation()
  return (
    <>
      <Preloader />
      <ScrollManager />
      <Nav />
      <Pages />
      {/* Socials is a shared section; the /socials page already renders it. */}
      {pathname !== '/socials' && <Socials />}
      <Footer />
    </>
  )
}

export function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
