import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

function Conversations() {
  return <Text>Conversations</Text>
}

function Calls() {
  return <Text>Calls</Text>
}

function Status() {
  return <Text>Status</Text>
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
      name: 'George',
      message: 'Hello',
      photo: 1
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <FlatList
          data={users}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => <Conversations />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});