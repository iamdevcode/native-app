import clsx from 'clsx'
import { Image, Text, View } from 'react-native'

export const TabIcon = ({ color, name, focused, icon }) => (
  <View className="items-center justify-center gap-1">
    <Image className="w-5 h-5" source={icon} tintColor={color} />
    <Text
      className={clsx('text-xs', focused ? 'font-psemibold' : 'font-pregular')}
      style={{ color }}
    >
      {name}
    </Text>
  </View>
)
