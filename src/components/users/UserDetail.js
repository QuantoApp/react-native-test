import React from 'react';
import { View , Text } from 'react-native';
import styles from '../../styles/styles';
import detailStyles from './styles';
import { Avatar } from 'react-native-elements';
import { getUserDetail } from '../../api/usersApi';
import Spinner from 'react-native-loading-spinner-overlay';

function DetailsScreen({route}) {

const { params } = route;
const { userId } = params;
const [ userDetail,setUserDetail] = React.useState({});
const [ loading , setLoading ] = React.useState(false);

React.useEffect(() => {
  setLoading(true);
  getUserDetail(userId)
  .then(({data}) => {
    setUserDetail(data.data);
  })
  .catch((error)=>{
    console.log("Api call error", error);
 })
 .finally(() => {
    setLoading(false);
  });
}, []);

const { avatar, email, first_name, last_name } = userDetail;

return (
  <View style={styles.containerDetail}>
    <Spinner
     visible={loading}
     textContent={'Loading...'}
     textStyle={styles.spinnerTextStyle}
    />
   <Avatar rounded size="xlarge" source={{uri: avatar}} avatarStyle={styles.avatar}/>
    <Text style={detailStyles.nameStyle}>{first_name} {last_name}</Text>
    <Text style={detailStyles.emailStyle}>{email}</Text>
   </View>
  );
}

export default DetailsScreen;