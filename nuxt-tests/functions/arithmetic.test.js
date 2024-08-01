import { describe, test, expect } from "vitest"
import  { addition, subtraction, multiplication, division } from "./arithmetic"

describe('Testing the arithmetic functions', () => {
    test('addition function add 1 + 2 equal 3', () => {
      expect(addition(1, 2)).toBe(3)
    })
    
    test('subtraction function add 7 - 3 equal 4', () => {
        expect(subtraction(7, 3)).toBe(4)
    })

    test('multiplication function add 7 - 3 equal 4', () => {
        expect(multiplication(3, 3)).toBe(9)
    })

    test('division function add 8 / 4 equal 4', () => {
        expect(division(8, 2)).toBe(4)
    })
  })
  