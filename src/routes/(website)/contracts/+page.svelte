<script>
  import { onMount } from "svelte";
  const BASE_URL = "";
  const key =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiRkhGR0hGR0giLCJ2ZXJzaW9uIjoidjIuMS41IiwicmVzZXRfZGF0ZSI6IjIwMjQtMDItMjUiLCJpYXQiOjE3MDk4NTE1MDksInN1YiI6ImFnZW50LXRva2VuIn0.nMj2_Gbe034B5QMC7orFWAelFRmYzloHH5XnBzwScoiU6fnZDh9buwe2Xi96HDkdBBBXB9LSTnATqTkYAsYbYqDq5QROE-D21DK2BrswEg1tnNCxGMnceqJleio6O5Jv442VytBVvr8TEng_Y0Z4ztjAwNzOq-U9-FwAwNSF_mMW_3HXfDbz5fd-Pbt2oE37e14KTFgBMzHX2lC1Dj8n0HpgJ8X04-y3qUBV1KP_LqcllDTJPo-8xqxrb18LD4d9R5YDhVxFFPIbh_yCrEP1lz718idzEuLpMRrxYW46rDCfnPeKFE8Q-4_k7tMvAxn2JyK_gEXD1FA9WDqFOlDRxg";
  let contracts = [];
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  onMount(async () => {
    let res = await fetch(
      "https://api.spacetraders.io/v2/my/contracts?limit=3",
      options
    );
    let json = await res.json();
    let temp = json.data;
    contracts = { temp };
  });
</script>

<!-- contracts page wrap -->
<div class="page-container">
    <!-- box with border corners wrapping contracts -->
  <div class="inner-wrap">
    <!-- wrap around all contracts in a row -->
    <div class="contracts-row">
      {#each contracts as contract}
        <div class="contract-box">
            <div class="contract-content">
                <h1>{contract.type}</h1>
                <p>Contractor: {contract.factionSymbol}</p>
                <p>Cargo Needed: {contract.terms.deliver.tradeSymbol}</p>
                <p>Destination: {contract.terms.deliver.destinationSymbol}</p>
                <p>Reward: {contract.terms.payment.onAccepted} + {contract.terms.payment.onFulfilled}</p>
                <p>Expires: {contract.deadlineToAccept}</p>
            </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
</style>
