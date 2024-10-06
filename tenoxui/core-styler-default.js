/**
 * Starter tenoxui styler template with @tenoxui/core
 */

import { makeTenoxUI } from '@tenoxui/core'

function styler() {
  const config = {
    property: { bg: 'background' }
    // values: ...
    // classes: ...
    // breakpoints: ...
  }
  document.querySelectorAll('*[class]').forEach((element) => {
    new makeTenoxUI({ element, ...config }).useDOM()
  })
}
