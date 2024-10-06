import { useLayoutEffect } from 'react'
export { makeTenoxUI } from '@tenoxui/core'

export function styler(config) {
  const elements = document.querySelectorAll('*[class]')
  elements.forEach((element) => {
    const tenoxui = new makeTenoxUI({ element, ...config })
    tenoxui.useDOM()
  })
}

export function useStyler(config) {
  useLayoutEffect(() => {
    styler(config)
  }, [config])
}
