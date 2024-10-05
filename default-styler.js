import { makeTenoxUI } from '@tenoxui/core'
import { property } from '@tenoxui/property'

export function styler() {
  document.querySelectorAll('*[class]').forEach(element => {
    new makeTenoxUI({ element, property }).useDOM()
  })
}
