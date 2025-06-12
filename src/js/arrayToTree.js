const list = ['aa.dd', 'aa.bb.cc', 'aa.bb.dd', 'aa.ee.ff', 'bb.xx', 'cc.gg']
/**
 * id: 'aa.dd'
 * name: 'dd',
 * parentId: 'aa',
 * children: []
 */
export const toTree = (list) => {
  // 创建所有节点
  const map = {}
  const res = []
  for (const item of list) {
    const singleList = item.split('.')

    while (singleList.length > 0) {
      const curId = singleList.join('.')
      if (!map[curId]) {
        const curName = singleList.pop()
        map[curId] = {
          id: curId,
          name: curName,
          parentId: singleList.length > 0 ? singleList.join('.') : null,
          children: null,
        }
        res.push(map[curId])
      } else {
        // 已经存在了，已经推过一次了
        singleList.pop()
      }
    }
  }
  // 构建树结构
  const treeData = []
  for (const item of res) {
    if (!item.parentId) {
      treeData.push(map[item.id])
    } else {
      const parent = map[item.parentId]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(map[item.id])
    }
  }

  return treeData
}

toTree(list)
