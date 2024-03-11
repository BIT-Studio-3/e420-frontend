  import{writable} from "svelte/store";

  export const token = writable("empty");
  
  export function setToken(value){ //this is a function that sets the value of the token
    token.set(value);
  }
  export function getToken(value){
    return token;
  }

  //This is how you can use it in other parts of the project
  //import { token, setToken, getToken } from './tokenStore.js';
  //setToken("your_token_here");
  //console.log(getToken());
