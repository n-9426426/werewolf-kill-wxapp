import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import { formatMassage } from '@/util/stringUtils'
import werewolfKillIdentity from '@/pages/data/werewolf-kill-identity'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='werewolf-kill-identity'>
      {
        werewolfKillIdentity.map((identity, index) => {
          return (
            <div className='identity-card'>
              <img src="aaaa" alt="aaa" />
              <div>{identity.name}</div>
            </div>
          )
        })
      }
    </View>
  )
}
