<script lang="ts">
  import { currentCharacter } from "../lib/stores";
</script>

{#if $currentCharacter}
  <div>
    <table class="weapons-table">
      <thead>
        <tr>
          <th colspan="11">Wargear</th>
        </tr>
        <tr>
          <th>Weapons</th>
          <th>Dice Pool</th>
          <th>Damage</th>
          <th>ED</th>
          <th>AP</th>
          <th>Salvo</th>
          <th colspan="3">Range</th>
          <th>Traits</th>
        </tr>
      </thead>
      {#each $currentCharacter.weapons as weapon}
        <tbody>
          <tr>
            <td>{weapon.name}</td>
            <td>{weapon.dicePool ?? "-"}</td>
            <td>{weapon.damage ?? "-"}</td>
            <td>{weapon.ed ?? "-"}</td>
            <td>{weapon.ap ?? "-"}</td>
            <td>{weapon.salvo ?? "-"}</td>
            <td>{weapon.minRange ?? "-"}</td>
            <td>{weapon.midRange ?? "-"}</td>
            <td>{weapon.maxRange ?? "-"}</td>
            <td>
              {#each weapon.traits as trait}
                {trait ?? "-"}{" "}
              {/each}
            </td>
          </tr>
        </tbody>
      {/each}
    </table>
  </div>
{:else}
  <p>No weapons to load.</p>
{/if}

<style>
  .weapons-table {
    width: 100%;
    border-collapse: collapse;
    border: 0.5px solid var(--maize);
    border-radius: 1rem;
  }

  .weapons-table th,
  .weapons-table td {
    padding: 0.5rem;
    text-align: center;
  }
</style>
