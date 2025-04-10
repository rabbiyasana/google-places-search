import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { usePathname } from "expo-router";
import { GooglePlacesAutoCompleteParamsForMapView, GooglePlacesAutoCompleteResultDataProps, GooglePlacesAutoCompleteResultDetailsProps, LocalStorageSetValue } from "@/interfaces";
import Constants from 'expo-constants';

interface GooglePlacesAutoCompleteSearchProps {
  onClick: (value:GooglePlacesAutoCompleteParamsForMapView) => void;
  text: string | undefined;
  queryParams:GooglePlacesAutoCompleteParamsForMapView | null
}

const GooglePlacesAutoCompleteSearch = ({
  text,
  queryParams,
  onClick,
}: GooglePlacesAutoCompleteSearchProps) => {
  const [inputValue, setInputValue] = useState<any>("");
  const { EXPO_GOOGLE_PLACE_API } = Constants.expoConfig?.extra as {
    EXPO_GOOGLE_PLACE_API: string;
  };
  
  useEffect(() => {
    if (queryParams != null) setInputValue(queryParams.text);
  }, [usePathname(),text]);

  const onSelectLocation = (data: GooglePlacesAutoCompleteResultDataProps, details: GooglePlacesAutoCompleteResultDetailsProps | null) => {
    onClick({
      text: data.description,
      longitude: details?.geometry.location.lng || 0,
      latitude: details?.geometry.location.lat || 0,
    });
    setInputValue(data.description);
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          fields: "geometry",
        }}
        query={{
          key: EXPO_GOOGLE_PLACE_API,
          language: "en",
        }}
        textInputProps={{
          value: inputValue,
          onChange: (e) => setInputValue(e),
        }}
        onPress={(data, details) => onSelectLocation(data, details)}
        onFail={(error) => console.error(error)}
      />
    </View>
  );
};

export default GooglePlacesAutoCompleteSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 200,
    paddingTop: 20,
  },
});
