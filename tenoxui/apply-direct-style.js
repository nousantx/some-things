export { makeTenoxUI } from '@tenoxui/core'

export function applyStyles(styledElement, config) {
  Object.entries(styledElement).forEach(([selector, styles]) => {
    document.querySelectorAll(selector).forEach((element) => {
      new makeTenoxUI({ ...config, element }).applyMultiStyles(styles)
    })
  })
}

// usage
// applyStyles({ html: 'bg-black text-white', body: 'h-mn-100vh' }, config)
