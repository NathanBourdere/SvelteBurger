<script>
	import Pagination from "./Pagination.svelte";

	export let data;
	export let error;
	let burgers = data.props.data;
	let trimmedBurgers = [];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
<p></p>	
	<h1> Burger Svelte </h1>
		{#if error}
        <!-- Handle the case where there is an error fetching data -->
        <p>Error: {error}</p>
    {:else}
        <!-- Render data from API -->
        <ul>
            {#each trimmedBurgers as burger}
                <li>{burger.name}</li>
				<img src='https://foodish-api.com/images/burger/burger{burger.id+1}.jpg'  alt={burger.name}>
            {/each}
        </ul>
    {/if}

	<h2>
		commandez maintenant
	</h2>
	<Pagination rows={burgers} perPage={9} bind:trimmedRows={trimmedBurgers} />	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	li {
		list-style-type: none;
	}
	img {
		width: 25vw;
		height: 25vh;
	}
</style>
