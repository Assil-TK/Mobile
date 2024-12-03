import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import products from '../data/products';

const ProductScreen = ({ onSelectProduct }) => {
  return (
    <View style={styles.container}>
      {/* Display list of products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.productContainer} onPress={() => onSelectProduct(item)}>
            <Image source={{ uri: item.image }} style={[styles.image, item.fixStyle]}  />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray', },
});

export default ProductScreen;
