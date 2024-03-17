  import{writable} from "svelte/store";

  export let token = writable("empty");
  
  export function setToken(value){ //this is a function that sets the value of the token
    token.set(value);
  }

 
