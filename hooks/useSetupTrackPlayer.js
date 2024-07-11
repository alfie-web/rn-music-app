import { useEffect, useRef } from "react"
import TrackPlayer, { RepeatMode } from "react-native-track-player"

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10, // 10mb

  })

  await TrackPlayer.setVolume(0.5)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupTrackPlayer = ({ onLoad }) => {
  const isInitialized = useRef(false)

  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialized.current = true

        onLoad?.()
      })
      .catch(error => {
        isInitialized.current = false

        console.log('PLAYER_LOAD_ERROR', error)
      })
  }, [onLoad])
}
