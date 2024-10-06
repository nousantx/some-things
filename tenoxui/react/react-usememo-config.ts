import { useMemo, useLayoutEffect } from 'react'
export { makeTenoxUI, MakeTenoxUIParams } from '@tenoxui/core'

type StylerConfig = Omit<MakeTenoxUIParams, 'element'>
type Config = Partial<StylerConfig>

export function useConfig({
  property = {},
  values = {},
  classes = {},
  breakpoints = []
}: Config = {}): StylerConfig {
  return useMemo<StylerConfig>(
    () => ({ property, values, classes, breakpoints }),
    [property, values, classes, breakpoints]
  )
}

export function styler(config: Config) {
  const elements = document.querySelectorAll('*[class]')
  elements.forEach((element) => {
    const tenoxui = new makeTenoxUI({ element, ...config })
    tenoxui.useDOM()
  })
}

export function useStyler(config: Config) {
  useLayoutEffect(() => {
    styler(useConfig(config))
  }, [config])
}

/* Example Usage
const myConfig = {
  property: { bg: 'background' },
  values: {
    primary: '#ccf654'
  }
}

styler(useConfig(myConfig))
// or
useStyler(myConfig)
*/
