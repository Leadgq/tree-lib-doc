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
 * @description 将数组转换成map,并且以key为map的key
 * @description 该方法会缓存结果
 * @example genderMapAndSetMapKey([{id:1,name:'test'},{id:2,name:'test2'}], 'id')
 * @returns { Map } { key:"1", value:{ id: 1, name: 'test'} ,  key:"2" ,value: { id: 2, name: 'test2' } }
 */
genderMapAndSetMapKey(arr, key)
```


## 解析url参数

```js
/**
 * @description 解析url参数
 * @returns { Object }
 * @example parseLocationUrlParams() => {id:1,name:'test'}
 * @description 和框架无关之和是否是web有关
 */
parseLocationUrlParams()
```

## 返回千分位

```js
/**
 * @description 返回千分位
 * @returns { string }
 * @example toThousands(1000) => "1,000"
 * @example toThousands(1000000) => "1,000,000"
 * @example toThousands(1000000000) => "1,000,000
 */
toThousands(num)
```

##  隐藏手机号中间四位

```js
/**
 * @description 隐藏手机号中间四位
 * @returns { string }
 * @example hidePhone('13812345678') => "138****5678"
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


## 延迟函数

```js
/**
 *  @param { Function } fn
 *  @param { number } count 默认为2
 *  @returns { Function }
 *  @description 函数执行n次后才会执行
 *  @example const fn = after(() => console.log('after'), 3);
*/
after(fn, count)
```

## 标签页之间通信

```js
/**
 * @description 不同标签页之间通信
 * @returns { Object  } sendMessage: Function, receiveMessage: Function
 * @example const { sendMessage, receiveMessage } = initBroadcastChannel('userInformation');
 * @example sendMessage('userInformation', { name: '张三' });
 * @example receiveMessage((data) => console.log(data));
 */
initBroadcastChannel(messageInfo)
```

## 数组去重

```js
/**
 * @description 新支持第二参数为函数
 * @description 数组去重
 * @description 去除对象数组中的重复项
 * @returns { Array }
 * @param { Array } arr
 * @param { string | Function } 
 * @example uniqueArray([],'id')
 * @example uniqueArray([],(a,b) => a.id !== b.id) 
 */
uniqueArray(arr, key | function )
```

## 模糊搜索对象数组

```js
/**
 * @description 模糊搜索对象数组
 * @returns { Array }
 * @param { string } keyWord 
 * @param { string } key
 * @description 如果不传入key，则认为是基本类型数组
*/
fuzzySearch(arr, keyWord, key)
```
## 返回当前时间

```js

/**
 * @description 方法是12小时制
 * @description 返回当前时间
 * @example getCurrentDateForChina() => 2021年1月1日星期五 下午4:00
 * @example getCurrentDateForChina(false) => 2021年1月1日星期五 16:00
 */
getCurrentDateForChina(isTwelveHours)
```

## 拷贝

```js
/**
 * @description 初始化一次 
 * @description 内部会判断是否支持clipboard、不支持则使用document.execCommand
 * @description 返回值为true表示拷贝成功
 * @param { string } value 当前需要拷贝的内容
 */
 const ClipboardInstance = new Clipboard();
 const res = await ClipboardInstance.copyTextByClipboard(value);
```

## 获取拷贝的内容

```js
/**
 * @description 初始化一次 
 * @description 内部会判断是否支持clipboard、不支持则使用document.execCommand
 * @description 返回值为你拷贝的内容
 * @description 不支持clipboard的时候、不可跨页面获取拷贝内容
 */
 const ClipboardInstance = new Clipboard();
 const res = await ClipboardInstance.readTextByClipboard();
```

## 函数重载
```js
/**
 * @description 函数重载 
 * @example
 *  const testFn = createOverload();
 *  const strFn = (...args) => {console.log(args);}
 *  testFn.addImpl('string', strFn)
 *  testFn.addImpl('string', 'string', strFn)
 *  testFn.addImpl('string', 'string', 'string',strFn)
 *  testFn('1', '2','我是第三个参数')
 */
createOverload();
```

## 生成随机数 
```js
/**
 *  @description 生成随机数
 *  @param { number } min
 *  @param { number } max
 *  @returns { number }
 */
