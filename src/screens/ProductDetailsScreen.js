import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';

const ProductDetailsScreen = ({ product, onGoBack }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Horizontal image carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        {/* Product details */}
        <View style={styles.detailsContainer}>
          <Image source={{ uri: product.image }} style={[styles.image, product.fixStyle]}  />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Go Back Button */}
      <Pressable style={[styles.button, styles.goBackButton]} onPress={onGoBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>

      {/* Add to Cart Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
    alignSelf: 'center',
    
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    margin: 10,
    
    
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
    margin: 15,
    
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '300',
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 3,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  goBackButton: {
    bottom: 80,
    backgroundColor: 'gray',
  },
});

export default ProductDetailsScreen;
