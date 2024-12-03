import React, { useState } from 'react';
import { View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle product selection
  const handleSelectProduct = (product) => {
    setSelectedProduct(product); // Set the selected product for details screen
  };

  // Function to go back to the product list
  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {selectedProduct ? (
        // Show ProductDetailsScreen when a product is selected
        <ProductDetailsScreen product={selectedProduct} onGoBack={handleGoBack} />
      ) : (
        // Show ProductScreen by default
        <ProductScreen onSelectProduct={handleSelectProduct} />
      )}
    </View>
  );
}