genderRandom(min, max);
```

## 重构对象 

```js 
/**
 *  @param { Object } obj
 *  @param { Function } fn
 *  @returns { Object }
 * @example objectMap({},(k,v)=>{ return  [k,v*2]  })
 */
objectMap(obj, fn);
```

## 挑选对象 0.2.5

```js
/**
 *  @description 挑选对象
 *  @param { Object } obj
 *  @param { String | function } props
 *  @returns { Object }
 *  @example pickObject({a:1,b:2,3:3},['a','b']) ==> {a:1,b:2}
 *  @example pickObject({a:1,b:2,3:3},(k,v) => k !== '3') ==> {a:1,b:2}
 */
pickObject(obj, ['a','b'] | function )
```


## 排除对象 0.2.5

```js
/**
 *  @description 排除对象
 *  @param { Object } obj
 *  @param { String | function } props
 *  @returns { Object }
 *  @example omitObject({a:1,b:2,3:3},['a']) ==> {b:2}
 *  @example omitObject({a:1,b:2,3:3},(k,v) => k !== '3') ==> {a:1,b:2}
 */
omitObject(obj, ['a','b'] | function )
```

## 深度比较数据 0.2.6

```js
/**
 *  @description 深度比较数据
 *  @param { any } value1
 *  @param { any } value2
 *  @returns { Boolean }
 *  @example isDeepEqual({a:1,b:2},{a:1,b:2}) ==> true
 *  @example isDeepEqual({a:1,b:2},{a:1,b:3}) ==> false
 *  @example isDeepEqual([1,2],[1,2]) ==> true
 *  @example isDeepEqual('1','2') ==> false
 **/
isDeepEqual(value1,value2)
```


## 深度克隆 0.2.7

```js
/**
 *  @description clone Data
 *  @param { Object } value
 *  @returns { Object }
 *  @example deepClone({a:1,b:2}) ==> {a:1,b:2}
 *  @example deepClone([1,2,3]) ==> [1,2,3]
 **/
deepClone(value)
```


## 抽取视频帧 0.2.7

```js
/**
 * @description 获取文件中的某一帧、或间隔获取多帧
 *  @param { File } file
 *  @param { Number } time 每一帧的时间间隔(单位:秒)
 *  @param { Boolean } isUseInterval 是否使用间隔 为false只会获取这一帧
 *  @returns { Map }
 *  @example await captureFrame({ file, 20  }) ==> Map { blob => {url:blobUrl,time:20},blob => {url:blobUrl,time:40} }
 */
captureFrame(file, time = 0, isUseInterval = true)
```

## 合并url和参数 0.2.8

```js
/**
 * @description 合并url和参数
 * @param url {String}
 * @param params {Object}
 */
jointUrl(url, params)
```

## 获取最后一次请求值 0.2.8

```js
/**
 * @description 确保只返回最后一次请求的结果，忽略之前的请求结果
 * @param {Function} fn 异步请求函数
 * @returns {Function} 包装后的函数
 */
onlyLastHttpValue(fn);
```

## 阿拉伯数字转罗马数字 0.2.9

```js
/**
 * @description 阿拉伯数字转罗马数字
 * @param {Number} num 阿拉伯数字
 * @returns {String} 罗马数字
 */
arabicToRoman(num)
```

## 获取随机颜色 0.2.9

```js
/**
 * @description 获取随机颜色
 * @returns {String} 随机颜色
 */
getRandomColor()
```

## base64转blob 0.2.9

```js
/**
 * @description base64转blob
 * @param {String} base64 base64字符串
 * @returns {Blob} blob
 */
dataUrlToBlob(base64)
```

## blobToBase64  0.2.9

```js
/**
 * @description blob转base64
 * @param {Blob} blob blob
 * @returns {Promise<string>} base64
 */
blobToBase64(blob)
```

## 计算base64图片大小  0.2.9

```js
/**
 * @description 计算base64图片大小
 * @param {string} base64Str base64字符串
 * @returns {Object} 包含不同单位的大小 { bytes: number, kb: number, mb: number }
 * @throws {Error} 当输入的base64字符串格式不正确时抛出错误
 * @example
 * calculateImageSize('data:image/jpeg;base64,/9j/4AAQSkZJRg...')
 * // => { bytes: 1024, kb: 1, mb: 0.001 }
 */
calculateImageSize(base64Str);
```
