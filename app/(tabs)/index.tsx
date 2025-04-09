import { StyleSheet } from "react-native";
import React, {  useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import GooglePlacesAutoCompleteSearch from "@/components/GooglePlacesAutocomplete";
import GoogleMapView from "@/components/GoogleMapView";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useLocalStorage from "@/hooks/useLocalStorage";
import { GooglePlacesAutoCompleteParamsForMapView, LocalStorageSetValue } from "@/interfaces";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { DefaultKeys } from "@/constants/Keys";

export default function HomeScreen() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.themeContainer}>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  themeContainer: { flex: 1 }
});
