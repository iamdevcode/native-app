import images from '#/images'
import { Button } from '@/components/Buttons/Button'
import { router } from 'expo-router'
import { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const [loader, setLoader] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex-1 w-full justify-center items-center px-4">
          <Image
            resizeMode="contain"
            source={images.logo}
            className="w-[134px] h-[84px]"
          />
          <Image
            resizeMode="contain"
            source={images.cards}
            className="w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              resizeMode="contain"
              source={images.path}
              className="absolute -bottom-2 -right-[25px] w-[136px] h-[15px]"
            />
          </View>
          <Text className="text-xs font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <Button
            title="Continue with Email"
            handlePress={() => {
              setLoader(true)
              setTimeout(() => {
                // router.push('/sign-in')
                router.push('(tabs)')
                setLoader(false)
              }, 1000)
            }}
            isLoading={loader}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
