/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import Loginform  from './components/Loginform';

export default class App extends Component {

    state = { loggedIn: null};
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyC1o-gp27JI8bX6an45GxRilWVCPMZydgs',
            authDomain: 'react-native-auth-2adf2.firebaseapp.com',
            databaseURL: 'https://react-native-auth-2adf2.firebaseio.com',
            projectId: 'react-native-auth-2adf2',
            storageBucket: 'react-native-auth-2adf2.appspot.com',
            messagingSenderId: '337348104508'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true});
            }else{
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {

        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <Loginform />;
            default:
                return <Spinner size="large" />;
        }
    }
    render() {
        return (
          <View>
              <Header headerText="Authentication"/>
                {this.renderContent()}
          </View>
        );
    }
}