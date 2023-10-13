import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import { formatMassage } from '@/util/stringUtils'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index-containter'>
      <Text>Hello world!{formatMassage({id: 'page.index.button.werewolfKill'})}</Text>
      <Button
        onClick={() => Taro.redirectTo({url: '/pages/werewolf-kill/number-identity/index'})}
      >
        {formatMassage({id: 'page.index.button.werewolfKill'})}
      </Button>
    </View>
  )
}
