import React from 'react';
import { View } from 'react-native';
import Lista from '../users/UserList';
import stylesContainer from './styles';

function HomeScreen() {
    return (
    <View style={stylesContainer.container}>
      <Lista/>
    </View>
    );
}

export default HomeScreen;