import { onMounted } from 'vue'
import { makeTenoxUI } from '@tenoxui/core'
import { property } from '@tenoxui/property'

const config = {
  property
}

export function styler() {
  document.querySelectorAll('*[class]').forEach((element) => {
    new makeTenoxUI({ element: element as HTMLElement, ...config }).useDOM()
  })
}

export function createStyler() {
  onMounted(() => {
    styler()
  })
}
