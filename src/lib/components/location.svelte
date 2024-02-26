<script>
    import { onMount } from "svelte";
    let fetchedData = null;

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.spacetraders.io/v2/systems/X1-YH15/waypoints/",

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSkFLRUpPSE4iLCJ2ZXJzaW9uIjoidjIuMS4xIiwicmVzZXRfZGF0ZSI6IjIwMjMtMTEtMDQiLCJpYXQiOjE2OTkzMjU3NTIsInN1YiI6ImFnZW50LXRva2VuIn0.hllGmi2sODf1_OamJSSi4KHNUj2QNbjUxTggCKnCw-5USO7L7AcAGEfoainD9A4TIlwBtT0GuhpBMX1tLhaV0LT56G4afypi9UYR6-UGVMl3FhNqDYMm3TXNCP_3nr6VrGDk19d2woVu75C3Ih3TXpBNWkeBNyeZRmZlVB54p5WrUBFsUtAX5tb5fecOSk4x01wb3tstjj9pa2psLexiDbfOPd3ZOmZPwqIfGcV50WR_i6dYSWgMYtjhKxKCJuz9LZswRKJiA7LY6BaFZeYDerN5mqyeqiA9uny0nsbo4-8hfNCXIqkoqVpPQ0LMF2ULtJLmqhPnUR_n8JUaBiyCxQ",
            },
        }

        );
        fetchedData = await response.json();
      } catch (error) {
        console.error(error);
      }
    }
    onMount(() => {
      fetchData();
    });
</script>

<!-- this code is checking if theres a variable called fetchedData available. If it exists then it displays the heading and shows the content of the fetchedData. If there is no data it displays a paragraph saying the data is loading. -->
{#if fetchedData}   
    <h1>Fetched Data</h1>
    <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
{:else}
    <p>Loading data...</p>
{/if}
