import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { colors } from '../constants/common'

const defaultSearchOptions = {
  tintColor: colors.primary,
  hideWhenScrolling: false
}

const useNavigationSearch = ({ searchBarOptions }) => {
  const [search, setSearch] = useState('')

  const navigation = useNavigation()

  const handleChangeText = ({ nativeEvent: { text } }) => {
    setSearch(text)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...searchBarOptions,
        onChangeText: handleChangeText,
      }
    })
  }, [navigation, searchBarOptions ])

  return search
}

export default useNavigationSearch
