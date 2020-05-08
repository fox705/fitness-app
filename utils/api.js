import { AsyncStorage } from "react-native";
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

export function fetchCalendarResults () {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function submitEntry({ entry, key }) {
  AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({ [key]: entry })
  );
}

export function removeEntry(key) {
  AsyncStorage.removeItem(key);
}
