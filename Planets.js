import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styles from "./styles";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((resp) => resp.json())
      .then(({ results }) => {
        setPlanets(results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planets</Text>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
