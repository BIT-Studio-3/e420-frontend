<style>
    /* all of these variables can be used by:
    - @import url('static/css/+page.svelte'); */

    /* The variables can then be used by including this in your styling:
    body {
    color: var(--color);
    font-family: var(--font);
    } */

.box {
  border-radius: var(--border-radius);
}
:root {
    --color: #3BBA9C;
    --font: 'Orbitron', sans-serif;
    --border-radius: 25px;
}

body {
    color: var(--color);
    font-family: var(--font);
}

.box {
  border-radius: var(--border-radius);
}
</style> 