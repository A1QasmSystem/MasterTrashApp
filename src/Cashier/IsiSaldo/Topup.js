import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  // ImageBackground,
  TouchableOpacity,
  ScrollView,
  // Animated,
  Button,
  TouchableHighlight,
  Modal,
} from 'react-native';
// import Modal from 'react-native-modal';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// const {Swipeable} = GestureHandler;
// import CheckBox from '@react-native-community/checkbox';

// const LeftActions = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
//       <Text
//         style={{
//           color: 'white',
//           paddingHorizontal: 10,
//           fontWeight: '600',
//         }}>
//         Left Action
//       </Text>
//     </View>
//   );
// };

export default class Topup extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.viewTopU}>
          <View style={styles.viewLogin}>
            <ScrollView>
              <View style={styles.headerBg}>
                <Image
                  source={require('../../assets/sort-button-with-three-lines.png')}
                  style={styles.headerIcon}
                />
                <View style={styles.categoryContainer}>
                  {/* <Image
                  source={require('../../assets/snacks.png')}
                  style={styles.categoryIcon}
                /> */}
                  <Text style={styles.categoryText}>Transaction</Text>
                </View>
                <Image
                  source={require('../../assets/round-account-button-with-user-inside.png')}
                  style={styles.headerIconRight}
                />
              </View>

              {/* <View style={styles.listContainer}>
                <View>
                  <Text style={styles.listText}>INVC012-1595-3757</Text>
                  <Text style={styles.qtyText}>Qty: 98</Text>
                </View>
                <Text style={styles.hargaText}>$500</Text>
              </View> */}

              <View
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  height: 1,
                }}
              />

              <View style={styles.listContainer}>
                <Modal
                  animationType={'slide'}
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    console.log('Modal has been closed.');
                  }}>
                  <View style={styles.modalContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(!this.state.modalVisible);
                      }}>
                      <View style={{backgroundColor: '#315bef'}}>
                        <Text style={styles.text}>Delete</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(!this.state.modalVisible);
                      }}>
                      <View style={{backgroundColor: 'yellow'}}>
                        <Text style={styles.text}>Close Modal</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}>
                  <View>
                    <Text style={styles.listText}>INVC012-1595-3757</Text>
                    <Text style={styles.qtyText}>Qty: 98</Text>
                  </View>
                  <Text
                    style={{...styles.hargaText, textAlign: 'right', flex: 1}}>
                    $500
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  height: 1,
                }}
              />

              <View style={styles.listContainer}>
                <Modal
                  animationType={'slide'}
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    console.log('Modal has been closed.');
                  }}>
                  <View style={styles.modalContainer}>
                    <Text style={styles.text}>Modal is open!</Text>

                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(!this.state.modalVisible);
                      }}>
                      <View style={{backgroundColor: 'yellow'}}>
                        <Text style={styles.text}>Close Modal</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}>
                  <View>
                    <Text style={styles.listText}>INVC012-1595-3757</Text>
                    <Text style={styles.qtyText}>Qty: 98</Text>
                  </View>
                  <Text
                    style={{...styles.hargaText, textAlign: 'right', flex: 1}}>
                    $500
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  height: 1,
                }}
              />

              <View style={styles.listContainer}>
                <Modal
                  animationType={'slide'}
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    console.log('Modal has been closed.');
                  }}>
                  <View style={styles.modalContainer}>
                    <Text style={styles.text}>Modal is open!</Text>

                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(!this.state.modalVisible);
                      }}>
                      <View style={{backgroundColor: 'yellow'}}>
                        <Text style={styles.text}>Close Modal</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}>
                  <View>
                    <Text style={styles.listText}>INVC012-1595-3757</Text>
                    <Text style={styles.qtyText}>Qty: 98</Text>
                  </View>
                  <Text
                    style={{...styles.hargaText, textAlign: 'right', flex: 1}}>
                    $500
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.barangContainer}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <View style={styles.viewBarang}>
                  <Image
                    source={require('../../assets/watch.png')}
                    style={styles.barangIcon}
                  />
                  <View>
                    <Text style={styles.textBarang}>Harga:</Text>
                    <Text style={styles.textBarang}>Quantity:</Text>
                  </View>
                </View>
                <Text style={styles.categoryText}>Nama Barang</Text>
              </View> */}
            </ScrollView>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.bottomText}>Items: 10,</Text>
              <Text style={styles.totalText}>Harga: $85</Text>
            </View>
            <TouchableOpacity
              style={{
                // backgroundColor: 'blue',
                marginLeft: 5,
                width: 70,
                height: 25,
                borderWidth: 3,
                marginLeft: '35%',
                marginTop: -15,
                borderRadius: 8,
                backgroundColor: 'blue',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBg: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#158ac5',
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60,
    // resizeMode: 'center',
  },
  headerDash: {
    marginTop: 11,
    marginBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60,
    resizeMode: 'center',
  },
  headerText: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // marginHorizontal: 20,
    // marginVertical: 15,
    flex: 1,
  },
  categoryText: {
    // color: 'white',
    fontSize: 17,
    width: 100,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: 10,
    // maxWidth: 200,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  listText: {
    maxWidth: 198,
    marginTop: -9,
    // color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: 50,
    // marginTop: 10,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  bottomText: {
    marginTop: -9,
    // color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: '10%',
    // marginTop: 10,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  qtyText: {
    // color: 'white',
    fontSize: 13,
    // fontWeight: 'bold',
    marginLeft: '10%',
    // marginBottom: 15,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  totalText: {
    // color: 'white',
    fontSize: 13,
    // fontWeight: 'bold',
    marginLeft: '10%',
    // marginBottom: 15,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  hargaText: {
    marginTop: -9,
    marginRight: 10,
    // color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    // marginLeft: '30%',',
    alignItems: 'stretch',
    alignContent: 'space-between',
    // marginTop: 10,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  chckText: {
    marginTop: -9,
    // color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: '35%',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'stretch',
    // marginTop: 10,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  textBarang: {
    // color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: '10%',
    // marginTop: 10,
    // marginHorizontal: 20,
    // marginVertical: 15,
    // flex: 1,
  },
  // header: {
  //   backgroundColor: '#4c9b8d',
  //   alignItems: 'center',
  // },
  // headerBg1: {
  //   paddingHorizontal: 15,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   height: 50,
  //   resizeMode: 'center',
  // },
  headerView: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  viewLogin: {
    width: '95%',
    height: '90%',
    backgroundColor: '#f0f1f5',
    elevation: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: '20%',
    // flex: 1,
  },
  // viewLogin1: {
  //   width: '95%',
  //   backgroundColor: '#cccccc',
  //   elevation: 10,
  //   borderRadius: 10,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   paddingTop: '5%',
  //   flex: 2,
  // },

  categoryContainer: {
    width: '30%',
    height: 50,
    // backgroundColor: '#cccccc',
    // paddingTop: '5%',
    marginLeft: 10,
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  textContainer: {
    width: '30%',
    height: 90,
    backgroundColor: '#cccccc',
    paddingTop: '5%',
    margin: 10,
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  listContainer: {
    width: '94%',
    minHeight: 60,
    backgroundColor: '#bbe1fd',
    paddingTop: '5%',
    // margin: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  modalContainer: {
    // width: '94%',
    // minHeight: 60,
    // backgroundColor: '#bbe1fd',
    // paddingTop: '5%',
    // // margin: 10,
    // marginLeft: 10,
    // marginTop: 5,
    // borderRadius: 10,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // // paddingLeft: 10,
    // // paddingBottom: 10,
    alignContent: 'center',
    // width: '95%',
    // height: '90%',
    backgroundColor: '#f0f1f5',
    elevation: 10,
    borderRadius: 10,
  },
  bottomContainer: {
    width: '94%',
    height: 50,
    backgroundColor: '#bbe1fd',
    paddingTop: '5%',
    // margin: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  barangContainer: {
    width: '90%',
    height: 120,
    backgroundColor: '#cccccc',
    paddingTop: '5%',
    margin: 10,
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  viewBarang: {
    flexDirection: 'row',
  },
  category: {
    // alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    flexDirection: 'row',
    // paddingHorizontal: 15,
    flexWrap: 'wrap',
    // paddingLeft: 20,
  },
  text: {
    paddingLeft: 10,
    // paddingBottom: 10,
  },
  viewTopU: {
    // justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingTop: '2.5%',
    // width: '100%',
    // height: '100%',
  },
  // viewTopD: {
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   flex: 1,
  //   paddingTop: '2.5%',
  //   // width: '100%',
  //   // height: '100%',
  // },
  headerIcon: {
    // width: 25,
    // height: 25,
    // // tintColor: 'white',
    width: 35,
    height: 35,
    // marginRight: '40%',
    // tintColor: '#3c48ae',
  },
  headerIconRight: {
    // width: 25,
    // height: 25,
    // // tintColor: 'white',
    width: 35,
    height: 35,
    marginLeft: '40%',
    tintColor: '#3c48ae',
  },
  dashIcon: {
    // width: 25,
    // height: 25,
    tintColor: '#3c48ae',
    width: 35,
    height: 35,
    marginRight: '3%',
    // tintColor: 'white',
  },
  categoryIcon: {
    // width: 25,
    // height: 25,
    tintColor: '#3c48ae',
    width: 35,
    height: 35,
    marginLeft: '10%',
    paddingBottom: '10%',
    // tintColor: 'white',
  },
  listIcon: {
    // width: 25,
    // height: 25,
    tintColor: '#3c48ae',
    width: 35,
    height: 35,
    marginLeft: '10%',
    paddingBottom: '10%',
    // tintColor: 'white',
  },
  barangIcon: {
    // backgroundColor: 'blue',
    tintColor: 'white',
    width: 60,
    height: 60,
    marginLeft: '10%',
    paddingBottom: '10%',
    // tintColor: 'white',
  },
  // headerIcon1: {
  //   width: 25,
  //   height: 25,
  //   tintColor: 'white',
  // },
  modal: {
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#f7021a',
    // padding: 100,

    width: '94%',
    minHeight: 60,
    backgroundColor: '#bbe1fd',
    paddingTop: '5%',
    // margin: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100,
  },
});
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, {Component} from 'react';
// import {
//   Modal,
//   Text,
//   TouchableHighlight,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Touchable,
// } from 'react-native';
// class ModalExample extends Component {
//   state = {
//     modalVisible: false,
//   };
//   toggleModal(visible) {
//     this.setState({modalVisible: visible});
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Modal
//           animationType={'slide'}
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             console.log('Modal has been closed.');
//           }}>
//           <View style={styles.modal}>
//             <Text style={styles.text}>Modal is open!</Text>

//             <TouchableOpacity
//               onPress={() => {
//                 this.toggleModal(!this.state.modalVisible);
//               }}>
//               <Text style={styles.text}>Close Modal</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>

//         <TouchableOpacity
//           onPress={() => {
//             this.toggleModal(true);
//           }}>
//           <Text style={styles.text}>Open Modal</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default ModalExample;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#ede3f2',
//     padding: 100,
//   },
//   modal: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#f7021a',
//     padding: 100,
//   },
//   text: {
//     color: '#3f2949',
//     marginTop: 10,
//   },
// });
