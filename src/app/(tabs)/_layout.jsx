import { colors } from '#/constants/theme/colors'
import { tabs_routes } from '#/constants/uidata/tabs_routes'
import { TabIcon } from '@/components/TabIcon'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.black[100],
          borderTopWidth: 0,
          borderTopColor: colors.black[200],
          height: 70
        }
      }}
    >
      {tabs_routes.map(({ name, title, icon }, i) => (
        <Tabs.Screen
          key={i}
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                title={title}
                icon={icon}
              />
            )
          }}
        />
      ))}
    </Tabs>
  )
}
