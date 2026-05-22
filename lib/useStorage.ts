import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useStorage = () => {
  const getItem = useCallback(async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting ${key}:`, error);
      return null;
    }
  }, []);

  const setItem = useCallback(async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting ${key}:`, error);
      return false;
    }
  }, []);

  const removeItem = useCallback(async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
      return false;
    }
  }, []);

  const multiGet = useCallback(async (keys: string[]) => {
    try {
      const values = await AsyncStorage.multiGet(keys);
      const result: Record<string, any> = {};
      values.forEach(([key, value]) => {
        result[key] = value ? JSON.parse(value) : null;
      });
      return result;
    } catch (error) {
      console.error("Error in multiGet:", error);
      return {};
    }
  }, []);

  return { getItem, setItem, removeItem, multiGet };
};
