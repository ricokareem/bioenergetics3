import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image
} from 'react-native';
// import {
//   Card,
//   CardItem,
//   Thumbnail,
//   Button,
//   Icon,
//   Left,
//   Body,
//   Right } from 'native-base';

export default class ReferenceGuideScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://drive-my.com/media/com_easysocial/photos/2319/15508/2017-porsche-718-1_thumbnail.jpg'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://files1.porsche.com/filestore/image/multimedia/none/jdp-2016-982-718-c7s-modelimage-sideshot/model/0e6ece82-946a-11e6-9f1b-0019999cd470;sH/porsche-model.png'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc9829'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
