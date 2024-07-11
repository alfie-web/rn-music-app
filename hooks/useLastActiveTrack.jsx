import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useActiveTrack } from 'react-native-track-player'

const useLastActiveTrack = () => {
  const activeTrack = useActiveTrack()

  const [lastActiveTrack, setLastActiveTrack] = useState()

  useEffect(() => {
    if (!activeTrack) return 

    setLastActiveTrack(activeTrack)
  }, [activeTrack])

  return lastActiveTrack
}

export default useLastActiveTrack
