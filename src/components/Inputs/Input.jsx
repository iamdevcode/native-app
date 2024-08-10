import icons from '#/icons'
import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Input = ({ title, placeholder, value, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className="mt-5 space-y-2 w-full">
      <Text className="text-gray-100 font-pmedium">{title}</Text>
      <View className="relative border-2 border-black-200 w-full h-16 items-center rounded-2xl bg-black-100 focus:border-secondary">
        <TextInput
          className="w-full px-4 flex-1 text-white font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChange}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {/* ShowPassword */}
        {title === 'Password' && (
          <TouchableOpacity
            className="absolute bottom-[14px] right-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              className="w-7 h-7"
              resizeMode="contain"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
