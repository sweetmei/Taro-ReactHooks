// ...
import { useSelector } from '@tarojs/redux'

// import 各种组件 ...

export default function Header(props) {
  const nickName = useSelector(state => state.user.nickName)

  // 双取反来构造字符串对应的布尔值，用于标志此时是否用户已经登录
  const isLogged = !!nickName

  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
  const isAlipay = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY

  return (
    <View className="user-box">
      <AtMessage />
      <LoggedMine />
      {!isLogged && (
        <View className="login-button-box">
          <LoginButton />
          {isWeapp && <WeappLoginButton />}
          {isAlipay && <AlipayLoginButton />}
        </View>
      )}
    </View>
  )
}
