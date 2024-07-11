import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native'
import { unknownTrackImageUri } from '../constants/images'
import { colors, fontSize } from './../constants/common';
import { defaultStyles } from '../styles';
import { isPlaying, useActiveTrack, useIsPlaying } from 'react-native-track-player';
import { Entypo, Ionicons } from '@expo/vector-icons'
import LoaderKit from 'react-native-loader-kit'

const TrackListItem = ({ track, onSelect }) => {
  const isActive = useActiveTrack()?.url === track.url
  const { playing: isPlaying } = useIsPlaying()

  return (
    <TouchableHighlight onPress={() => onSelect(track)}>
      <View style={styles.trackItemContainer}>
        <View>
          <Image
            source={{
              uri: track.artwork || unknownTrackImageUri
            }}
            resizeMode="contain"
            className="w-[50px] h-[50px] rounded-[4px]"
          />

          {isActive && (isPlaying
            ? <LoaderKit style={styles.trackPlayingIconIndicator} name="LineScaleParty" color={colors.icon} />
            : <Ionicons style={styles.trackPausedIconIndicator} name="play" size={24} color={colors.icon} />
          )}
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View className="w-full">
            <Text numberOfLines={1} style={{...styles.trackTitleText, color: isActive ? colors.primary : colors.text }}>{track.title}</Text>
          
            {track.artist && (
              <Text
                numberOfLines={1}
                style={styles.trackArtistText}
              >
                {track.artist}
              </Text>
            )}
          </View>

          <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
        </View>
        
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20,
  },
  trackPlayingIconIndicator: {
    position: 'absolute',
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIconIndicator: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: '90%',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
})

export default TrackListItem
