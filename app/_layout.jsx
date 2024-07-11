// import { SplashScreen, Stack, router } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const RootLayout = () => {
//   // useEffect(() => {
//   //   router.push('/favorites')
//   // })

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <Stack>
//       {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="player" options={{
//         presentation: 'card',
//         gestureEnabled: true,
//         gestureDirection: 'vertical',
//         animationDuration: 400,
//         headerShown: false
//       }} />
//       {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
//     </Stack>
//     </GestureHandlerRootView>
//   )
// }

// export default RootLayout
import { SplashScreen, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSetupTrackPlayer } from './../hooks/useSetupTrackPlayer';
import useLogTrackPlayerState from './../hooks/useLogTrackPlayerState';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  }, [])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded
  })

  useLogTrackPlayerState()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="player" options={{
        presentation: 'card',
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animationDuration: 400,
        headerShown: false
      }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
    </GestureHandlerRootView>
  )
}

export default RootLayout
