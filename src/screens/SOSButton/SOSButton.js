import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Linking,
} from 'react-native';
import Share from 'react-native-share';
export default class SOSButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'SOS',
    };
  }

  sendMessageWhatsApp = async (phoneNumber, phoneMessage) => {
    // Using 91 for India
    // You can change 91 with your country code
    /*let url =
      'whatsapp://send?text=' + phoneMessage + '&phone=+58' + phoneNumber;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Whatsapp application not found');
    }

    /* Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });*/
    try {
      const shareResponse = await Share.shareSingle(shareOptions);
    } catch (error) {
      Alert.alert('Error enviando el mensaje');
    }
  };

  ButtonClickCheckFunction = () => {
    Alert.alert('Button Clicked');
    let phoneMessage = 'Tu contacto esta en peligro de violencia de Genero';
    let phones = ['4127375627', '4140681688', '4141641248'];
    this.sendMessageWhatsApp(phones[0], phoneMessage);
    this.sendMessageWhatsApp(phones[1], phoneMessage);
    this.sendMessageWhatsApp(phones[2], phoneMessage);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>SOS</Text>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={this.ButtonClickCheckFunction}>
          <Text style={styles.TextStyle}> SOS </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

const shareOptions = {
  title: 'Peligro de Violencia de Genero',
  message: 'La senore Elsa esta siendo victima de violencia de genero',
  url: 'some share url',
  social: Share.Social.WHATSAPP,
  whatsAppNumber: '584140681688',
};
