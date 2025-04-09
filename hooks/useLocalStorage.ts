import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageSetValue } from "@/interfaces";
import { useAddUniqueId } from './useAddUniqueId';
import async from '../app/(tabs)/history';



const useLocalStorage = (key: string) => {
  const saveToStorage = async (value: LocalStorageSetValue, key: string) => {

    try {
      const previousStorage: any = await AsyncStorage.getItem(key);
      if (previousStorage) {
        const newStorage = [...JSON.parse(previousStorage), { ...useAddUniqueId('id', value) }];
        await AsyncStorage.setItem(key, JSON.stringify(newStorage));
      } else {
        await AsyncStorage.setItem(key, JSON.stringify([useAddUniqueId('id', value)]));
      }
    } catch (error) {
      console.error("Error saving to AsyncStorage", error);
    }
  };

  const getStorage = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error("Error saving to AsyncStorage", error);
    }
  };

  const updateStorage = async (value: LocalStorageSetValue, key: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to AsyncStorage", error);
    }
  };

  const resetStorage = async () => AsyncStorage.clear()

  return { getStorage, saveToStorage, resetStorage, updateStorage };
};

export default useLocalStorage;
