<script>
  import { onMount } from "svelte";
  let fetchedData = null;
  let shipLocation = [];

  async function fetchShipSymbols() {
    response = await fetch("", {
      //key
    });
  }
  onMount(async () => {
    try {
      const response = await fetch(
        ""
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "",
          },
        }
      );
      fetchedData = await response.json();
    } catch (error) {
      console.error(error);
    }
  });
</script>

<!-- this code is checking if theres a variable called fetchedData available. If it exists then it displays the heading and shows the content of the fetchedData. If there is no data it displays a paragraph saying the data is loading. -->
{#if fetchedData}
  <h1>Fetched Data</h1>
  <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
{:else}
  <p>Loading data...</p>
{/if}
