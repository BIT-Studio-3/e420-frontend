import { writable } from "svelte/store";

export const tokenStore = writable("empty");
export const wrongToken = writable(false);
export const usernameValue = writable("empty");
let userDetails = [];

export async function checkAgent() {
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
      usernameValue.set(username);
      wrongToken.set(false);
      userDetails = {
        data: json.data,
        token: tokenValue,
      };
    } else {
      wrongToken.set(true);
    }
    // Uncomment below for testing
    // console.log(json.data.symbol);
    // console.log(userDetails.token)
    // console.log(userDetails)
  } catch (error) {
    console.log(error);
  }
}

export { userDetails }
