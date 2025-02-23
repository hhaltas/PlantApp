import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getOnboardingItem(paramName: any) {
  const value = await AsyncStorage.getItem(paramName);
  return value ? JSON.parse(value) : null;
}

export async function setOnboardingItem(paramName: any, value: any) {
  return AsyncStorage.setItem(paramName, JSON.stringify(value));
}

export async function removeOnboardingItem(paramName: any) {
  return AsyncStorage.removeItem(paramName);
}
