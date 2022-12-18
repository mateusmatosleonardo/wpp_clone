import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Person1 from './src/assets/images/Person1.png';
import Person2 from './src/assets/images/Person2.png';

function Conversations({ ...item }: User) {
  return (
    <View style={styles.wrapperConversations}>
      <Image source={item.photo} style={styles.avatar} resizeMode='center' />
      <View style={styles.wrapperInformations}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  )
}

function Calls({ ...item }: User) {
  return (
    <View style={styles.wrapperConversations}>
      <Image source={item.photo} style={styles.avatar} resizeMode='center' />
      <View style={styles.wrapperInformations}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.message}</Text>
      </View>
    </View>
  )
}

function Status({ ...item }: User) {
  return (
    <View style={styles.wrapperConversations}>
      <Image source={item.photo} style={styles.avatar} resizeMode='center' />
      <View style={styles.wrapperInformations}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.message}</Text>
      </View>
    </View>
  )
}

interface User {
  id: number;
  name: string;
  message: string;
  photo: any;
}

export default function App() {

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Carlos',
      message: 'Hello',
      photo: Person1
    },
    {
      id: 2,
      name: 'Maria Clara',
      message: 'Hello asdnas oidnasodi ndonasd',
      photo: Person2
    },
    {
      id: 3,
      name: 'Mateus',
      message: 'Hello',
      photo: Person1
    },
    {
      id: 4,
      name: 'Carlos',
      message: 'Hello',
      photo: Person1
    },
    {
      id: 5,
      name: 'Maria Clara',
      message: 'Hello',
      photo: Person2
    },
    {
      id: 6,
      name: 'Mateus',
      message: 'Hello',
      photo: Person1
    },
    {
      id: 7,
      name: 'Carlos',
      message: 'Hello',
      photo: Person1
    },
    {
      id: 8,
      name: 'Maria Clara',
      message: 'Hello',
      photo: Person2
    },
    {
      id: 9,
      name: 'Mateus',
      message: 'Hello',
      photo: Person1
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* <ScrollView
        style={styles.screen}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      > */}
      <FlatList
        data={users}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => <Conversations {...item} />}
      />
      {/* <FlatList
          style={styles.screen}
          data={users}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => <Status {...item} />}
        />
        <FlatList
          style={styles.screen}
          data={users}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => <Calls {...item} />}
        /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  wrapperConversations: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  wrapperInformations: {
    marginLeft: 14,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fafafa',
  },
  message: {
    color: '#fafafa',
  },
  screen: {
    width: '100%',
    backgroundColor: 'salmon'
  }
});