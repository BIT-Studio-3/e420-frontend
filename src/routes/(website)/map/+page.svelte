<script>
//This will be he java script code for the fetching of the location
import { onMount } from 'svelte';
    
    let locationInfo = []; 
    const BearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS0lTU01FTU9SRSIsInZlcnNpb24iOiJ2Mi4yLjAiLCJyZXNldF9kYXRlIjoiMjAyNC0wMy0xMCIsImlhdCI6MTcxMDEyMDMwNSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.h1pTisiPEzbnQ2WuYRunlvA_pj7AbposfZALOKEIgJ15u_F-J3v3woGCsHMXEFOpnViFS6cJMQ5LfEan0cY8teybxXZq7yHGUKDp4ILvpbEB8ccB1Au8cv3IbLjnHt6-P5iwNqOg5IiHiSK1dFZ68JxYa8rl63pSWxuwPejigmt_ywIIrQNtOUaijpkICqapvEEgFr4RM_wAdN7lDR3ThhPoTM15dPLbv9VmYrIZHgKWuwwqvqtdK4Ng98-EcjZsYYWLvJF_ygUH7CZTL7-1xgUMJ-jCq9Val8WesS4T1t4nLyQtaW6UgCB0IxlS3jcXFdaRzWx1pXCCnI5dqz5paA';
    const locationSymbol = 'X1-NT89-A1'; // OE is the symbol for Earth 
    
    onMount(async () => {
        try {
            console.log('Fetching location information...');
            const response = await fetch('https://api.spacetraders.io/v2/systems/X1-NT89/waypoints/X1-NT89-A1', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BearerToken}`
                }
            });

                console.log('Location information received successfully.');
                locationInfo = await response.json();

        } catch (error) {
            console.error('Error:', error);
        }
    });
    console.log(locationInfo)
</script>

<body>
    <div id="location-info">
        <h1>Loading...</h1>
        <p>Fetching location information...</p>
        <div id="location-details">
            <!-- <p>Type: {locationInfo.data.type}</p> -->
        </div> <!-- Placeholder for location details -->
    </div>
</body>


<style>
     
</style>

