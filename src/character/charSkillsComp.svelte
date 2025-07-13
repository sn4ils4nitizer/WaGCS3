<script lang="ts">
  import { currentCharacter } from "../lib/stores";
</script>

{#if $currentCharacter}
  <div>
    <table class="attribute-table">
      <thead>
        <tr><th colspan="8">Skills:</th></tr>
        <tr>
          <th></th>
          <th></th>
          <th>Rating</th>
          <th>Total</th>
          <th></th>
          <th></th>
          <th>Rating</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Athletics</td>
          <td>S</td>
          <td>{$currentCharacter.skills.athletics}</td>
          <td
            >{$currentCharacter.skills.athletics +
              $currentCharacter.attributes.strength +
              $currentCharacter.attBonuses.bstrength}</td
          >
          <td>Awareness</td>
          <td>S</td>
          <td>{$currentCharacter.skills.athletics}</td>

          <td
            >{$currentCharacter.skills.awareness +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
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
</style>
