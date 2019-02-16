/** @module ensure-end */

import {isEqual, takeRight} from "lodash"

/**
 * Ensures that a string or an array ends with specified value
 * @example
 * import ensureEnd from "ensure-end"
 * ensureEnd("cd", "ab")
 * // "cdab"
 * @example
 * import ensureEnd from "ensure-end"
 * ensureEnd(["ab"], ["c", "d"])
 * // ["ab", "c", "d"]
 * @function
 * @param {string|array} value String or array that should end with specified value
 * @param {string|array} ensuredEnd The wanted end value
 * @returns {*} Cleaned value
 */
export default (value, ensuredEnd) => {
  if (typeof value === "string") {
    if (value.endsWith(ensuredEnd)) {
      return value
    }
    return `${value}${ensuredEnd}`
  }
  if (Array.isArray(value)) {
    if (!Array.isArray(ensuredEnd)) {
      ensuredEnd = [ensuredEnd]
    }
    if (isEqual(takeRight(value, ensuredEnd.length), ensuredEnd)) {
      return value
    }
    return [...value, ...ensuredEnd]
  }
  return value
}