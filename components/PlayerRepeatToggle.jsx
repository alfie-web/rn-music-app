import React from 'react'
import { View, Text } from 'react-native'
import { RepeatMode } from 'react-native-track-player'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './../constants/common';
import useTrackPlayerRepeatMode from '../hooks/useTrackPlayerRepeatMode';

const repeatOrder = [
  RepeatMode.Off,
  RepeatMode.Track,
  RepeatMode.Queue
]

const repeatIcons = {
  [RepeatMode.Off]: 'repeat-off',
  [RepeatMode.Track]: 'repeat-once',
  [RepeatMode.Queue]: 'repeat'
}

const PlayerRepeatToggle = ({ ...iconProps }) => {
  const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode()

  const toggleRepeatMode = () => {
    if (repeatMode === null) return

    const currentIndex = repeatOrder.indexOf(repeatMode)
    const nextIndex = (currentIndex + 1) % repeatOrder.length

    changeRepeatMode(repeatOrder[nextIndex])
  }

  const icon = repeatIcons[repeatMode] || 'repeat-off'

  return (
    <MaterialCommunityIcons name={icon} onPress={toggleRepeatMode} color={colors.icon} {...iconProps} />
  )
}

export default PlayerRepeatToggle
