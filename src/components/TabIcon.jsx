import { Image, Text, View } from 'react-native'

export const TabIcon = ({ color, title, focused, icon }) => (
  <View className="items-center justify-center gap-1">
    <Image className="w-5 h-5" source={icon} tintColor={color} />
    <Text className="text-xs" style={{ color }}>
      {title}
    </Text>
  </View>
)
