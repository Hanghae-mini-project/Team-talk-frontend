import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BoardHeaderComponent from '../../components/board/BoardHeaderComponent';
import { Container, View, Button, Icon } from 'native-base';
import Swiper from 'react-native-swiper-hooks';

const diviceWidth = Dimensions.get('window').width;
const diviceHeight = Dimensions.get('window').height;

export default function BoardPage({ navigation, route }) {
  const data = route.params;
  const title = data.title;
  let listData = [
    {
      title: '1',
    },
    {
      title: '2',
    },
    {
      title: '3',
    },
  ];
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Container>
      <StatusBar style='light' />
      <BoardHeaderComponent navigation={navigation} title={title} />
      <View>
        <Swiper
          height={diviceHeight}
          showPagination={'#CCFF66'}
          autoplay={false}
          loop={false}
          showPagination={true}
          direction={'row'}
          style={styles.pinCard}
          showPagination={false}>
          {listData.map((item, idx) => {
            return (
              <ScrollView
                style={{
                  width: diviceWidth,
                }}
                key={idx}>
                <Text>{item.title}</Text>
              </ScrollView>
            );
          })}
        </Swiper>

        <Button
          style={styles.addBtn}
          onPress={() => {
            console.log('Add Pin');
          }}>
          <Icon name='add' style={{ color: 'white', fontSize: 40, right: 4 }} />
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  pinCard: {
    padding: 10,
  },
  addBtn: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#F2181C',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    top: diviceHeight * 0.75,
    right: 50,
  },
});
