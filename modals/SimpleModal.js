import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Modal, StyleSheet, } from 'react-native'

export default class SimpleModal extends PureComponent {

  state = {
    modalVisible: false,
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={this.setModalVisible}
        >
          <Text>
            open modal
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainerStyle}>


            <View style={styles.overlay}>
              
              <View style={styles.modalCardStyle}>
                
                {/* Title */}
                <View style={styles.titleContainerStyle}>
                  <Text style={styles.titleStyle} >Title</Text>
                </View>

                {/* Content */}
                <View style={styles.contentContainerStyle}>
                  <Text>
                    Contents goes here...
                  </Text>
                </View>

                {/* Footer */}
                <View style={styles.btnContainerStyle}>
                  
                  <TouchableOpacity
                    style={[ styles.btnStyle, styles.cancelBtnStyle ]}
                    onPress={this.setModalVisible}
                    
                  >
                    <Text>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[ styles.btnStyle, styles.confirmBtnStyle ]}
                  >
                    <Text>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

SimpleModal.propTypes = {

};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    height: '100%',
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: 20,
    paddingTop: '40%',
  },
  modalCardStyle: {
    backgroundColor: 'white',
    height: 300,
    borderRadius: 5,
    justifyContent: 'space-between'
  },

  titleContainerStyle: {
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  titleStyle: {
    fontSize: 22,
  },

  contentContainerStyle: {
    flex: 1,
    padding: 10
  },

  btnContainerStyle: {
    flexDirection: 'row',
  },
  btnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  confirmBtnStyle: {
    borderRightWidth: 0,
  },
  cancelBtnStyle: {
    borderRightColor: '#CCCCCC',
    borderRightWidth: 1,
  },
})