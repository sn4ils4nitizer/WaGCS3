<script lang="ts">
  import { currentCharacter } from "../lib/stores";
  const attrKeys = [
    "strength",
    "toughness",
    "agility",
    "initiative",
    "willpower",
    "intellect",
    "fellowship",
  ];

 let editMode = false;

 function toggleMode(){
   editMode = !editMode;
 }
</script>

{#if $currentCharacter}
  <div>
    <table class="attribute-table">
      <thead>
        <tr><th colspan="8">
          <div class="attributes-header">
            <label class="edit-toggle">
              <button
                class:active-toggle={editMode}
                class="toggle-btn"
                on:click={() => toggleMode()}
              ></button>
            </label> Attributes:
          </div></th
        ></tr>
        <tr>
          <th></th>
          <th>S</th>
          <th>T</th>
          <th>A</th>
          <th>I</th>
          <th>Wil</th>
          <th>Int</th>
          <th>Fel</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Rating:</th>
          {#each attrKeys as key}
            {#if !editMode}
            <td>{$currentCharacter.attributes[key]}</td>
            {:else}
            <td><input type="number" bind:value={$currentCharacter.attributes[key]}/></td>
            {/if}
          {/each}
        </tr>
        <tr>
          <th>Bonus:</th>
          {#each attrKeys as key}
           {#if !editMode}
            <td>{$currentCharacter.attBonuses[key]}</td>
            {:else}
            <td><input type="number" bind:value={$currentCharacter.attBonuses[key]}/></td>
           {/if}
          {/each}
        </tr>
        <tr>
          <th>Total:</th>
          {#each attrKeys as key}
            <td
              >{$currentCharacter.attributes[key] +
                $currentCharacter.attBonuses[key]}</td
            >
          {/each}
        </tr>
      </tbody>
    </table>
  </div>
{/if}

<style>
  .attribute-table {
    width: 100%;
    font-size: 8pt;
    border-collapse: collapse;
    table-layout: fixed;
    border: 0.5px solid var(--maize);
    border-radius: 1rem;
  }

  .attribute-table th:first-child,
  .attribute-table td:first-child {
    width: 4rem;
  }

 td {
   color: var(--white);
 }


  .attributes-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  .edit-toggle {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
  }

  .toggle-btn {
    border-radius: 0px;
    background-color: var(--maize);
  }
  .toggle-btn.active-toggle {
    border-radius: 0px;
    background-color: red;
  }
 input {
   background-color:  var(--maize);
   width: 1.5rem;
   height: 1rem;
   margin: 0;
   padding: 0;
   border: none;
 }

</style>
