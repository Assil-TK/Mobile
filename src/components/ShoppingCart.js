import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import CartListItem from '../components/CartListItem';  // Import the CartListItem component
import cart from '../data/cart';  // Import cart data

const ShoppingCart = () => {
  return (
    <View style={styles.cartContainer}>
      {/* Cart Item List */}
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={(item) => item.product.id.toString()}  // Ensure each item has a unique key
      />
      
      {/* Cart Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>410.00 US$</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>10.00 US$</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.totalText}>420.00 US$</Text>
        </View>
        
        {/* Checkout Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 10,
  },
  summaryContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ShoppingCart;
