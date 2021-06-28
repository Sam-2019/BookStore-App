import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveValueFor(value) {
  const token = await value.token;
  const userID = await value.user;
  const jsonValue = JSON.stringify({ token: token, user: userID });
  await SecureStore.setItemAsync("@storageKey", jsonValue);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

//Storing string value
export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    // saving error
  }
};

//Storing object value
export const storeObjectData = async (value) => {
  try {
    const token = value.token;
    const userID = value.user;
    const jsonValue = JSON.stringify({ token: token, user: userID });
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

//Reading string value
export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

//Reading object value
export const getObjectData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
