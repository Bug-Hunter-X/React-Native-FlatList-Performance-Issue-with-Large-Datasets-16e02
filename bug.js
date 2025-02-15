```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
```