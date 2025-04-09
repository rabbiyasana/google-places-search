import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IconSymbol } from "./IconSymbol";
import { useRouter } from "expo-router";
import { CardProps } from "@/interfaces";
import { DefaultKeys } from "@/constants/Keys";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const Card = ({ location, onDelete }: CardProps) => {

  const route = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText lightColor="black" type="defaultSemiBold" style={styles.title}>{location.text}</ThemedText>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            route.push({
              pathname: DefaultKeys.route.index as any,
              params: { query: JSON.stringify(location) },
            });
          }}
          activeOpacity={0.5}
        >
          <IconSymbol size={20} name="location.fill" color={Colors.light.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {onDelete(location?.id)}}
          activeOpacity={0.5}
        >
          <IconSymbol size={20} name="trash" color={Colors.light.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  titleContainer: { alignSelf: "center", padding: 5, width: "80%" },
  title: { fontSize: 10 },
  iconContainer: { flexDirection:'row', justifyContent:'space-between', padding: 5, width: "20%", alignSelf: "center" }
});
