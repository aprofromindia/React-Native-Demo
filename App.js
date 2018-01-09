/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import SecondView from './src/components/SecondView';

export default class App extends React.PureComponent<
  {},
  { showSecondView: boolean }
> {
  state = {
    showSecondView: false,
  };

  render(): React.Element<*> {
    return (
      <View style={styles.container}>
        <Button
          onClick={() =>
            this.setState(function(state) {
              return { showSecondView: !state.showSecondView };
            })
          }
        />
        <Button onClick={() => {}} />
        <Button onClick={() => {}} />
        {this.state.showSecondView && <SecondView />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
