import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Text>Welcome to the Golf Cart Dashboard</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard' as never)} />
    </View>
  );
};

export default HomeScreen;
