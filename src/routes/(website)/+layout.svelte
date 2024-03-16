<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Background from "$lib/components/Background.svelte";
</script>

<Header />
<!-- outer container to wrap page contents neatly and put content on top of background -->
<div class="page-container">
    <Background>
        <!-- container to wrap inner contents neatly onto the page -->
        <div class="inner-content">
            <slot />
        </div>
    </Background>
</div>
<Footer />

<style>
    .page-container {
        height: 100%;
        width: 100%;
        display: block;
        justify-content: center;
        /* fit-content ?? */
    }

    .inner-content {
        /* height: 100%; */
        padding: 20px 50px;
    }
</style>
