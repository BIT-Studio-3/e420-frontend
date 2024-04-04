import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

/** Takes a key of type string and value of type T (generic data type - like var)
* and returns 'store' - the writable variable holding the token that can be updated/changed at any time.
* This function is then exported to be used in the local storage file for accessibility and improved modularity
*/
function writableLocal<T>(key: string, defaultValue?: T): Writable<T> {
  const store = writable<T>(defaultValue) // Create writable store with either default value or undefined if no default given
  
// Checks if code is running in a browser and if local storage is available
  if (browser && localStorage) {
    // Get value (the value of token i.e. that long string) associated with the key (variable name i.e. token) from local storage, parse it to JSON, and set it as store's value
    store.set(JSON.parse(localStorage.getItem(key)))
  }
  
// Subscribe changes to store - whenever store value changes, the following function occurs (reference: https://svelte.dev/docs/svelte-store)
  store.subscribe(
    (newValue: T) => {
      // Does the same thing as the if statement on line 9
      if (browser && localStorage) {
        try {
          // Check that new value from user is not undefined
          if (newValue !== undefined) {
            // Update the value of local storage with the new value of store provided by the user (browser) which is converted to string form first
            localStorage.setItem(key, JSON.stringify(newValue))
            
            // Else if new value is undefined or was cleared
          } else {
            // Remove the item from local storage associated with the key
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
