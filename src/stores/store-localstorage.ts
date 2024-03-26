import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store"

function writableLocal<T>(key: string, defaultValue?: T): Writable<T> {
  const store = writable<T>(defaultValue)

  if (browser && localStorage) {
    store.set(JSON.parse(localStorage.getItem(key)))
  }

  store.subscribe(
    (newValue: T) => {
      if (browser && localStorage) {
        try {
          if (newValue !== undefined) {
            localStorage.setItem(key, JSON.stringify(newValue))
          } else {
            localStorage.removeItem(key)
          }
        } catch (e) {
          console.warn(e)
        }
      }
    }
  )
  return store
}

export { writableLocal }