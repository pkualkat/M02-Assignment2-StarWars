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