import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
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
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: 70,
    width: 200,
    height: 200,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});
