<script>
  import { onMount } from "svelte";
  import Buttons from "$lib/components/buttons.svelte";

  let contractArr = null;
  let temp = [];

  const token = ""
  
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };


  console.log(token);

  // Function to accept a contract
  async function acceptContract(contractId, isAccepted) {
    try {
      // Check if contract is still waiting to be accepted - accept if it hasn't already been accepted
      if (isAccepted === false) {
        const response = await fetch(
          `https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        let json = await response.json();
        console.log(json);

        if (json.data) {
          var successMessage = document.createElement('p');           // creates and declares a variable to store the created paragraph element
          successMessage.textContent = "Accepted Contract Successfully";
          document.body.appendChild(successMessage);                //displays the message on the page
          // Display any contract accepted success message
        }
      } else {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "Contract already accepted";
        document.body.appendChild(errorMessage);
        // Displays error already accepted message
      }
    } catch (error) {
      var errorMessage = document.createElement('p');
      errorMessage.textContent = "An error has occured: " + error.message;
      document.body.appendChild(errorMessage);
      // Displays error message
    }
  }

  onMount(async () => {
    try {
      // Fetch contracts using options sent
      const res = await fetch(
        "https://api.spacetraders.io/v2/my/contracts",
        options
        );
        // store json data
        let json = await res.json();
        temp.push(json.data);
        contractArr = temp;
      // Uncomment below to see console output
      // console.log(temp);
    } catch (err) {
      console.error(err);
    }
  });
  
  // console.log(contractArr);
</script>

<div class="contracts-container">
  <div class="inner-wrap">
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
                <!-- Use a button to trigger the acceptContract function -->
                {#if contract.accepted == false}
                  <button
                    on:click={() =>
                      acceptContract(contract.id, contract.accepted)}
                    >Accept Contract</button
                  >
                {/if}
                {#if contract.accepted == true}
                  <p>Contract Accepted</p>
                {/if}
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
