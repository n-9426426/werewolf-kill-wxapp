import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import { formatMassage } from '@/util/stringUtils'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='werewolf-kill-game'>
      <Text>Hello world!{formatMassage({id: 'page.index.button.werewolfKill'})}</Text>
      <Button
        className='go-back'
        onClick={() => Taro.redirectTo({url: '/pages/index/index'})}
      >
        {'<'}
      </Button>
      {'111'}
    </View>
  )
}
