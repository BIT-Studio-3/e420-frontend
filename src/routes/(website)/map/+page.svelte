<script>
//This will be he java script code for the fetching of the location
import { onMount } from 'svelte';
    
    let locationInfo = {};

    const BearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiS1RHVFRJIiwidmVyc2lvbiI6InYyLjEuNSIsInJlc2V0X2RhdGUiOiIyMDI0LTAyLTI1IiwiaWF0IjoxNzA5ODU2OTY5LCJzdWIiOiJhZ2VudC10b2tlbiJ9.lCNa9BGVnVgx-_Sbpf9-g0PqUt1fsvxbFEXF3NzVmc4wXYntqXwp9h3bjovUY23ld7Hmyz_i76X-NVYxbJCJJG7QGX2YLDnD2QwMdYMNalB0Cm136TcHrv__6lztKxEOrLpqdRaIAyX5zvMzCKFAXCQTY2cYeJwJLPY_0S6zgxcmgAbTLkGIoQ4IK_bhkkoZ84DgAcwBn4pKQWI4USgO7Erua6oIZZEKnAgI54v9bOlbQIPXHDABlI4dN_hPFezlFdMD7vXXThL4bfj-cvcjtGlPHMYr_lBZROMQroKtRjkqwKZnwaa6c13lplQ9RONwr3TsM5hMy8mGNsNZmtrKvA'; // Replace 'YourBearerToken' with your actual token
    const locationSymbol = 'PLANET-1'; // Replace 'YourLocationSymbol' with the symbol of the location you want to get info for

    onMount(async () => {
        try {
            console.log('Fetching location information...');
            const response = await fetch(`https://api.spacetraders.io/locations/${locationSymbol}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BearerToken}`
                }
            });

            if (response.ok) {
                console.log('Location information received successfully.');
                locationInfo = await response.json();
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
</script>

<body>
    <div id="location-info">
        <h1>Loading...</h1>
        <p>Fetching location information...</p>
    </div>
</body>


<style>
     
</style>

