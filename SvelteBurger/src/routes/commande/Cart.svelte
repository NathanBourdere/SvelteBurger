<script>
  import Burger from "../Burger.svelte";

  export let cartItems = []; // Array to store cart items
  let isDragging = false; // Track if burger is being dragged

  // Function to handle drag start
  function handleDragStart(event, burger) {
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData
    event.dataTransfer.setData('json', burger); // Set data to transfer
    console.log(event.dataTransfer)
    isDragging = true;
  }

  function handleDragEnd(event){
    console.log(event.dataTransfer.getData("json"))
  }

  function submitData(event){
    alert("merci d'avoir commandé!");
    cartItems = []
  }

</script>
<div id="cart"
  class="cart"
  role="region" aria-label="Cart"
>
  <h2>Cart</h2>
  <ul>
    {#each cartItems as burger}
    <Burger {burger} on:dragstart={(e) => handleDragStart(e,burger)} on:dragend={handleDragEnd}/>
    {/each}
  </ul>
</div>
{#if cartItems.length > 0}
        <input type="submit" on:click={submitData} value="Commander">
    {/if}

<style>
  .cart {
    background-color: #f0f0f0; /* Couleur de fond */
    border-radius: 8px; /* Coins arrondis */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre */
    height: 100%;
    max-height: 50vh;
    overflow: auto;
  }
  input {
    margin-top: 1em;
    margin-left: 8em;
  }
</style>
