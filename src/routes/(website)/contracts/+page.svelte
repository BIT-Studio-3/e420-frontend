<script>
  import { onMount } from "svelte";
  import Buttons from "$lib/components/buttons.svelte";

  let contractArr = null;
  let temp = [];
  let isAccepted = false;

  // const token = "";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  };

  onMount(async () => {
    try {
      // Fetch contracts using options sent
      const res = await fetch(
        "https://error420.onrender.com/api/contracts/7",
        options
      );
      // store json data
      let json = await res.json();
      temp.push(json.data);
      contractArr = temp;
      console.log(temp);
    } catch (err) {
      console.error(err);
    }
  });

  

  // console.log(token);

  // Function to accept a contract
  // async function acceptContract(contractId, isAccepted) {
  //   try {
  //     // Check if contract is still waiting to be accepted - accept if it hasn't already been accepted
  //     if (isAccepted === false) {
  //       const response = await fetch(
  //         `https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             // Authorization: `Bearer ${token}`,
  //           },
  //         },
  //       );

  //       let json = await response.json();
  //       console.log(json);

  //       if (json.data) {
  //         var successMessage = document.createElement("p"); // creates and declares a variable to store the created paragraph element
  //         successMessage.textContent = "Accepted Contract Successfully";
  //         document.body.appendChild(successMessage); //displays the message on the page
  //         // Display any contract accepted success message
  //       }
  //     } else {
  //       var errorMessage = document.createElement("p");
  //       errorMessage.textContent = "Contract already accepted";
  //       document.body.appendChild(errorMessage);
  //       // Displays error already accepted message
  //     }
  //   } catch (error) {
  //     var errorMessage = document.createElement("p");
  //     errorMessage.textContent = "An error has occured: " + error.message;
  //     document.body.appendChild(errorMessage);
  //     // Displays error message
  //   }
  // }



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
                <p>User ID: {contract.userId}</p>
                <p>Destination: {contract.destinationSymbol}</p>
                <p>
                  Deadline to Accept: {contract.deadlineToAccept}
                </p>
                <p>
                  Accepted: {contract.accepted ? 'Yes' : 'No'}
                </p>
                <p>Fulfilled: {contract.fulfilled ? 'Yes' : 'No'}</p>
                <!-- Displaying contract terms -->
                {#each contract.terms as term}
                <div class="term">
                  <p>Deadline: {term.deadline}</p>
                  <p>Payment: {term.payment}</p>
                  <p>Cargo: {term.cargo}</p>
                </div>
                {/each}
                <div class="line bottom" />
                <!-- Use a button to trigger the acceptContract function -->
                {#if isAccepted == false}
                  <button on:click={() => (isAccepted = true)}
                    >Accept Contract</button
                  >
                {/if}
                {#if isAccepted == true}
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

  .contract-box {
    width: 600px;
    background-color: rgb(
      87,
      86,
      86
    ); /* Changes the background color of the box */
    border-radius: 15px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 0px auto;
    font-family: "Orbitron", sans-serif;
    color: #3bba9c;
    padding: 20px;
  }

  .contracts-row {
    display: flex;
    margin-top: 100px;
  }

  button {
    background-color: white;
    color: black;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 30%;
    border-radius: 25px;
    font-family: "Orbitron", sans-serif;
    color: #000000;
  }

  button:hover {
    opacity: 0.8;
    background-color: #3bba9c;
  }

  .contract-content {
    margin: 20px;
  }
</style>
