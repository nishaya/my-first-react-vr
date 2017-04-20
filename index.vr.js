import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import ReactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'
import MyText from './components/my_text.js'

const textStyle = {
  color: 'rgba(255, 255, 255, 0.3)',
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
}

export default class MyFirstVR extends React.Component {
  state = { rotate: 0 }

  componentDidMount() {
    this.mixins = [TimerMixin]
    this.setInterval(() => {
      this.setState({ rotate: this.state.rotate + 2 })
    }, 30)
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            ...textStyle,
            transform: [{translate: [-1, 0, -3]}],
          }}>
          My
        </Text>
        <MyText
          style={{
            fontSize: 0.5,
            transform: [{translate: [0 , 1, -2]}, {rotateY: `${this.state.rotate}deg`}],
          }}>
          First
        </MyText>
        <Text
          style={{
            ...textStyle,
            transform: [{translate: [0.7, 1.6, -2]}],
          }}>
          VR
        </Text>
      </View>
    );
  }
};

ReactMixin.onClass(MyFirstVR, TimerMixin)

AppRegistry.registerComponent('MyFirstVR', () => MyFirstVR);
