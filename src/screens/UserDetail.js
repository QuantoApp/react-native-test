import React from 'react';
import {Text} from 'react-native';
import ViewContainer from '../components/ViewContainer';

const UserDetail = ({navigation, route}) => {
  /**
   * User's id from navigation param
   */
  const {id} = route.params;

  return (
    <ViewContainer>
      <Text>Detalle del usuario</Text>
    </ViewContainer>
  );
};

export default UserDetail;
