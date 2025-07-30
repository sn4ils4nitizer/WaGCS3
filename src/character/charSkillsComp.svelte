<script lang="ts">
  import { currentCharacter } from "../lib/stores";

  let editMode: boolean = false;

  function toggleMode() {
    editMode = !editMode;
  }

  const getTotal = (
    skill: Skill,
    attributes: Attributes,
    bonuses: Attributes,
  ): number => {
    return (
      skill.rating + attributes[skill.attribute] + bonuses[skill.attribute]
    );
  };

  $: skillPairs = $currentCharacter
    ? Array.from(
        { length: Math.ceil($currentCharacter.skills.length / 2) },
        (_, i) => [
          $currentCharacter.skills[i * 2],
          $currentCharacter.skills[i * 2 + 1],
        ],
      )
    : [];
</script>

{#if $currentCharacter}
  <table class="attribute-table">
    <thead>
      <tr
        ><th colspan="8">
          <div class="skills-header">
            <label class="edit-toggle">
              <button
                class:active-toggle={editMode}
                class="toggle-btn"
                on:click={() => toggleMode()}
              ></button>
            </label> Skills:
          </div></th
        ></tr
      >
      <tr>
        <th></th><th></th><th>Rating</th><th>Total</th>
        <th></th><th></th><th>Rating</th><th>Total</th>
      </tr>
    </thead>
    <tbody>
      {#each skillPairs as pair}
        <tr>
          {#each pair as skill}
            {#if skill}
              <th>{skill.displayName}</th>
              <th>({skill.displayAttBonus})</th>
              <td>
                {#if editMode}
                  <input
                    type="number"
                    bind:value={skill.rating}
                    min="0"
                    max="10"
                  />
                {:else}
                  {skill.rating}
                {/if}
              </td>
              <td
                >{getTotal(
                  skill,
                  $currentCharacter.attributes,
                  $currentCharacter.attBonuses,
                )}</td
              >
            {:else}
              <td colspan="4"></td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
  .attribute-table {
    width: 100%;
    font-size: 8pt;
    border-collapse: collapse;
    border: 0.5px solid var(--maize);
    border-radius: 1rem;
  }
  td {
    height: 1.2rem;
    color: var(--white);
  }

  .skills-header {
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
    background-color: var(--maize);
    width: 1.5rem;
    height: 1rem;
  }
</style>
