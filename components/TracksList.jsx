import { Text, FlatList, View, Image } from 'react-native'

import TrackListItem from './TrackListItem'
import { utilsStyles } from '../styles'
import TrackPlayer from 'react-native-track-player'
import { unknownTrackImageUri } from '../constants/images'

const ItemDivider = () => (
  <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 0 }} />
)

const TracksList = ({ tracks, ...flatlistProps }) => {
  const handleTrackSelect = async (track) => {
    await TrackPlayer.load(track)
    await TrackPlayer.play()
  }

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      ListEmptyComponent={(
        <View>
          <Text style={utilsStyles.emptyContentText}>No songs found</Text>
          <Image
            source={{
              uri: unknownTrackImageUri
            }}
            style={utilsStyles.emptyContentImage}
            resizeMode="contain"
          />
        </View>
      )}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={track}
          onSelect={handleTrackSelect}
        />
      )}
      {...flatlistProps}
    />
  )
}

export default TracksList
