import images from '#/images'
import { Button } from '@/components/Buttons/Button'
import { Input } from '@/components/Inputs/Input'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'

export default function SignUp() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loader, setLoader] = useState(false)

  const handleSubmit = async () => {
    const { username, email, password } = form
  }
  return (
    <View className="relative bg-primary flex-1 w-full items-center px-4 pt-[80px]">
      <Image
        source={images.logo}
        resizeMode="contain"
        className="w-[115px] h-[35px]"
      />
      <Text className="text-2xl text-white font-psemibold my-7">
        SignUp to {''}
        <Text className="text-secondary-200">Aora</Text>
      </Text>
      <Image
        resizeMode="contain"
        source={images.path}
        className="absolute top-[170px] right-[91] w-[80px] h-[14px]"
      />
      <Input
        title="Username"
        value={form.username}
        handleChange={value => setForm({ ...form, username: value })}
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
      <Button title="Sign Up" handlePress={handleSubmit} isLoading={loader} />
      <View className="flex-row gap-x-2 mt-7">
        <Text className="text-lg text-gray-100 font-pregular">
          Have an account already?
        </Text>
        <Link href="sign-in" className="text-lg text-secondary font-pmedium">
          Sign In
        </Link>
      </View>
    </View>
  )
}
