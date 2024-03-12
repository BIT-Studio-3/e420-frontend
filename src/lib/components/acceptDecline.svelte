const acceptedContracts = [];

const acceptContract = (contractId) => {
  // Find the contract by ID and add it to the acceptedContracts array
  const acceptedContract = contracts.find(contract => contract.id === contractId);

  if (acceptedContract) {
    acceptedContracts.push(acceptedContract);
    console.log(`Contract "${acceptedContract.title}" accepted.`);
  } else {
    console.error(`Contract with ID ${contractId} not found.`);
  }
};

const declineContract = (contractId) => {
  // unsure what to do when declining contract, - reputation with that faction maybe?
  console.log(`Contract with ID ${contractId} declined.`);
};

<!-- this is more of a placeholder concept for the accepting and declining of contracts. accepted contracts are added to the 
'acceptedContract' array. the acceptContract function takes a contract ID, finds the corresponding in the contracts array
(im unsure if we will even need arrays to store contracts as we are fetching them, but can be changed). -->