<script lang="ts">
  type ViewTpe = {
    view: string;
  };

  let { changeView }: { changeView: (view: string) => void } = $props();
</script>

<div class="navbar">
  <button onclick={() => changeView("list")}>List</button>
  <button onclick={() => changeView("character")}>Character</button>
  <button onclick={() => changeView("options")}>Options</button>
</div>

<style>
  .navbar {
    background: linear-gradient(0deg, var(--paynes-gray), var(--cadets-gray));
    display: flex;
    justify-content: left;
    height: 3rem;
    width: 100vw;
  }

  button {
    border: none;
    color: var(--maize);
    background: linear-gradient(0deg, var(--paynes-gary), var(--cadets-gray));
    display: flex;
    height: 3rem;
  }
</style>
