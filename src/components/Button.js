// @flow

import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onClick: () => void,
};

export default function Button({ onClick }: Props): React.Element<*> {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 40,
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
