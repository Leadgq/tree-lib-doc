# 树搜索方法列举

## 广度优先展开树

```js
/**
 * @param { Array | Object } treeData  树数组或者树对象
 * @returns { Array } 压平的树
 * @description 广度优先遍历、非递归
 * @example flattenTree({id: 1, name: '1', children: [{ id:2 ,name:'2'}]})
 * @returns [{id: 1, name: '1', children: [{ id:2 ,name:'2'}]}, { id:2 ,name:'2'}]
 */
flattenTree(treeData);
```

## 深度优先展开树

```js
/**
 * @param {Array | Object} treeData  树数组或者树对象
 * @returns {Array} 压平的树
 * @description 前序遍历 ==> 深度遍历、非递归
 */
flattenTreeByDepth(treeData);
```

## 后序深度展开树

```js
/**
 * @param {Array | Object} treeData  树数组或者树对象
 * @returns {Array} 压平的树
 * @description 后序遍历 ==> 深度遍历、非递归
 */
flattenTreeByPostOrder(treeData);
```

## 广度优先,获取每次遍历的节点

```js
/**
 * @param { Array | Object } treeData
 * @param  { Function } fn
 * @description 由于flattenTree返回的是一个数组,这不满足于对细微的操作,所以提供了这个方法
 *  const  list = [{id: 1, name: '1', children: [{ id:3 ,name:'3'}]},{ id:2,name:'2' }]
 *  breadthFirstSearch(list,(node)=>{
 *      { id:1 },
 *      { id:2 },
 *      { id:3 }
 * })
 * @description 如果你想要得到每次遍历的节点,可以使用这个方法
 */
breadthFirstSearch(treeData,fn)
```

## 后序深度优先,获取每次遍历的节点

```js
/**
 * @param { Array | Object } treeData
 * @param  { Function } fn
 * @description 得到每次遍历的节点、后序遍历
 * @example postOrderFirstSearch(treeData, (node) => {console.log(node)})
 * @description 原因上述
 */
postOrderFirstSearch(treeData,fn)

```

## 递归展开树

```js
/**
 * @param { Array | Object } treeData
 * @description 递归
 * @example flattenTree({id: 1, name: '1', children: [{ id:2 ,name:'2'}]})
 * @returns [{id: 1, name: '1', children: [{ id:2 ,name:'2'}]}, { id:2 ,name:'2'}]
 */
reduceFlattenTree(treeData);
```

## 树查找（扁平树查找）

```js
/**
 * @param {Array} flatTreeData 压平的树
 * @param {String} key 要查找的key
 * @param {String | Number} value 要查找的value
 * @description 返回当前节点对象
 * @example findTreeByFlatArray(flatTreeData, 'id', 5)
 * @returns {id: 5, name: '部门', children: []}
 */
findTreeByFlatArray(flatTreeData, key, value);
```

## 树查找（主键）

```js
/**
 * @param {Array} treeData  树数组(正常树)
 * @param {String} key 要查找的key
 * @param {String | Number} value 要查找的value
 * @description 返回当前节点对象、 广度优先遍历、非递归
 * @example findTreeByTreeData(tree, 'id', 1)
 * @returns {id: 1, name: '1', children: []}
 */
findTreeByTreeData(treeData, key, value);
```

## 树查找（函数）

```js
/**
 * @param {Array} treeData  树数组(正常树)
 * @param {callback} callback 回调函数
 * @return Array<node>
 * @description 返回节点数
 * @example findTreeByFn([{id:1,children:[{id:2,check:true,children:[{id:3}]}]}],(node)=>{return node.id === 2 && item.check})  [{id:2}]
 */
findTreeByFn(treeData, callback);
```

## 查找当前节点的父节点

```js
/**
 * @description 调用者注意,依赖于当前节点的parentId字段,如果你的数据中没有,请使用findPath方法
 * @description 内部寻找使用、数据id字段,你的数据中必须有id字段, 局限性比较大,如果能满足id和parentId字段可以使用
 * @description 建议使用findPath方法，只需要节点和key即可
 * @param {Array} treeData 树数组
 * @param {String} parentId  当前节点的父节点id、这个节点parentId应来自于点击时候的parentId
 * @param showDetail 是否返回当前节点的详细信息
 * @returns {Array} 路径
 * @description 默认情况下记录当前节点的路径id集合 、showDetail为true时候返回当前节点的详细信息
 */
findParent(treeData, parentId, showDetail = false);
```

## 查找子节点（函数）

