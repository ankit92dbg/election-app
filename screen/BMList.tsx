import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGE_BASE_URL} from '../config';
import {retrieveUserSession} from '../utils';
import {getAllBM} from '../redux/action/BMData';
import Loader from '../components/Loader';
import NetInfo from '@react-native-community/netinfo';

const BMList = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState<any>(true);
  // const DATA = [
  //   {
  //       key: 1,
  //       name: 'Praveen Singh',
  //       fatherName: 'Raj Kumar',
  //       address: 'Govt. Adarsh Sr. Sec. School Paota',
  //       mobileNo: 7065317064,
  //       epicId: 'SJV1243971',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Praveen@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 2,
  //       name: 'Priya Kumari',
  //       fatherName: 'Bablu Sahay',
  //       address: 'Laxminagar New Delhi',
  //       mobileNo: 9965317055,
  //       epicId: 'SJV1243971',
  //       partNo: 2,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 33,
  //       gender: 'F',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Priya@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 3,
  //       name: 'Ram Kumar',
  //       fatherName: 'Ritesh Jha',
  //       address: 'karol bagh New Delhi',
  //       mobileNo: 7895317077,
  //       epicId: 'SJV1243971',
  //       partNo: 3,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Ram@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 4,
  //       name: 'Sandeep Kumar',
  //       fatherName: 'Sanjay Kumar',
  //       address: 'Sarita Vihar New Delhi',
  //       mobileNo: 9865317222,
  //       epicId: 'SJV12439721',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Sandeep@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 5,
  //       name: 'Vishnu',
  //       fatherName: 'Rajesh Singh',
  //       address: 'Badarpur New Delhi',
  //       mobileNo: 8865317000,
  //       epicId: 'SJV1243921',
  //       partNo: 6,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Vishnu@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 6,
  //       name: 'Aarti Kumari',
  //       fatherName: 'Raj Kumar',
  //       address: 'Ashok Nagar New Delhi',
  //       mobileNo: 9965317024,
  //       epicId: 'SJV1243932',
  //       partNo: 4,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Aarti@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 7,
  //       name: 'Pankaj Sahay',
  //       fatherName: 'Raj Kumar',
  //       address: 'Mayur Vihar New Delhi',
  //       mobileNo: 9865317064,
  //       epicId: 'SJV12439766',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Pankaj@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 8,
  //       name: 'Rahul Shetty',
  //       fatherName: 'Krishana Shetty',
  //       address: 'Badarpur, New Delhi',
  //       mobileNo: 7065317090,
  //       epicId: 'SJV1243971',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Rahul@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 9,
  //       name: 'Ranjan Kumar',
  //       fatherName: 'Sajjan Kumar',
  //       address: 'Surajkund, New Delhi',
  //       mobileNo: 98447378822,
  //       epicId: 'SJV1243911',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Ranjan@gmail.com",
  //       houseNo: "22"
  //     },
  //     {
  //       key: 10,
  //       name: 'Shakti Srivastav',
  //       fatherName: 'Prateek Srivastav',
  //       address: 'Jasola Vihar, New Delhi',
  //       mobileNo: 71115317064,
  //       epicId: 'SJV1243998',
  //       partNo: 1,
  //       surName: 'Singh',
  //       total: 210,
  //       age: 28,
  //       gender: 'M',
  //       voterSlNo : Math.floor(Math.random()*(999-100+1)+100),
  //       email: "Shakti@gmail.com",
  //       houseNo: "22"
  //     },
  // ];
  const {data} = useSelector((state: any) => state?.BMData);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserSession();
      getNetInfo();
    });
    return unsubscribe;
  }, [navigation]);

  const getNetInfo = async () => {
    const connection = await NetInfo.fetch().then(state => {
      return state.isConnected;
    });
    setIsConnected(connection);
    return connection;
  };

  async function getUserSession() {
    try {
      setLoading(true);
      const session: any = await retrieveUserSession();
      if (session !== undefined) {
        let leader_id = '';
        if (session?.user_type == 1) {
          leader_id = session?.id;
        }
        if (session?.user_type == 2) {
          leader_id = session?.leader_id;
        }
        await dispatch(await getAllBM({leader_id: leader_id}));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      // There was an error on the native side
    }
  }
  const Item = ({item}: any) => (
    <ScrollView>
      <View style={{display: 'flex', flexDirection: 'row', paddingTop: 10}}>
        <View style={{flex: 1}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{flex: 1, marginLeft: 5}}>
              <Badge style={styles.voterId}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#ffffff',
                    zIndex: 1111,
                    fontWeight: '600',
                  }}>
                  {item?.assembly_name ? item?.assembly_name : 'Karyakarta'}
                </Text>
              </Badge>
            </View>
            <View style={{flex: 2}}></View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 12,
            }}>
            <View style={{flex: 1.5}}>
              {item?.profile_image ? (
                <Image
                  style={{width: 55, height: 55, borderRadius: 55}} // required Dimensions and styling of Image
                  source={{
                    uri:
                      item?.profile_image?.substring(0, 4) == 'file'
                        ? item?.home_banner
                        : IMAGE_BASE_URL + item?.profile_image,
                  }} // enter your avatar image path
                />
              ) : (
                <Image
                  style={{width: 55, height: 55}} // required Dimensions and styling of Image
                  source={require('../assets/images/user.png')} // enter your avatar image path
                />
              )}
            </View>
            <View style={{flex: 2.5}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#424242',
                }}>
                {item?.f_name} {item?.l_name}
                {/* {item?.name} */}
              </Text>
            </View>
            <View style={{flex: 4}}>
              <TouchableOpacity
                style={{marginTop: 2}}
                onPress={() => navigation.navigate('UpdateBM', {item: item})}>
                <Icon name="pencil" color={'#424242'} size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <>
              <View style={{flex: 1}}>
                <Icon name="envelope" color={'#424242'} size={16} />
              </View>
              <View style={{flex: 10}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: '#424242',
                    }}>
                    {item?.email}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <View style={{flex: 1}}>
              <Icon name="phone" color={'#424242'} size={16} />
            </View>
            <View style={{flex: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#424242',
                  }}>
                  {item?.phone}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <View style={{flex: 1}}>
              <Icon name="home" color={'#424242'} size={16} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: '#424242',
                }}>
                {item?.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#a8a7a7',
        }}
      />
    </ScrollView>
  );
  return (
    <>
      {loading ? (
        <Loader text="Loading data..." loading={loading} />
      ) : isConnected == false ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100}} // required Dimensions and styling of Image
            source={require('../assets/images/no-internet.png')} // enter your avatar image path
          />
          <Text style={{color: '#8f8d8d'}}>
            No internet connection, please try again later.
          </Text>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.parent}>
              <View style={styles.child}>
                <View style={{marginTop: 30, paddingLeft: 15}}>
                  <Text style={{color: '#FFFFFF'}}>{`Home > BM List`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              top: '10%',
              width: '100%',
              height: '89%',
              position: 'absolute',
              zIndex: 9999,
              paddingLeft: 15,
              paddingRight: 15,
              flex: 1,
            }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}>
              <Card style={styles.card}>
                <View style={{marginTop: 22}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#4e4f4f'}}>
                    BM List
                  </Text>
                  <View>
                    <View style={{marginTop: 20, height: '95%'}}>
                      <FlatList
                        data={data}
                        renderItem={({item}) => <Item item={item} />}
                        keyExtractor={(item: any) => item.key}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            </Animated.View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  innerContainer: {
    zIndex: 1,
    flexDirection: 'column',
  },
  parent: {
    height: '70%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: '#288BC6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#ebe6e6',
    color: '#121F26',
    width: 340,
  },
  infoText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  desgText: {
    color: '#adadad',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  card: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  part: {
    width: '100%',
    backgroundColor: '#de8100',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  btn: {
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#288BC6',
    width: '100%',
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  voterId: {
    width: '100%',
    backgroundColor: '#2dce89',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default BMList;
