/**
 * Transforms css based class names into tenoxui property based class names.
 *
 * @param {Object} input - The object containing css based style
 * @returns {Object} - The transformed tenoxui classes
 */

function transformClasses(input) {
  const output = {}
  Object.keys(input).forEach((className) => {
    Object.entries(input[className]).forEach(([property, value]) => {
      output[property] = output[property] || {}
      output[property][className] = value
    })
  })

  return output
}

/* Usage
transformClasses({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
*/

/* Output
{
  display:{
    center:"flex"
  },
  alignItems:{
    center:"center"
  },
  justifyContent:{
    center:"center"
  },
}
*/
