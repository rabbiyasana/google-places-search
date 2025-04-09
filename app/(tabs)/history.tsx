import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Card from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname } from "expo-router";
import { DefaultKeys } from "@/constants/Keys";
import { LocalStorageSetValue } from "@/interfaces";

export default async () => {
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
 
});
