<script>
	import burger_king from '$lib/images/Burger_King_logo.svg.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="burger_king_logo">
			<picture>
				<img src={burger_king} alt="burgerKing" />
			</picture>
		</span>

		Bienvenu dans votre nouvelle<br />application Burger King
	</h1>

	<h2>
		Votre application pour commander des Burger
	</h2>

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

	.burger_king_logo {
		display: block;
		position: relative;
		margin-left: auto;
    	margin-right: auto;
		margin-bottom: 2em;
		width: 25%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.burger_king_logo img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
