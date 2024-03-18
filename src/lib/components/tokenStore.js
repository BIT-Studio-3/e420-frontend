
  import{writable} from "svelte/store";

  export const token = writable("empty");
  export const wrongToken = writable(false);
  export const username = writable("empty");

  async function checkAgent() {
    try{
      const tokenInput = document.getElementById("token-input");
      let tokenValue = tokenInput.value;//stores token input data in tokenValue
      const usernameInput = document.getElementById("username-input");
      let username = usernameInput.value;//stores userName 

      const options = {
        headers: {//includes headers of fetched data
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      };

      const res = await fetch(
        "https://api.spacetraders.io/v2/my/agent",
        options
      );
      const json = await res.json();
      console.log(json);
      try{//handles errors
        if (json.error.code > 0) {
          wrongToken.set(true);
        }
      }catch(error){
          console.log(error);
      }
      try{
        if(json.data && json.data.symbol === username.toUpperCase()){
          token.set(tokenValue);
          usernameValue.set(username);
          wrongToken.set(false);
        }else{
          wrongToken.set(true);
        }
      }catch (error){
          console.log(error);
        }
    }catch (error){
          console.log(error);
        }

  }
  export {checkAgent};

  
  export function setToken(value){ //this is a function that sets the value of the token
    token.set(value);
  }
  export function getToken(value){
    return token;
  }
 
