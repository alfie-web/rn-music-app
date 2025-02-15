import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { defaultStyles, utilsStyles } from '../styles'
import { fontSize, screenPadding } from '../constants/common'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'
import { colors } from './../constants/common';
import { unknownTrackImageUri } from '../constants/images'
import MovingText from '../components/MovingText'
import { FontAwesome } from '@expo/vector-icons';
import { PlayerControls } from '../components/PlayerControls'
import PlayerProgressBar from '../components/PlayerProgressBar'
import PlayerVolumeBar from '../components/PlayerVolumeBar'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'

const PlayerScreen = () => {
  const activeTrack = useActiveTrack()

  const { top, bottom } = useSafeAreaInsets()

  const isFavorite = false

  const toggleFavorite = () => {

  }

  if (!activeTrack) return (
    <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
      <ActivityIndicator color={colors.icon} />
    </View>
  )
  return (
    <View style={styles.overlayContainer}>
      <DismissPlayerSymbol />

      <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
        <View style={styles.artworkImageContainer}>
          <Image
            source={{
              uri: activeTrack.artwork || unknownTrackImageUri
            }}
            resizeMode="cover"
            style={styles.artworkImage}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 'auto' }}>
            <View style={{ height: 60 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.trackTitleContainer}>
                  <MovingText
                    text={activeTrack.title || ''}
                    animationThreshold={30}
                    style={styles.trackTitle}
                  />
                </View>

                <FontAwesome
                  name={isFavorite ? 'heart' : 'heart-o'}
                  size={20}
                  color={isFavorite ? colors.primary : colors.icon}
                  style={{ marginHorizontal: 14 }}
                  onPress={toggleFavorite}
                />
              </View>

              {activeTrack.artist && (
                <Text numberOfLines={1} style={[styles.trackArtist, { marginTop: 6 }]}>{activeTrack.artist}</Text>
              )}
            </View>

            <PlayerProgressBar style={{ marginTop: 32 }} />
            <PlayerControls style={{ marginTop: 40 }} />
          </View>

          <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />

          <View style={utilsStyles.centeredRow}>
            <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
          </View>

        </View>

      </View>
    </View>
  )
}

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{
      position: 'absolute',
      top: top + 8,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <View accessible={false} style={{
        width: 50,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        opacity: 0.7,
      }}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%'
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: '700'
  },
  trackArtist: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: '90%'
  },
})

export default PlayerScreen
