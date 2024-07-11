import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { colors } from './../constants/common';

export const PlayerControls = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SkipToPrevButton iconSize={25} />
        <PlayPauseButton iconSize={40} />
        <SkipToNextButton iconSize={25} />
      </View>
    </View>
  )
}

export const PlayPauseButton = ({ style, iconSize }) => {
  const {playing: isPlaying } = useIsPlaying()

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity activeOpacity={0.85} onPress={isPlaying ? TrackPlayer.pause : TrackPlayer.play}>
        <FontAwesome name={isPlaying ? 'pause' : 'play'} size={iconSize} color={colors.text} />
      </TouchableOpacity>
    </View>
  )
}

export const SkipToNextButton = ({ style, iconSize = 30 }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToNext()}>
      <FontAwesome6 name="forward" size={iconSize} color={colors.text} />
    </TouchableOpacity>
  )
}

export const SkipToPrevButton = ({ style, iconSize = 30 }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToPrevious()}>
      <FontAwesome6 name="backward" size={iconSize} color={colors.text} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})
