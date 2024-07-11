import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const CustomButton = ({ title, onPress, containerStyles = '', textStyles = '', isDisabled = false }) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
