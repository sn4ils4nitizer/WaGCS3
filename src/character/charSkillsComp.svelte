<script lang="ts">
  import { currentCharacter } from "../lib/stores";

  let editMode: boolean = false;

  function toggleMode() {
    editMode = !editMode;
  }
</script>

{#if $currentCharacter}
  <div>
    <div>{editMode}</div>
    <!-- Non-editable table -->
    <table class="attribute-table">
      <thead>
        <tr
          ><th colspan="8">
            <div class="skills-header">
              <button on:click={() => toggleMode()}>Edit</button>
              Skills:
            </div></th
          ></tr
        >
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
          <td>(S)</td>
          <td>{$currentCharacter.skills.athletics}</td>
          <td
            >{$currentCharacter.skills.athletics +
              $currentCharacter.attributes.strength +
              $currentCharacter.attBonuses.bstrength}</td
          >
          <td>Medicate</td>
          <td>(Int)</td>
          <td>{$currentCharacter.skills.medicae}</td>
          <td
            >{$currentCharacter.skills.medicae +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
        </tr>
        <tr>
          <td>Awareness</td>
          <td>(Int)</td>
          <td>{$currentCharacter.skills.athletics}</td>
          <td
            >{$currentCharacter.skills.awareness +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
          <td>Persuasion</td>
          <td>(Fel)</td>
          <td>{$currentCharacter.skills.persuasion}</td>
          <td
            >{$currentCharacter.skills.persuasion +
              $currentCharacter.attributes.fellowship +
              $currentCharacter.attBonuses.bfellowship}</td
          >
        </tr>
        <tr>
          <td>Ballistic Skill</td>
          <td>(A)</td>
          <td>{$currentCharacter.skills.ballisticSkill}</td>
          <td
            >{$currentCharacter.skills.ballisticSkill +
              $currentCharacter.attributes.agility +
              $currentCharacter.attBonuses.bagility}</td
          >
          <td>Pilot</td>
          <td>(A)</td>
          <td>{$currentCharacter.skills.pilot}</td>
          <td
            >{$currentCharacter.skills.pilot +
              $currentCharacter.attributes.agility +
              $currentCharacter.attBonuses.bagility}</td
          >
        </tr>
        <tr>
          <td>Cunning</td>
          <td>(Fel)</td>
          <td>{$currentCharacter.skills.cunning}</td>
          <td
            >{$currentCharacter.skills.cunning +
              $currentCharacter.attributes.fellowship +
              $currentCharacter.attBonuses.bfellowship}</td
          >
          <td>Psychich Mastery</td>
          <td>(Wil)</td>
          <td>{$currentCharacter.skills.psychicMasatery}</td>
          <td
            >{$currentCharacter.skills.psychicMasatery +
              $currentCharacter.attributes.willpower +
              $currentCharacter.attBonuses.bwillpower}</td
          >
        </tr>
        <tr>
          <td>Deception</td>
          <td>(Fel)</td>
          <td>{$currentCharacter.skills.deception}</td>
          <td
            >{$currentCharacter.skills.deception +
              $currentCharacter.attributes.fellowship +
              $currentCharacter.attBonuses.bfellowship}</td
          >
          <td>Scholar</td>
          <td>(Int)</td>
          <td>{$currentCharacter.skills.scholar}</td>
          <td
            >{$currentCharacter.skills.scholar +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
        </tr>
        <tr>
          <td>Insight</td>
          <td>(Fel)</td>
          <td>{$currentCharacter.skills.insight}</td>
          <td
            >{$currentCharacter.skills.insight +
              $currentCharacter.attributes.fellowship +
              $currentCharacter.attBonuses.bfellowship}</td
          >
          <td>Stealth</td>
          <td>(A)</td>
          <td>{$currentCharacter.skills.stealth}</td>
          <td
            >{$currentCharacter.skills.stealth +
              $currentCharacter.attributes.agility +
              $currentCharacter.attBonuses.bagility}</td
          >
        </tr>
        <tr>
          <td>Intimidation</td>
          <td>(Wil)</td>
          <td>{$currentCharacter.skills.intimidation}</td>
          <td
            >{$currentCharacter.skills.intimidation +
              $currentCharacter.attributes.willpower +
              $currentCharacter.attBonuses.bwillpower}</td
          >
          <td>Survival</td>
          <td>(Wil)</td>
          <td>{$currentCharacter.skills.survival}</td>
          <td
            >{$currentCharacter.skills.survival +
              $currentCharacter.attributes.willpower +
              $currentCharacter.attBonuses.bwillpower}</td
          >
        </tr>
        <tr>
          <td>Investigation</td>
          <td>(Int)</td>
          <td>{$currentCharacter.skills.investigation}</td>
          <td
            >{$currentCharacter.skills.investigation +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
          <td>Tech</td>
          <td>(Int)</td>
          <td>{$currentCharacter.skills.tech}</td>
          <td
            >{$currentCharacter.skills.tech +
              $currentCharacter.attributes.intellect +
              $currentCharacter.attBonuses.bintellect}</td
          >
        </tr>
        <tr>
          <td>Leadership</td>
          <td>(Wil)</td>
          <td>{$currentCharacter.skills.leadership}</td>
          <td
            >{$currentCharacter.skills.leadership +
              $currentCharacter.attributes.willpower +
              $currentCharacter.attBonuses.bwillpower}</td
          >
          <td>Weapon Skill</td>
          <td>(I)</td>
          <td>{$currentCharacter.skills.weaponSkill}</td>
          <td
            >{$currentCharacter.skills.weaponSkill +
              $currentCharacter.attributes.initiative +
              $currentCharacter.attBonuses.binitiative}</td
          >
        </tr>
      </tbody>
    </table>

    <!-- Editable Table -->
  </div>
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
    height: 1.5rem;
  }

  .skills-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem; /* lil spacing between button and text */
    position: relative;
  }

  .skills-header button {
    font-size: 4pt;
    position: absolute;
    left: 0;
    height: 1rem;
    width: 2rem;
  }
</style>
