import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player'

const useTrackPlayerRepeatMode = () => {
  const [repeatMode, setRepeatMode] = useState()

  const changeRepeatMode = useCallback(async (newRepeatMode) => {
    await TrackPlayer.setRepeatMode(newRepeatMode)

    setRepeatMode(newRepeatMode)
  }, [])

  useEffect(() => {
    TrackPlayer.getRepeatMode().then(setRepeatMode)
  }, [])
  
  return { repeatMode, changeRepeatMode }
}

export default useTrackPlayerRepeatMode
