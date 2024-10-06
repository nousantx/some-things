import { useLayoutEffect } from 'react'
import { makeTenoxUI } from '@tenoxui/core'

const App = () => {
  useLayoutEffect(() => {
    document.querySelectorAll('*[class]').forEach((element) => {
      new makeTenoxUI({
        element,
        property: { bg: 'background', text: 'color' }
      })
    })
  }, [])

  return <div className="bg-red text-blue">Hello World!</div>
}