```js
/**
 * @param {Array} treeData 树数组(正常树)
 * @param {callBack} callBack 回调函数
 * @description 深度优先遍历、非递归
 * @example findChildrenListByFn(treeData, (item) =>  item.check === false && (item.key === '1'))
 * @returns {Array} 返回当前节点的所有子节点
 */
findChildrenListByFn(treeData, callback);
```

## 查找子节点

```js
/**
 * @param {Array} treeData 树数组(正常树)
 * @param {String} key
 * @param {String | Number} value
 * @param {Boolean} showDetail 是否返回当前节点的详细信息 默认true
 * @returns {Array} 返回当前节点的所有子节点
 * @description 深度优先遍历、非递归
 * @example findChildrenList([{id:1,children:[{id:2,children:[{id:3}]}]}],'id',1)  [{id:2},{id:3}]
 */
findChildrenList(treeData, key, value, (showDetail = true));
```

## 查找路径

```js
/**
 * @param {Array} treeData 树数组(正常树)
 * @param {string | Object } node  节点的值或者节点对象
 * @param {string} key 你的唯一标识key
 * @param {boolean} showDetail 是否显示路径的详细信息
 * @param {boolean} isIncludeMyself 是否包含自身、默认false
 * @description  递归
 * @example findPath([{a:1,children:[{a:2,children:[{a:3}]}]}],3,'a') => [1,2]
 * @example findPath([{a:1,children:[{a:2,children:[{a:3}]}]}],3,'a',true) => [{a:1},{a:2}]
 * @returns {Array} 返回路径
 */
findPath(treeData, node, key, showDetail , isIncludeMyself = false);
```

## 查找当前节点的兄弟节点

```js
/**
 * @param { Array | Object }  treeData
 * @param  { Object | string } node 值或者节点对象
 * @param  { String  } key
 * @param  { Boolean  } isShowDetail 默认true 返回当前节点的详细信息
 * @description  返回当前节点的兄弟节点
 */
findCurrentNodeBrotherNode(treeData, node, key, isShowDetail = true);
```

## 是否是父节点

```js
/**
 *
 * @param {Object} node
 * @returns {Boolean}
 * @description 返回当前节点在树中是否是父节点
 */
isParentNode(node);
```

## 是否是子节点

```js
/**
 * @param {Array | Object}  treeData
 * @param {Object | string } node 值或者节点对象
 * @param { String } key
 * @returns {Boolean}
 * @description 返回当前节点在树中是否是子节点
 */
isChildNode(treeData, node, key);
```

## 是否是叶子节点

```js
/**
 * @param { Array | Object }  treeData
 * @param  { Object | String  } node
 * @param  { String  } key
 * @description  返回当前节点是否是叶子节点,外界如果提供isLeaf字段、使用外界isLeaf字段
 * @description  若不提供isLeaf字段、函数内部自动处理
 */
isLeafNode(treeData, node, key);
```

## 是否是根节点

```js
/**
 * @param { Array | Object }  treeData
 * @param  { Object | String  } node
 * @param  { String  } key
 * @param { boolean } showDetail
 * @description  返回当前节点是否是根节点
 * @returns { Object } { isRoot: true, root: '1' }
 * @example isRootNode(treeData, '1', 'id', false) ==> { isRoot: true, root: '1' }
 * @example isRootNode(treeData, '1', 'id', true) ==> { isRoot: true, root: { id: '1' } }
 * @example isRootNode(treeData, { id: '2' }, 'id' , false) ==> { isRoot: false, root: '1' }
 * @example isRootNode(treeData, { id: '2' }, 'id' , true) ==> { isRoot: false, root: { id: '1' } }
 */
isRootNode(treeData, node, key, showDetail = false)
```

## 重做树结构

```js
/**
 * @param { Array | Object }  treeData
 * @param  { Function  } handlerTreeFn
 * @description  重做树结构
 * @description  内部使用递归、提供更加语义化处理方式
 */
redoTreeData(treeData, handlerTreeFn);
```

## 树的模糊搜索

```js
/**
 * @param { Array | Object }  treeData
 * @param  { String  } keyWord
 * @param  { String  } key
 * @example treeFuzzySearch(cityData, '街', 'label')
 * @returns [[ '北京', '北京市', '东城区', '东城街道' ],[ '大连市', '甘井子区', '甘井子小城区', '甘井子街道' ]]
    @description 将树中所有包含关键字的路径返回
 */
treeFuzzySearch(treeData, keyWord, key);
```