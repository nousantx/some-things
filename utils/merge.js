/**
 * Use this to `safely` merge multiple objects.
 *
 * @param {...Object} objects - The objects to merge
 * @returns {Object} - Merged object
 */

export function merge(...objects) {
  return objects.reduce((result, obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        result[key] = merge(result[key] || {}, obj[key])
      } else {
        result[key] = obj[key]
      }
    })
    return result
  }, {})
}
