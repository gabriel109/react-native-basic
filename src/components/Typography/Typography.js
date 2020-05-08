import React from 'react'
import { Text } from 'react-native'

const Typography = ({ children }) => !children ? null : <Text>{children}</Text>;

export default Typography