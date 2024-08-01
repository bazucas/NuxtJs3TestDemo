import { mountSuspended, toMatchInlineSnapshot } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('Increments counter when the user clicks on the button', async () => {
    const component = await mountSuspended(Counter)
    const button = component.find('button')
    const text = component.find('h1')

    expect(text.text()).toContain('Counter: 1')
    await button.trigger('click')
    expect(text.text()).toContain('Counter: 2') //toContain is just better than toMatchInlineSnapshot
  })
})
