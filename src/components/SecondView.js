// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

type Props = {};

type State = {};

export default class SecondView extends React.PureComponent<Props, State> {
  render(): React.Element<*> {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Second View</Text>
        <Button onClick={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    textAlign: 'center',
  },
});
