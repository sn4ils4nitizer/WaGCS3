import { writeTextFile, readTextFile } from '@tauri-apps/plugin-fs';
import { BaseDirectory } from '@tauri-apps/plugin-fs';

export type Character = {
  name: string
  lastname: string
  keyword?: string[];
  attributes: Attributes;
  attBonuses: AttBonuses;
  skills: Skills;
  weapons?: Weapons[];
}

type Attributes = {
  strength: number;
  toughness: number;
  agility: number;
  initiative: number;
  willpower: number;
  intellect: number;
  fellowship: number;
}

type AttBonuses = {
  bstrength: number;
  btoughness: number;
  bagility: number;
  binitiative: number;
  bwillpower: number;
  bintellect: number;
  bfellowship: number;
}



type Skills = {
  athletics: number;
  awareness: number;
  ballisticSkill: number;
  cunning: number;
  deception: number;
  insight: number;
  intimidation: number;
  investigation: number;
  leadership: number;
  medicae: number;
  persuasion: number;
  pilot: number;
  psychicMasatery: number;
  scholar: number;
  stealth: number;
  survival: number;
  tech: number;
  weaponSkill: number;
}

type Weapons = {
  name: string;
  dicePool?: number;
  damage?: number;
  ed?: number;
  ap?: number;
  salvo?: number;
  maxRange?: number;
  midRange?: number;
  minRange?: number;
  traits?: string[];

}

export async function saveCharacter(char: Character) {
  const data = JSON.stringify(char);
  console.log(BaseDirectory.AppLocalData);
  await writeTextFile(`${char.name}-${char.lastname}.json`, data, {
    baseDir: BaseDirectory.AppLocalData,
  })

}

export async function loadCharacter(filename: string): Promise<Character> {
  const content = await readTextFile(`${filename}`, {
    baseDir: BaseDirectory.AppLocalData,
  })
  return JSON.parse(content);
}

export async function saveExampleChar(): Promise<void> {
  const char: Character = {
    name: "Aspia",
    lastname: "Dissolata",
    keyword: [
      "Imperial",
    ],
    attributes: {
      strength: 5,
      toughness: 5,
      agility: 5,
      initiative: 5,
      willpower: 5,
      intellect: 5,
      fellowship: 5,
    },
    attBonuses: {
      bstrength: 1,
      btoughness: 2,
      bagility: 3,
      binitiative: 4,
      bwillpower: 5,
      bintellect: 6,
      bfellowship: 7,
    },
    skills: {
      athletics: 0,
      awareness: 0,
      ballisticSkill: 4,
      cunning: 0,
      deception: 0,
      insight: 0,
      intimidation: 0,
      investigation: 1,
      leadership: 0,
      medicae: 5,
      persuasion: 0,
      pilot: 0,
      psychicMasatery: 0,
      scholar: 2,
      stealth: 0,
      survival: 0,
      tech: 0,
      weaponSkill: 4,
    },
    weapons: [
      {
        name: "lasgun",
        maxRange: 8,
        midRange: 6,
        minRange: 1,
      },
      {
        name: "Czerep",
        maxRange: 1,
        midRange: 1,
        minRange: 1,
      },
      {
        name: "Laspistol",
        damage: 7,
        ed: 1,
        salvo: 1,
        minRange: 6,
        midRange: 12,
        maxRange: 18,
        traits: [
          "Pistol",
          "Reliable"
        ]
      }

    ]
  };
  await saveCharacter(char);
  console.log("Character Saved");
}

