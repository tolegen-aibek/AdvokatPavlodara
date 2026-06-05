// Shared animation variants for the whole site
export const VIEWPORT = { once: true, amount: 0.05 }

export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -52 },
  show: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 52 },
  show: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export const staggerContainer = (stagger = 0.1, delayStart = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delayStart },
  },
})

export const heroWord = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  show: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 60px rgba(0,0,0,0.13)',
    transition: { type: 'spring', stiffness: 300, damping: 22 },
  },
}

export const floatAnim = (delay = 0) => ({
  animate: {
    y: [0, -18, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
  },
})

export const pulseAnim = {
  animate: {
    scale: [1, 0.92, 1],
    opacity: [1, 0.4, 1],
    transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
  },
}
