import type { Block } from 'payload'

export const TestBlockConfig: Block = {
  slug: 'test',
  fields: [
    {
      type: 'text',
      name: 'testText',
      required: true,
    }
  ],
  interfaceName: 'TestBlock'
}
