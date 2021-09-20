import { add, subtract } from "./math"

describe("Math", () => {
  it("add: Adds 2 numbers", () => {
    expect(add(1,2)).toBe(3)
  })

  it("subtract: Subtracts 2 numbers", () => {
    expect(subtract(2,2)).toBe(0)
  })
})