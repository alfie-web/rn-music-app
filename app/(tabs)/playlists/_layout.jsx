import React from 'react'
import { View, Text } from 'react-native'
import { defaultStyles } from '../../../styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from './../../../constants/layout';

const PlaylistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }} />
      </Stack>
    </View>
  )
}

export default PlaylistsScreenLayout
