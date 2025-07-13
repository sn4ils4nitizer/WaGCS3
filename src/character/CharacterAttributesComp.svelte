<script lang="ts">
  import { currentCharacter } from "../lib/stores";
</script>

{#if $currentCharacter}
  <div>
    <table class="attribute-table">
      <thead>
        <tr><th colspan="8">Attributes:</th></tr>
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
          <td>Rating:</td>
          {#each Object.values($currentCharacter.attributes) as attribute}
            <td>{attribute}</td>
          {/each}
        </tr>
        <tr>
          <td>Bonus:</td>
          {#each Object.values($currentCharacter.attBonuses) as bonus}
            <td>{bonus}</td>
          {/each}
        </tr>
        <tr>
          <td>Total:</td>
          {#each Object.keys($currentCharacter.attributes) as key}
            <td>
              {$currentCharacter.attributes[key] +
                $currentCharacter.attBonuses["b" + key]}
            </td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>
{/if}

<style>
  .attribute-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border: 0.5px solid var(--maize);
    border-radius: 1rem;
  }

  .attribute-table th:first-child,
  .attribute-table td:first-child {
    width: 4rem;
  }
</style>
