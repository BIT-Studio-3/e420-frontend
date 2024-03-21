import { writable } from "svelte/store";

export const tokenStore = writable("empty");
export let token = "";
export const wrongToken = writable(false);
export const usernameValue = writable("empty");

async function checkAgent() {
  try {
    const tokenInput = document.getElementById("token-input");
    let tokenValue = tokenInput.value; //stores token input data in tokenValue
    const usernameInput = document.getElementById("username-input");
    let username = usernameInput.value; //stores userName

    const options = {
      headers: {
        //includes headers of fetched data
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenValue}`,
      },
    };

    const res = await fetch("https://api.spacetraders.io/v2/my/agent", options);
    const json = await res.json();
    console.log(json);
    
    if (json.error) {
      wrongToken.set(true);
    }
    
    if (json.data && json.data.symbol === username.toUpperCase()) {
      tokenStore.set(tokenValue);
      tokenStore.subscribe((tokenValue) => {
        token = tokenValue;
    });
      usernameValue.set(username);
      wrongToken.set(false);
      
    } else {
      wrongToken.set(true);
    }
    console.log(token);
    console.log(json.data.symbol);
  } catch (error) {
    console.log(error);
  }
}

export { checkAgent };
