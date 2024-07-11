import React from 'react'
import { View, Text, Platform } from 'react-native'
import { defaultStyles } from '../../../styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from './../../../constants/layout';
import { colors } from '../../../constants/common';

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{
          ...Platform.OS === 'android' ? {
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleStyle: {
              color: colors.text
            },
            headerTintColor: colors.text,
          } : {
            ...StackScreenWithSearchBar,
          },
          headerTitle: 'Songs',
        }} />
      </Stack>
    </View>
  )
}

export default SongsScreenLayout
