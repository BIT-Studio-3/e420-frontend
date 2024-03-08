<script>
    import {onMount} from "svelte";
  function nameFunction() {
    // Redirecting to a different page when the button is clicked
    window.location.href = "/";
  }

  const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiVFlUWSIsInZlcnNpb24iOiJ2Mi4xLjUiLCJyZXNldF9kYXRlIjoiMjAyNC0wMi0yNSIsImlhdCI6MTcwOTg1Njk1Miwic3ViIjoiYWdlbnQtdG9rZW4ifQ.mmZyspamLGsyl53-BOeu2b0xbMkGFbsEnud7rCFo-IbHXXLWQbSkgu9hNOImKEppsHNUrSmHseXY6TFWLUK4-jiqGGHvFV0RB4nq3CZYQUd4uaCLN8RblKM6bVt9FyWFUTVP7KMqfGi9R0-e_o7VLEmMWeFIxx7Fq1l4-umxJiPHZnhj3vCHqFRtYgdz1dca538Nj781Odnzrfwr6gid-J-TYuEub81CQrcwvq-IWK_48B5S6X0z52QI-IOszA7vA3vtEUMX5V4FKM6f80V2jl5ghWoE3O-F5v1S1m4AKiAPnZfj_c1oxVNzl4GtRx-3xX3_ATrii4gMa6LEfL9C4g'
  },
};

onMount(async () => {
    try {
    fetch('https://api.spacetraders.io/v2/my/agent', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch agent data');
    }
    return response.json();
  })
  .then(response => {
    const token = response.token;
    console.log(response.token)
    localStorage.setItem('spaceTradersToken', token);
    console.log('Token stored:', token);
  })

} catch (error) {
      console.error(error);
    }

});

</script>

<0
<button on:click={nameFunction}>Log In</button>


<style>
  label {
    color: white;
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: white;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;

    /*displays a pointer cursor only when hovering over the 
  button helps to show the user that they are in fact on the interactive button*/
    cursor: pointer;
    width: 100%;
  }

  /* hover effect for button */
  button:hover {
    opacity: 0.8;
  }
</style>
