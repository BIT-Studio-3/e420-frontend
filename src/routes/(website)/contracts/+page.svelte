<script>
  import { onMount } from "svelte";
  import { token } from "$lib/components/tokenStore.js";
  import Buttons from "$lib/components/buttons.svelte";
  let contractArr = [];
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  onMount(async () => {
    try {
      // fetch contracts using options sent
      const res = await fetch(
        "https://api.spacetraders.io/v2/my/contracts",
        options
      );
      // store json data
      let json = await res.json();
      let temp = [];
      temp.push(json.data);
      contractArr = temp;
      // uncomment below to see console output
      // console.log(contracts);
    } catch (err) {
      console.error(`Error ${res.error.code}: Invalid token`);
    }
    console.log(contractArr);
  });
</script>

<!-- contracts page wrap -->
<div class="contracts-container">
  <!-- box with border corners wrapping contracts -->
  <div class="inner-wrap">
    <!-- wrap around all contracts in a row -->
    <div class="contracts-row">
      {#if contractArr}
        {#each contractArr as contracts}
          {#each contracts as contract}
            <div class="contract-box">
              <div class="contract-content">
                <h1 class="type">{contract.type}</h1>
                <div class="line top" />
                <p>Contractor: {contract.factionSymbol}</p>
                <p>Cargo Needed: {contract.terms.deliver[0].tradeSymbol}</p>
                <p>
                  Destination: {contract.terms.deliver[0].destinationSymbol}
                </p>
                <p>
                  Reward: {contract.terms.payment.onAccepted} + {contract.terms
                    .payment.onFulfilled}
                </p>
                <p>Expires: {contract.deadlineToAccept}</p>
                <div class="line bottom" />
                <Buttons/>
              </div>
              <div class="border-bottom-container">
                <div class="border-box left" />
                <div class="border-box right" />
              </div>
            </div>
          {/each}
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
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
