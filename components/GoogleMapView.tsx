import * as React from "react";
import { StyleSheet } from "react-native";
import { Marker, AnimatedRegion, Animated } from "react-native-maps";

interface GoogleMapViewProps {
  latitude: number;
  longitude: number;
}

const GoogleMapView = ({ longitude, latitude }: GoogleMapViewProps) => {
  return <Animated
    style={{ flex: 1 }}
    region={
      new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0018,
        longitudeDelta: 0.0018,
      })
    }
  >
    <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
  </Animated>}

export default GoogleMapView;

const styles = StyleSheet.create({
  container: {},
});
