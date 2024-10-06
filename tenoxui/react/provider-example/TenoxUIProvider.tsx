import React, { createContext, useContext, useLayoutEffect, useMemo } from 'react'
import { makeTenoxUI, MakeTenoxUIParams } from '@tenoxui/core'
// optionally add default props
import { property as txProps } from '@tenoxui/property'

type TenoxUIConfig = Omit<MakeTenoxUIParams, 'element'>
interface TenoxUIProviderProps extends Partial<TenoxUIConfig> {
  children: React.ReactNode
}

const TenoxUIContext = createContext<TenoxUIConfig | null>(null)

export const TenoxUIProvider: React.FC<TenoxUIProviderProps> = ({
  property = {},
  values = {},
  classes = {},
  breakpoints = [],
  children
}) => {
  const config: TenoxUIConfig = useMemo(
    () => ({
      // use tenoxui properties
      property: { ...txProps, ...property },
      // property, // or, add manually inside the provider value
      values,
      classes,
      breakpoints
    }),
    [property, values, classes, breakpoints]
  )

  useLayoutEffect(() => {
    // watching over cl
    document.querySelectorAll('*[class]').forEach((element) => {
      new makeTenoxUI({
        element: element as HTMLElement,
        ...config
      }).useDOM()
    })
  }, [config])

  return <TenoxUIContext.Provider value={config}>{children}</TenoxUIContext.Provider>
}
