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
  const { getStorage, updateStorage } = useLocalStorage(DefaultKeys.localStorageKey);
  const [list, setList] = useState<LocalStorageSetValue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedList = await getStorage(DefaultKeys.localStorageKey);
      setList(storedList != undefined ? storedList : []);
    };

    fetchData(); 
    // fetchLocalStorage();
  }, [usePathname()]);

  const fetchLocalStorage = async () => {
    const list = await getStorage(DefaultKeys.localStorageKey);
    setList(list != undefined ? list : []);
  };

  const onDelete =  async (id: number) => {
      const localStorage = await getStorage(DefaultKeys.localStorageKey);
      const newStorage = localStorage.filter((item:LocalStorageSetValue) => item.id !== id);
      await updateStorage(newStorage, DefaultKeys.localStorageKey)
      await fetchLocalStorage()
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      {list.map((item: any, index: number) => {
        return <Card key={index} location={item} onDelete={onDelete}/>;
      })}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
