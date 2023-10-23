import React from "react";
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import App from '../src/App'

/* describe('<App />', () => {
  test('should work', () => {
    render(<App />)
  })
}) */

describe('<App />', () => {
  test('should add a new item', async () => {
    const user = userEvent.setup()
    render(<App />)
    // buscar el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // ir al botón
    const button = form.querySelector('button')
    expect(button).toBeDefined()

    await user.type(input, 'ir al chongo')
    await user.click(button!)

    await user.type(input, 'comprar weed')
    await user.click(button!)

    // asegurar que el elemento se ha agregado
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    expect(list.childNodes.length).toBe(2)

    // asegurar que el elemento se puede borrar
    const item = screen.getByText('ir al chongo')
    expect(item).toBeDefined()
    await user.click(item!)
    expect(list.childNodes.length).toBe(1)
  })
})