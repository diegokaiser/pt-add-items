import { describe, expect, test } from "vitest"
import { renderHook, act, render } from "@testing-library/react"
import { useItems } from "../src/hooks/useItems"

describe('useItems hook', () => {
  test('should add and remove items', () => {
    const { result } = renderHook(() => useItems())
    expect(result.current.items).toEqual([])
    expect(result.current.items.length).toBe(0)

    act(() => {
      result.current.addItem('Ver netflix')
      result.current.addItem('Cocinar')
      result.current.addItem('Sacar la basura')
    })
    expect(result.current.items.length).toBe(3)

    act(() => {
      result.current.removeItem(result.current.items[0].id)
    })
    expect(result.current.items.length).toBe(2)
  })
})