import { describe } from 'mocha'
import { expect } from 'chai'
import { toTree } from '../src/js/arrayToTree.js'

console.log('🍀🍀🍀🍀', toTree)
describe('toTree', () => {
  it('should return a tree', () => {
    const list = ['aa.dd', 'aa.bb.cc', 'aa.bb.dd', 'aa.ee.ff', 'bb.xx', 'cc.gg']

    const expected = [
      {
        id: 'aa',
        name: 'aa',
        parentId: null,
        children: [
          {
            id: 'aa.dd',
            name: 'dd',
            parentId: 'aa',
            children: null,
          },
          {
            id: 'aa.bb',
            name: 'bb',
            parentId: 'aa',
            children: [
              {
                id: 'aa.bb.cc',
                name: 'cc',
                parentId: 'aa.bb',
                children: null,
              },
              {
                id: 'aa.bb.dd',
                name: 'dd',
                parentId: 'aa.bb',
                children: null,
              },
            ],
          },
          {
            id: 'aa.ee',
            name: 'ee',
            parentId: 'aa',
            children: [
              {
                id: 'aa.ee.ff',
                name: 'ff',
                parentId: 'aa.ee',
                children: null,
              },
            ],
          },
        ],
      },
      {
        id: 'bb',
        name: 'bb',
        parentId: null,
        children: [
          {
            id: 'bb.xx',
            name: 'xx',
            parentId: 'bb',
            children: null,
          },
        ],
      },
      {
        id: 'cc',
        name: 'cc',
        parentId: null,
        children: [
          {
            id: 'cc.gg',
            name: 'gg',
            parentId: 'cc',
            children: null,
          },
        ],
      },
    ]
    const result = toTree(list)
    expect(result).to.deep.equal(expected)
  })
})
