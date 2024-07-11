import React, { useMemo } from 'react'
import { View, Text, ScrollView, Platform } from 'react-native'

import { defaultStyles } from '../../../styles'
import TracksList from '../../../components/TracksList'
import { colors, screenPadding } from '../../../constants/common'
import useNavigationSearch from '../../../hooks/useNavigationSearch'

import library from '../../../assets/data/library.json'

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
      ...Platform.OS === 'android' ? {
        textColor: colors.text,
        hintTextColor: colors.textMuted,
        headerIconColor: colors.textMuted,
        shouldShowHintSearchIcon: false,
      } : {}
    }
  })

  const filteredTracks = useMemo(() => {
    if (!search) return library

    return library.filter(track => track.title?.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          paddingHorizontal: screenPadding.horizontal
        }}
      >
        <TracksList tracks={filteredTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  )
}

export default SongsScreen
