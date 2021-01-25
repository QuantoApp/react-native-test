import React from 'react';
import {Text, View} from 'react-native';
import { ListItem, Avatar , Button} from 'react-native-elements';
import { scale } from 'react-native-size-matters';
import userStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';

function GoToButton({ screenName , user }) {
    const navigation = useNavigation();
    const { id } = user;
    return (
      <Button
        type="clear" 
        title="ver" 
        titleStyle={{color:'black'}}
        onPress={() => navigation.navigate(screenName,{
            userId: id
        })}
      />
    );
}

const itemRender = ({item}) => {

  return (
    <ListItem>
      <Avatar rounded size="xlarge" 
        source={{uri: item.avatar}} 
        style={{width:scale(35)}} 
        avatarStyle={styles.avatar}/>
        <ListItem.Content >
          <ListItem.Title style={userStyles.listItemTitle}>{item.first_name} {item.last_name}</ListItem.Title>
          <View>
            <Text style={userStyles.ratingText}>{item.email}</Text>
          </View>
        </ListItem.Content>
        
        <GoToButton screenName="Detalle de usuario" user={item}/>
      </ListItem>
  )};

export default itemRender;