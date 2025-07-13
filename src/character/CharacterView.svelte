<script lang="ts">
  import CharacterCardView from "./CharacterCardView.svelte";
  import CharacterCardNew from "./CharacterCardNew.svelte";
  import CharacterCardEdit from "./CharacterCardEdit.svelte";
  import { saveCharacter, loadCharacter, saveExampleChar } from "./character";

  let cardMode = "view";

  function switchView(mode: string) {
    cardMode = mode;
  }
</script>

<div class="card">
  {#if cardMode == "edit"}
    <button on:click={() => saveExampleChar()}>GEN EXAMPLE</button>
    <button on:click={() => switchView("view")}>Save</button>
  {:else if cardMode == "new"}
    <button on:click={() => switchView("view")}>Cancel</button>
  {:else}
    <button on:click={() => switchView("edit")}>Edit</button>
  {/if}
  <button on:click={() => switchView("new")}>New</button>
  <!--
  <div>
    {#if cardMode == "edit"}
      <button on:click={() => switchView("view")}>Edit</button>
    {:else}
      <button on:click={() => saveExampleChar()}>Generate</button>
      <button on:click={() => switchView("edit")}>View</button>
    {/if}
    <button on:click={() => switchView("new")}>New</button>
    <button>Save</button>
  </div> -->
  <div>
    {#if cardMode == "view"}
      <div><CharacterCardView /></div>
    {/if}
    {#if cardMode == "edit"}
      <div><CharacterCardEdit /></div>
    {/if}
    {#if cardMode == "new"}
      <div><CharacterCardNew /></div>
    {/if}
  </div>
</div>

<style>
  .card {
    background-color: var(--rich-black);
    color: var(--maize);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow:
      0 0 1rem,
      rgba(0, 0, 0, 0.5);
    width: 100%;
    min-width: 600px;
    max-width: 600px;
    height: min(80vh, 800px);
    margin: 2rem auto;
    font-family: monospace;
    overflow: scroll;
  }
</style>
