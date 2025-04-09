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
  const { saveToStorage } = useLocalStorage(DefaultKeys.localStorageKey);
  let params: any = useLocalSearchParams();
  const [queryParams, setQueryParams]
    = useState<GooglePlacesAutoCompleteParamsForMapView | null>(null);
  const [coordinates, setCoordinates] = useState<any>({
    longitude: 0,
    latitude: 0,
  });

  const onSelectLocation =  (value: GooglePlacesAutoCompleteParamsForMapView) => {
    setQueryParams(null)
    setCoordinates({
      longitude: value.longitude,
      latitude: value.latitude,
    });
    saveToStorage(value, DefaultKeys.localStorageKey);
  };

  useEffect(()=>{
    params.query != undefined && setQueryParams(JSON.parse(params.query))
  },[usePathname()])
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.themeContainer}>
          <GooglePlacesAutoCompleteSearch
          queryParams={queryParams}
            text={queryParams ? queryParams?.text : ""}
            onClick={onSelectLocation}
          />
          <GoogleMapView
            longitude={
              queryParams
                ? queryParams?.longitude
                : coordinates.longitude
            }
            latitude={
              queryParams
                ? queryParams?.latitude
                : coordinates.latitude
            }
          />
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  themeContainer: { flex: 1 }
});
