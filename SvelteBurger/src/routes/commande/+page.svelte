<script lang="ts">
  import { onMount } from "svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import Paper, { Content } from "@smui/paper";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Pagination from "../Pagination.svelte";
  import Burger from "../Burger.svelte";
  import Cart from "./Cart.svelte";

  let active = "Boeuf";
  let cartItems = [];
  export let data; 
  export let error; 
  let burgers = [];
  let boeuf_burgers = [];
  let veggie_burgers = [];
  let poulet_burgers = [];
  let poulet_trimmedBurgers = ["loading..."];
  let veggie_trimmedBurgers = ["loading..."];
  let boeuf_trimmedBurgers = ["loading..."];
      if (data && data.props && data.props.data) {
          burgers = data.props.data;
          boeuf_burgers = data.props.data.slice(0,9);
          console.log(boeuf_burgers)
          poulet_burgers = data.props.data.slice(10,19);
          veggie_burgers = data.props.data.slice(20,29);
      }

  function handleDragStart(event, burger) {
      event.dataTransfer.setData("json", JSON.stringify(burger));
  }

  function handleDragEnd(event) {
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault(); 
    let burger = event.dataTransfer.getData('json'); 
    let rect = document.getElementById("cart").getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    if (offsetX < 0 || offsetY < 0 || offsetX >= rect.width || offsetY >= rect.height) {
        cartItems = cartItems.filter(item => item.id !== JSON.parse(burger).id);
}
else {
        cartItems = [...cartItems, JSON.parse(burger)];
    }
}


</script>

<div class="container" role="region" on:dragover={handleDragOver} on:drop={handleDrop}>
<div class="main-content">
  <!-- Tab bar -->
  <TabBar tabs={["Boeuf", "Poulet", "Veggie"]} let:tab bind:active>
      <Tab {tab}>
          <Label>{tab}</Label>
      </Tab>
  </TabBar>

  <!-- Content based on active tab -->
  {#if active === "Boeuf"}
      <Paper variant="unelevated">
          <Content>
              {#if error}
                  <p>Error: {error}</p>
              {:else}
                  <LayoutGrid>
                      {#each boeuf_trimmedBurgers as burger}
                          <Cell>
                              <Burger {burger} on:dragstart={(e) => handleDragStart(e, burger)} on:dragend={handleDragEnd} />
                          </Cell>
                      {/each}
                  </LayoutGrid>
              {/if}
              <Pagination rows={boeuf_burgers} perPage={6} bind:trimmedRows={boeuf_trimmedBurgers} />    
          </Content>
      </Paper>
  {:else if active === "Poulet"}
      <Paper variant="unelevated">
          <Content>
              {#if error}
                  <p>Error: {error}</p>
              {:else}
                  <LayoutGrid>
                      {#each poulet_trimmedBurgers as burger}
                          <Cell>
                              <Burger burger={burger} on:dragstart={(e) => handleDragStart(e, burger)} on:dragend={handleDragEnd} />
                          </Cell>
                      {/each}
                  </LayoutGrid>
              {/if}
              <Pagination rows={poulet_burgers} perPage={6} bind:trimmedRows={poulet_trimmedBurgers} />    
          </Content>
      </Paper>
  {:else if active === "Veggie"}
      <Paper variant="unelevated">
          <Content>
              {#if error}
                  <p>Error: {error}</p>
              {:else}
                  <LayoutGrid>
                      {#each veggie_trimmedBurgers as burger}
                          <Cell>
                              <Burger {burger} on:dragstart={(e) => handleDragStart(e, burger)} on:dragend={handleDragEnd} />
                          </Cell>
                      {/each}
                  </LayoutGrid>
              {/if}
              <Pagination rows={veggie_burgers} perPage={6} bind:trimmedRows={veggie_trimmedBurgers} />    
          </Content>
      </Paper>
  {/if}
</div>
<aside style="border:1px solid padding:5em;">
    <Cart bind:cartItems={cartItems} />
</aside>
</div>


<style>
    .container {
        display: flex;
        flex-direction: row;
        width: 100vw;
    }

    .main-content {
        flex-basis: auto;
    }

    aside {
        margin-left: 10em;
        width: 20%;
        padding: 1em; /* Ajout de rembourrage */
        background-color: #f0f0f0; /* Couleur de fond */
        border: 1px solid #ccc; /* Bordure */
        border-radius: 8px; /* Coins arrondis */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre */
    }
  </style>