# 数学方法列举

## 计算百分比

```js
/**
 * @param {Number} value 当前值
 * @param {Number} total 总值
 * @param {Number} dots 保留小数位数
 * @description 计算百分比
 * @example calculatePercentage(1, 100, 2)
 * @returns 1.00%
 * @description 计算百分比,内部已经对total非法值进行了处理
 */
calculatePercentage(value, total, (dots = 2));
```

## 计算两个经纬度之间的距离

```js
/**
 * @param { Array  } fromLat
 * @param { Array } fromLng
 * @description 计算两个经纬度之间的距离
 * @example calculateDistance([39.90923, 116.397428], [39.90923, 116.397428])
 * @returns 0
 */
getDistance(from, to);
```

## 两个数组的交集

```js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 两个数组的交集
 * @example intersectionArray([1,2,3], [2,3,4]) => [2,3]
 */
intersectionArray(arr1, arr2);
```

## 两个数组的对称差集

```js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 两个数组的对称差集
 * @example symmetricDifference([1,2,3], [2,3,4]) => [1,4]
 */
symmetricDifference(arr1, arr2);
```

## 相对差集

```js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 相对差集
 * @example difference([1,2,3], [2,3,4]) => [1]
 */
difference(arr1, arr2);
```

## 获取差集 0.2.9

```js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 获取差集
 * @example getLeftDifference([1,2,3], [2,3]) => [1]
 */
getLeftDifference(arr,arr2,key);
```
