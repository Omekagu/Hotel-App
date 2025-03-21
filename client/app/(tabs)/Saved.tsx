import { View, Text } from 'react-native';
import React from 'react';
import PressButton from '@/component/PressButton';

export default function Saved() {
  return (
    <View style={{ alignItems: 'center', top: 300 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Save what you like for later{' '}
      </Text>

      <Text
        style={{
          fontSize: 15,
          // textTransform: 'capitalize',
          marginBottom: 20,
          textAlign: 'center',
          width:'80%'
        }}
      >
        Create lists of your favourite properties to help you share,compare and
        book.
      </Text>
      <PressButton text={'start your search'} />
      <Text
        style={{
          fontSize: 15,
          textTransform: 'capitalize',
          marginVertical: 20,
        }}
      >
        start creating
      </Text>
    </View>
  );
}
