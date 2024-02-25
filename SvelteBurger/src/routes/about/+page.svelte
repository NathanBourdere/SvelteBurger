<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>SvelteBurger</h1>

	<h2>Groupe (3A2)</h2>
	<ul>
		<li>Nathan Bourdere-Andreou</li>
		<li>Enzo Bras</li>
		<li>Constantin Loszach</li>
	</ul>

	<h2>Installation</h2>
	<p>Cloner le dépôt Github :</p>
	<pre><code>git clone https://github.com/NathanBourdere/SvelteBurger.git</code></pre>
	<p>Se rendre dans le dossier du projet.</p>
	<pre><code>cd SvelteBurger/SvelteBurger</code></pre>
	<p>Installer les dépendances :</p>
	<pre><code>npm i</code></pre>
	<p>Lancer le serveur :</p>
	<pre><code>npm run dev</code></pre>

	<h2>Résultats</h2>
	<p>Au cours de ce projet, nous avons pu implémenter diverses fonctionnalités :</p>
	<ul>
		<li>Liste des burgers à partir d'une API</li>
		<li>Pagination sur la page d'accueil et de commande</li>
		<li>
			Un système de filtre pour grouper les burgers par type de viande (boeuf, poulet ou veggie)
		</li>
		<li>
			Système de glisser-déposer pour passer commande (on peut glisser-déposer les burgers de la
			section centrale vers le panier et inversement pour les supprimer de celui-ci).
		</li>
		<li>
			Passer commande (Cliquer sur le bouton enverra une notification sur le navigateur de
			l'utilisateur et supprimera sa liste de commande)
		</li>
	</ul>
</div>

<style>
	h1 {
		color: #007bff;
	}

	h2 {
		color: #28a745;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-bottom: 5px;
	}

	pre {
		background-color: #f8f9fa;
		padding: 10px;
		border-radius: 5px;
		overflow-x: auto;
	}

	code {
		color: #e83e8c;
	}

	p {
		margin-bottom: 10px;
	}

	h2 {
		margin-top: 20px;
	}

	ul {
		margin-top: 10px;
	}

	li {
		color: #17a2b8;
	}
</style>
