import { writable, readable, derived } from "svelte/store";

export const token = writable("empty");
export const wrongToken = writable(false);
export const username = writable("empty");

async function checkAgent() {
  try {
    const tokenInput = document.getElementById("token-input");
    let tokenValue = tokenInput.value; //stores token input data in tokenValue
    const usernameInput = document.getElementById("username-input");
    let usernameValue = usernameInput.value; //stores userName

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
    try {
      if (json.error) {
        wrongToken.set(true);
      }

      if (json.data && json.data.symbol === username.toUpperCase()) {
        token.set(tokenValue);
        usernameValue.set(username);
        wrongToken.set(false);
        console.log(token);
      } else {
        wrongToken.set(true);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

function getToken() {
  return token;
}

export { checkAgent, getToken };
export default token;
