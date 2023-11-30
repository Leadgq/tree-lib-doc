# 工具函数列举


## 两个数组的交集

```js
/**
 * @param { string[] | number[] | Array<object> } arr
 * @param { string[] | number[] | Array<object> } arr2
 * @param { string } key
 * @returns { Array }
 * @description 获取数组1对于数组2的交集
 * @description 如果都是基本类型数组,key不需要传
 */
getIntersection(arr1, arr2,key)
```


## 两个数组的对称差集

```js
/**
 * @param {  Array<object> } arr
 * @param {  Array<object> } arr2
 * @param { string } key
 * @returns { Array }
 * @description 返回对称差集
 * @example getSymmetricDifference([{id:1},{id:2},{id:3}], [{id:1},{id:2},{id:4}], 'id') => [{id:3},{id:4}]
 */
getSymmetricDifference(arr1, arr2,key)
```

## 数组转换为map

```js
/**
 * @param {  Array } arr
 * @param { string } key
 * @returns { Map }
 * @description 将数组转换成map,并且以key为map的key
 * @description 该方法会缓存结果
 */
genderMapAndSetMapKey(arr, key)
```


## 解析url参数

```js
/**
 * @description 解析url参数
 * @returns { Object }
 * @example parseLocationUrlParams() => {id:1,name:'test'}
 * @description web
 */
parseLocationUrlParams()
```


## 返回千分位

```js
/**
 * @description 返回千分位
 * @returns { string }
 */
toThousands(num)
```

##  隐藏手机号中间四位

```js
/**
 * @description 隐藏手机号中间四位
 * @returns { string }
 */
hidePhone(phone)
```


##  睡眠函数

```js
/**
 * @param { number } time
 * @returns { Promise  }  { promises: Promise }
 * @returns { cancel } { cancel: Function  }
 * @example sleep(1000).then(res => console.log(res)) => sleep end
 * @description 睡眠函数
 * @description 可以取消睡眠 通过返回的cancel函数
 */
sleep(time)
```