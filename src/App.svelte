<script lang="ts">
  import "./assets/colors.css";
  import "./assets/global.css";
  import CharacterView from "./character/CharacterView.svelte";
  import CharacterList from "./character/CharacterList.svelte";
  import OptionsView from "./OptionsView.svelte";
  import NavBar from "./lib/NavBar.svelte";

  let currentView = "list";

  function changeView(view: string) {
    currentView = view;
  }
</script>

<div class="app-container">
  <NavBar {changeView} />

  <main>
    {#if currentView === "list"}<CharacterList />{/if}
    {#if currentView === "character"}<CharacterView />{/if}
    {#if currentView === "options"}<OptionsView />{/if}
  </main>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  main {
    height: 100%;
    background: linear-gradient(0deg, var(--rich-black), var(--paynes-gray));
    font-family: monospace;
    color: var(--cam-blue);
  }
</style>
