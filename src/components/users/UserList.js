import React from 'react';
import { View,FlatList } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { getUsers } from '../../api/usersApi';
import renderItem from './ItemRender';

const Lista = () => {
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    getUsers()
    .then(({data}) => {
      setUsers(data.data);
    })
    .catch((error)=>{
      console.log("Api call error", error);
   });
  }, []);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={users}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeprator}
    />
  )
};

export default Lista;

const keyExtractor = (item, index) => index.toString()

const ItemSeprator = () => <View style={{
  height: verticalScale(0.5),
  width: scale(100),
  backgroundColor: "rgb(192, 192, 192)",
}}/>