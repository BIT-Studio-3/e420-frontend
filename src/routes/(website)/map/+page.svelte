<script>
//This will be he java script code for the fetching of the location
import { onMount } from 'svelte';
    
    let locationInfo = null;

    const BearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS0lTU01FTU9SRSIsInZlcnNpb24iOiJ2Mi4yLjAiLCJyZXNldF9kYXRlIjoiMjAyNC0wMy0xMCIsImlhdCI6MTcxMDEyMDMwNSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.h1pTisiPEzbnQ2WuYRunlvA_pj7AbposfZALOKEIgJ15u_F-J3v3woGCsHMXEFOpnViFS6cJMQ5LfEan0cY8teybxXZq7yHGUKDp4ILvpbEB8ccB1Au8cv3IbLjnHt6-P5iwNqOg5IiHiSK1dFZ68JxYa8rl63pSWxuwPejigmt_ywIIrQNtOUaijpkICqapvEEgFr4RM_wAdN7lDR3ThhPoTM15dPLbv9VmYrIZHgKWuwwqvqtdK4Ng98-EcjZsYYWLvJF_ygUH7CZTL7-1xgUMJ-jCq9Val8WesS4T1t4nLyQtaW6UgCB0IxlS3jcXFdaRzWx1pXCCnI5dqz5paA';
    const locationSymbol = 'X1-NT89-A1'; // headquaters symbol
    
    onMount(async () => {
        try {
            console.log('Fetching location information...');
            const response = await fetch('https://api.spacetraders.io/v2/systems/X1-NT89/waypoints/X1-NT89-A1', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BearerToken}`
                }
            });

            const responseData = await response.json();
            locationInfo = responseData; // Assign fetched data to the 'data' variable
            console.log('Location information received successfully:');

        } catch (error) {
            console.error('Error:', error);
        }
         console.log(locationInfo)
    });

</script>

<body>
    <div id="location-info">
      <!-- this needs to be replaced with an actual loading animation -->
      <h1>Loading...</h1>
      <p>Fetching location information...</p>
    
<!-- The {#if locationInfo} directive is a conditional rendering block (in Svelte) that checks 
    if the locationInfo variable is truthy (i.e., not null, undefined, or an empty string). 
    If the condition is true, Svelte will render the content inside the block. 
    If the condition is false, Svelte will skip over the block and not render its contents-->
    {#if locationInfo} 
        <div id="location-details">
          <p>Type: {locationInfo.data.type}</p>
          <p>Symbol: {locationInfo.data.symbol}</p>
          <p>X: {locationInfo.data.x}</p>
          <p>Y: {locationInfo.data.y}</p>
          <!-- <p>System Symbol: {locationInfo.systemSymbol}</p>
          <p>Orbitals: {locationInfo.orbitals.map(orbital => orbital.symbol).join(', ')}</p> -->
        </div>
      {/if}
    </div>  
  </body>


<style>

</style>

