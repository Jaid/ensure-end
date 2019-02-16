import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: ensureEnd} = require(indexModule)

it("should run for string", () => {
  const result = ensureEnd("cd", "ab")
  expect(result).toEqual("abcd")
})

it("should run for arrays", () => {
  const result = ensureEnd(["c", "d"], ["a", "b"])
  expect(result).toEqual(["a", "b", "c", "d"])
})