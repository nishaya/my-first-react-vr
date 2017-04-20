import React from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr'

const textStyle = {
  color: 'rgba(120, 120, 255, 0.7)',
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
}

export default class MyText extends React.Component {
  render() {
    return (
      <Text
        style={{
          ...textStyle,
          ...this.props.style,
        }}>
        {this.props.children}
      </Text>
    )
  }
}
