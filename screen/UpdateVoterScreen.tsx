import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';

const UpdateVoterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={{marginTop: 40, paddingLeft: '12%'}}>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  Update Voter
                </Text>
              </View>
              <Text
                style={{
                  color: '#FFFFFF',
                }}>{`Home > ${route?.params?.routeFrom} > ${route?.params?.filterName} > Update > ${route?.params?.voterName}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '10%',
          width: '100%',
          height: 600,
          //   maxHeight: 700,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
          backgroundColor: '#DEDEDE',
        }}>
        <ScrollView>
          <>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <ScrollView>
                      <View>
                        <Text style={{fontSize: 16, fontWeight: '600'}}>
                          Update Voter
                        </Text>
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          AC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={'Test'}
                        />
                      </View>
                    </ScrollView>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
          </>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 20}}>
        <View style={{marginRight:15,marginLeft:40,height:50,backgroundColor:'#de8100',borderRadius:9,width:300,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#FFF',fontSize:18,fontWeight:'600'}}>Save</Text>
        </View>
      </View>
    </View>
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
    backgroundColor: '#FFFFFF',
    color: '#121F26',
  },
  inputInner: {
    borderRadius: 9,
    height: 50,
    marginTop: 7,
    padding: 16,
    backgroundColor: '#ebe9e8',
    color: '#000',
    borderColor: '#dedede',
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
    backgroundColor: '#f5b902',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  voterId: {
    width: '100%',
    backgroundColor: '#ed9a5a',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  btn: {
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#288BC6',
    width: 340,
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  filterBtn: {
    width: '90%',
    backgroundColor: '#de8100',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginLeft: '10%',
    borderRadius: 9,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    // marginTop: 52,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 10,
    marginTop: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default UpdateVoterScreen;
