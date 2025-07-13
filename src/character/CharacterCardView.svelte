<script lang="ts">
  import { currentCharacter } from "../lib/stores";
  import CharWeaponsComp from "./charWeaponsComp.svelte";
  import CharAttributesComp from "./CharacterAttributesComp.svelte";
  import CharSkillsComp from "./charSkillsComp.svelte";
  let imageUrl: string = "/images/default-portrait.png";
</script>

{#if $currentCharacter}
  <div class="container character-sheet">
    <div class="portrait-container">
      <h3>{$currentCharacter.name} {$currentCharacter.lastname}</h3>
      <img src={imageUrl} alt="Character portrait" class="portrait" />
    </div>
    <div class="info">
      <p class="keyword">Keyword: {$currentCharacter.keyword}</p>

      <!-- ATTRIBUTES TABLE -->
      <div>
        <CharAttributesComp />
      </div>

      <div>
        <CharSkillsComp />
      </div>
    </div>
    <div></div>
    <div class="full-span">
      <CharWeaponsComp />
    </div>
  </div>
  <div>Example Text</div>
{:else}
  <p>No Character is Loaded</p>
{/if}

<style>
  .container * {
    border: 1px solid hotpink;
  }

  .character-sheet {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--rich-black);
    color: var(--maize);
    border-radius: 1rem;
    font-family: monospace;
  }

  .portrait-container {
    grid-row: 1 / span 1;
  }

  .portrait {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .full-span {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  .stats,
  .weapons {
    background-color: var(--paynes-gray);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .stats ul,
  .weapons ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .keyword {
    justify-items: left;
    font-style: italic;
    color: var(--mint-cream);
  }
</style>
