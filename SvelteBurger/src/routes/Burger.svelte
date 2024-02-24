<!-- Burger.svelte -->
<script>
    export let burger;

    async function loadImage(imageNumber) {
        try {
            // Import the image dynamically
            const image = await import(`$lib/images/burger${imageNumber}.jpg`);
            return image.default;
        } catch (error) {
            //console.log(`Error loading image burger${imageNumber}.jpg:`, error);
            //throw error;
        }
    }

    function handleDragStart(event) {
        // Récupérer les données à transférer (le burger)
        event.dataTransfer.setData('json', JSON.stringify(burger));

    }
</script>

<div class="burger-card" draggable="true" on:dragstart={handleDragStart} role="region">
    {#if burger}
        {#await loadImage(burger.id) then image}
            <img src={image} alt={burger.name}>
        {:catch error}
            <p>Error loading image: {error.message}</p>
        {/await}
        <div class="overlay">
            <p class="burger-name">{burger.name}</p>
        </div>
    {/if}
</div>

<style>
    /* Styles for the burger card */
    .burger-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width : 13vw;
        height : 13vh;
        padding: 1rem;
        margin: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden; /* Ensure overlay does not exceed image boundaries */
    }

    img {
        width: 100%; /* Image takes up 100% of the container's width */
        height: 100%; /* Maintain aspect ratio */
        border-radius: 8px;
        margin-bottom: 1rem;
        transition: filter 0.3s;
    }

    /* Style for the overlay */
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        opacity: 0; /* Hidden by default */
        transition: opacity 0.3s;
    }

    /* Style for burger name */
    .burger-name {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        pointer-events: none;
    }

    /* Hover effect */
    .burger-card:hover .overlay {
        opacity: 1; /* Show overlay on hover */
    }
</style>
