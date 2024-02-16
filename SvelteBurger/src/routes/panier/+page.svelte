<script>

    import Burger from  './burger.svelte'

    export let data;
	export let error;
	let burgers = data.props.data.slice(0, 3);

    function commander() {
        alert('commande effectuée');
    }
</script>

<svelte:head>
	<title>Commande</title>
	<meta name="commande"/>
</svelte:head>

<section>
    <h1> Panier </h1>

    <div class="text-column">
        <h3>mon panier :</h3>
        {#if error}
            <!-- Handle the case where there is an error fetching data -->
            <p>Error: {error}</p>
        {:else}
            <!-- Render data from API -->
            <ul>
                {#each burgers as burger}
                    <Burger nom={burger.name} image='https://foodish-api.com/images/burger/burger{burger.id+1}.jpg'/><br>
                {/each}
            </ul>
        {/if}
    </div>

    <div class="text-column">
        <button on:click={commander}>commandez maintenant</button>
    </div>

</section>