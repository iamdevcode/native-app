import clsx from 'clsx'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

export const Button = ({ title, handlePress, isLoading }) => (
  <TouchableOpacity
    onPress={handlePress}
    disabled={isLoading}
    className={clsx(
      'w-full h-[62px] bg-secondary-200 rounded-xl justify-center items-center mt-7',
      isLoading && 'opacity-60'
    )}
  >
    {isLoading ? (
      <ActivityIndicator size={30} color="#fff" />
    ) : (
      <Text className="text-primary font-psemibold text-lg">{title}</Text>
    )}
  </TouchableOpacity>
)
