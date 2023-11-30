# 树所有方法列举

##  广度优先展开树
```js
/** 
 * @param { Array | Object } tree  树数组或者树对象
 * @returns { Array } 压平的树
 * @description 广度优先遍历、非递归
 * @example flattenTree({id: 1, name: '1', children: [{ id:2 ,name:'2'}]})
 * @returns [{id: 1, name: '1', children: [{ id:2 ,name:'2'}]}, { id:2 ,name:'2'}]
 */
flattenTree(arr)
```

##  深度优先展开树
```js
/** 
 * @param {Array | Object} tree  树数组或者树对象
 * @returns {Array} 压平的树
 * @description 前序遍历 ==> 深度遍历、非递归
 */
flattenTreeByDepth(arr)
```

##  后序深度展开树
```js
/** 
 * @param {Array | Object} tree  树数组或者树对象
 * @returns {Array} 压平的树
 * @description 后序遍历 ==> 深度遍历、非递归
 */
flattenTreeByPostOrder(arr)
```

##  递归展开树
```js
/**
 * @param { Array } tree
 * @description 递归
 * @example flattenTree({id: 1, name: '1', children: [{ id:2 ,name:'2'}]})
 * @returns [{id: 1, name: '1', children: [{ id:2 ,name:'2'}]}, { id:2 ,name:'2'}]
*/
reduceFlattenTree(arr)
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
 * @param {Array} tree  树数组(正常树)
 * @param {String} key 要查找的key
 * @param {String | Number} value 要查找的value
 * @description 返回当前节点对象、 广度优先遍历、非递归
 * @example findTreeByTreeData(tree, 'id', 1)
 * @returns {id: 1, name: '1', children: []}
*/
findTreeByTreeData(tree, key, value);
```


## 树查找（函数）
```js
/**
 * @param {Array} tree  树数组(正常树)
 * @param {callback} callback 回调函数
 * @return Array<node>
 * @description 返回节点数
 * @example findTreeByFn([{id:1,children:[{id:2,check:true,children:[{id:3}]}]}],(node)=>{return node.id === 2 && item.check})  [{id:2}]
 */
findTreeByFn(tree,callback);
```



## 查找当前节点的父节点
```js
/**
 * @param {Array} tree 树数组
 * @param {String} parentId  当前节点的父节点id、这个节点parentId应来来自于点击时候的parentId
 * @param showDetail 是否返回当前节点的详细信息
 * @returns {Array} 路径
 * @description 默认情况下记录当前节点的路径id集合 、showDetail为true时候返回当前节点的详细信息
 */
findParent(tree, parentId,showDetail);
```



## 查找子节点（函数）
```js
/**
 * @param {Array} tree 树数组(正常树)
 * @param {callBack} callBack 回调函数
 * @description 深度优先遍历、非递归
 * @example findChildrenListByFn(tree, (item) =>  item.check === false && (item.key === '1'))
 * @returns {Array} 返回当前节点的所有子节点
 */
findChildrenListByFn(tree, callback)
```


## 查找子节点
```js
/**
 * @param {Array} tree 树数组(正常树) 
 * @param {String} key 
 * @param {String | Number} value 
 * @param {Boolean} showDetail 是否返回当前节点的详细信息 默认true
 * @returns {Array} 返回当前节点的所有子节点
 * @description 深度优先遍历、非递归
 * @example findChildrenList([{id:1,children:[{id:2,children:[{id:3}]}]}],'id',1)  [{id:2},{id:3}]
 */
findChildrenList(tree, key,value ,showDetail = true)
```


## 查找路径
```js
/**
 * @param {Array} treeArray 树数组(正常树)
 * @param {string} target  节点的值
 * @param {string} key 你的唯一标识key
 * @param {boolean} showDetail 是否显示路径的详细信息 默认不包括
 * @param {boolean} isIncludeMyself 是否包含自身  默认不包括
 * @description  递归
 * @example findPath([{a:1,children:[{a:2,children:[{a:3}]}]}],3,'a') => [1,2]
 * @example findPath([{a:1,children:[{a:2,children:[{a:3}]}]}],3,'a',true) => [{a:1},{a:2}]
 * @returns {Array} 返回路径
 */
findPath(treeArray, target, key, showDetail)
```

## 是否是父节点
```js
/**
 * 
 * @param {Object} node 
 * @returns {Boolean}
 * @description 返回当前节点在树中是否是父节点
 */
isParentNode(node)
```

##  是否是子节点
```js
/** 
 * @param {Array | Object}  treeData
 * @param {Object} node
 * @param { String } key
 * @returns {Boolean}
 * @description 返回当前节点在树中是否是子节点
 */
isChildNode (treeData,node,key)
```
 
##  重做树结构
```js
/**
 * @param { Array | Object }  tree
 * @param  { Function  } handlerTreeFn
 * @description  重做树结构
 */
redoTreeData (treeData,handlerTreeFn)
```

##  是否是叶子节点
```js
/**
 * @param { Array | Object }  treeData
 * @param  { Object  } node
 * @param  { String  } key
 * @description  返回当前节点是否是叶子节点,外界如果提供isLeaf字段、则直接返回isLeaf字段
 */
isLeafNode (treeData,node,key)
```

##  查找当前节点的兄弟节点
```js
/**
 * @param { Array | Object }  treeData
 * @param  { Object  } node
 * @param  { String  } key
 * @param  { Boolean  } isShowDetail 默认true 返回当前节点的详细信息
 * @description  返回当前节点的兄弟节点
 */
findCurrentNodeBrotherNode (treeData,node,key)
```
