import images from '#/images'
import { Button } from '@/components/Buttons/Button'
import { Input } from '@/components/Inputs/Input'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'

export default function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [loader, setLoader] = useState(false)

  const handleSubmit = () => {}

  return (
    <View className="relative bg-primary flex-1 w-full items-center px-4 pt-[80px]">
      <Image
        // source={images.logo}
        resizeMode="contain"
        className="w-[115px] h-[35px]"
      />
      <Text className="text-2xl text-white font-psemibold my-7">
        LogIn to {''}
        <Text className="text-secondary-200">Aora</Text>
      </Text>
      <Image
        resizeMode="contain"
        source={images.path}
        className="absolute top-[170px] right-[102] w-[80px] h-[14px]"
      />
      <Input
        title="Email"
        value={form.email}
        handleChange={value => setForm({ ...form, email: value })}
      />
      <Input
        title="Password"
        value={form.password}
        handleChange={value => setForm({ ...form, password: value })}
      />
      <Button title="Sign In" handlePress={handleSubmit} isLoading={loader} />
      <View className="flex-row gap-x-2 mt-7">
        <Text className="text-lg text-gray-100 font-pregular">
          Don't have account?
        </Text>
        <Link href="sign-up" className="text-lg text-secondary font-pmedium">
          Sign Up
        </Link>
      </View>
    </View>
  )
}
