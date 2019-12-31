import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

//用于在发起 Action 时，在控制台打印 Action 及其前后 Store 中的保存的状态信息。
const middlewares = [createLogger()]  

//createStore 接受两个参数
//rootReducer 是用来响应action和reducer， 组合了所有的reducer
//createStore 函数的第二个参数我们使用了 redux 为我们提供的工具函数 applyMiddleware 来在 Redux 中注入需要使用的中间件，因为它接收的参数是 (args1, args2, args3, ..., argsn) 的形式，所以这里我们用了数组展开运算符 ... 来展开 middlewares 数组。
export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}
