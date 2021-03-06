import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
   NavigationParams,
   NavigationScreenProp,
   NavigationState,
   NavigationEvents,
} from 'react-navigation';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   navigation: NavigationScreenProp<
      NavigationState,
      NavigationParams
   >;
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HeaderBar } from '../../components/headerBar';

/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

class HomePage extends Component<IProps> {
   public render() {
      const { navigation } = this.props;

      return (
         <View>
            <HeaderBar navigation={navigation} />
            <NavigationEvents onWillFocus={this.onFocusPage} />
            <Text style={styles.titleText}>Home page!</Text>
            <Button
               title='10% off at Zizzi'
               onPress={() =>
                  navigation.navigate('Offer', {
                     offerId: 12345,
                  })
               }
            />
         </View>
      );
   }

   private onFocusPage = (payload: any) => {
      console.log('HOME WILL FOCUS', payload);
   };
}

/* -----------------------------------
 *
 * Styles
 *
 * -------------------------------- */

const styles = StyleSheet.create({
   titleText: {
      fontSize: 18,
      marginBottom: 20,
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { HomePage };
