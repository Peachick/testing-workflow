import { add } from "@/util";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toBe(3)
  })
})