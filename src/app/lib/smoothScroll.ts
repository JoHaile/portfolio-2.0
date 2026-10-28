import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let instance: Lenis | null = null
let frame = 0
let paused = false

export const getLenis = () => instance

/**
 * Freeze inertial scrolling while something else owns the page (preloader).
 * Lenis drops wheel events instead of banking them, so nothing lurches when
 * the lock lifts.
 */
export function pauseSmoothScroll() {
  paused = true
  instance?.stop()
}

export function resumeSmoothScroll() {
  paused = false
  instance?.start()
}

function startLoop() {
  window.cancelAnimationFrame(frame)
  const raf = (time: number) => {
    instance?.raf(time)
    frame = window.requestAnimationFrame(raf)
  }
  frame = window.requestAnimationFrame(raf)
}

/**
 * Inertial wheel scrolling. Touch keeps native momentum (syncTouch off) and
 * reduced-motion users get the browser default, so this only ever smooths a
 * mouse/trackpad, never fights a device or an accessibility setting.
 *
 * The instance lives for the lifetime of the page: creating and destroying it
 * on every effect pass (React StrictMode does exactly that) can leave the
 * animation loop orphaned, which swallows wheel input without scrolling.
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (!instance) {
    instance = new Lenis({
      lerp: 0.115,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    })
    startLoop()
  }

  // The preloader may have claimed the page before this ran.
  if (paused) instance.stop()
}
