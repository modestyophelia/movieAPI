import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((result) => setData(result.movies))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) => (
            <Text style={styles.movies}>
              {item.id}, {item.title}, {item.releaseYear},
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  movies: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    color: "white",
    backgroundColor: "lightblue",
  },
});
