<script>
  import { onMount } from "svelte";
  const key =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQ09OUkFDVFMiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDMtMTAiLCJpYXQiOjE3MTAyOTYzMjAsInN1YiI6ImFnZW50LXRva2VuIn0.kOaa33UcrHS-fcnjwjo4xZZ4yJZOT6bzc-6swdPAv9e5XGyPhl8eGLJtu2dDPkZ2P5m63lGdjQ_InxNGs42Y2w-gBA_i_c1Wog4Xp_lipvGq53FN8IxTz-UR-1JaWl72ocDfc3B56PIKzU0lhBIPVkUf1ZINy1yDIwfqi74JkfuYLw8S_bcdpHnCZi3-jBQWzQO2Nd-ybFN2qXCE4-EBweYJCTCU17Loa-AY1ybIlrFx1kwyIA_uimblX6XfRI2jdkeyEmZdVtvgV1TlYu_bNqw2reG64tVM6qjGw6t4Uwex_cPfcj20v9njiPZOTS8C68A5A7aLwinbj79stGd4mA";
  let contracts = [];
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  onMount(async () => {
      let res = await fetch(
        "https://api.spacetraders.io/v2/my/contracts",
        options
      );
      let json = await res.json();
      let temp = json.data;
      contracts = temp;
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
            <h1 class="type">{contract.type}</h1>
            <p>Contractor: {contract.factionSymbol}</p>
            <p>Cargo Needed: {contract.terms.deliver.tradeSymbol}</p>
            <p>Destination: {contract.terms.deliver.destinationSymbol}</p>
            <p>
              Reward: {contract.terms.payment.onAccepted} + {contract.terms
                .payment.onFulfilled}
            </p>
            <p>Expires: {contract.deadlineToAccept}</p>
          </div>
        </div>
      {/each}
    </div>
    <span class="border_btm"></span>
  </div>
</div>

<style>
</style>
