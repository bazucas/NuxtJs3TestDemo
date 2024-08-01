import { mountSuspended,  } from '@nuxt/test-utils/runtime'
import HelloWorld from './HelloWorld'
import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
  it('displays Hello World', async () => {
    const component = await mountSuspended(HelloWorld)
    expect(component.text()).toMatchInlineSnapshot('"Hello World"') // toContains is better because of dual quotation
  })
})
