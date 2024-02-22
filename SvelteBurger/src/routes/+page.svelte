<script>
    import Pagination from "./Pagination.svelte";
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Burger from "./Burger.svelte";

    export let data;
    export let error;
    
    let burgers = [];
    let trimmedBurgers = ["loading..."];

    // Check if data is not null before accessing its props
    if (data && data.props && data.props.data) {
        burgers = data.props.data;
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <p></p>    
    <h1> Bienvenue sur Burger Svelte
        <br>
        <br>
        Regardez ce que nous vous proposons
    </h1>
    {#if error}
        <p>Error: {error}</p>
    {:else}
        <LayoutGrid>
            {#each trimmedBurgers as burger}
                <Cell cols="4">
                    <Burger {burger} />
                </Cell>
            {/each}
        </LayoutGrid>
    {/if}
    <Pagination rows={burgers} perPage={9} bind:trimmedRows={trimmedBurgers} />    
</section>