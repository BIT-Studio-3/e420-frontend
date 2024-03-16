<script>
  import { onMount } from "svelte";
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSERGSERIREhEIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTAzLTEwIiwiaWF0IjoxNzEwNTQ2NjY3LCJzdWIiOiJhZ2VudC10b2tlbiJ9.MWCSlX-j2LLHcX3bBnB4EvR8Yp-uQstO5ehSyFM7yqCtSpN86HZeTZB42hwa1GD63_TsFm35K5iJJ0L3KnFigC_R9mnXL-1-wH7c4-z5AYSVJv7a5KdH6TNmXPKNQ9FX_0c6VCfnjWKJI5iiKlNsqckATfvZ0v9A0c2Az0ORHpc52ktqbs_Kj1PzWWDh-etKQacy2JgoCAuCU6LcNdtlxYWGRo35Xsmpl9kjOEddj22-VRQGlRB2wrEKNNeokEypmmJ4ZSMJ6Oigu1bl_xesiqsy8pMpnhn9aJD9yxwS7E500P_N3pxubT3INQLZXDKNJVkz0rN85g897BJvoV3AsQ";
  let contracts = [];
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  onMount(async () => {
      const res = await fetch(
        "https://api.spacetraders.io/v2/my/contracts",
        options
      );
      let json = await res.json();
      let temp = json.data;
      contracts = temp;
      // uncomment below to see console output
      // console.log(contracts);
  });
</script>

<!-- contracts page wrap -->
<div class="contracts-container">
  <!-- box with border corners wrapping contracts -->
  <div class="inner-wrap">
    <!-- wrap around all contracts in a row -->
    <div class="contracts-row">
      {#each contracts as contract}
        <div class="contract-box">
          <div class="contract-content">
            <h1 class="type">{contract.type}</h1>
            <div class="line top"/>
            <p>Contractor: {contract.factionSymbol}</p>
            <p>Cargo Needed: {contract.terms.deliver[0].tradeSymbol}</p>
            <p>Destination: {contract.terms.deliver[0].destinationSymbol}</p>
            <p>
              Reward: {contract.terms.payment.onAccepted} + {contract.terms
                .payment.onFulfilled}
            </p>
            <p>Expires: {contract.deadlineToAccept}</p>
            <div class="line bottom"/>
          </div>
          <div class="border-bottom-container">
            <div class="border-box left"/>
            <div class="border-box right"/>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  * {
    color:#98e6ff;
  }

  .line {
    border-top: 1px dashed #98e6ff;
    margin: 20px 5px 10px;
  }

  /* .top {
    margin-bottom: 20px;
  } */

  /* .border-box {
    border-left: 1px solid #98e6ff;
    border-bottom: 1px solid #98e6ff;
    height: 20px;
    width: 20px;
  } */

  .contract-box {
    width: 300px;
    text-align: center;
    margin: 0px 40px;
  }

  /* .contract-content {
  } */
</style>
