import { writeTextFile, readTextFile } from '@tauri-apps/plugin-fs';
import { BaseDirectory } from '@tauri-apps/plugin-fs';

// Characater Model

export type Character = {
  name: string
  lastname: string
  keyword?: string[];
  attributes: Attributes;
  attBonuses: Attributes;
  skills: Skill[];
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

type Skill = {
  name: string;
  displayName: string,
  rating: number;
  attribute: keyof Attributes;
  displayAttBonus: string;
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


// Skill Definitions
export const skills: Skill[] = [
  { name: "athletics", displayName: "Athletics", rating: 0, attribute: "strength", displayAttBonus: "S" },
  { name: "awareness", displayName: "Awareness", rating: 0, attribute: "intellect", displayAttBonus: "Int" },
  { name: "ballisticSkill", displayName: "Ballistic Skill", rating: 0, attribute: "agility", displayAttBonus: "A" },
  { name: "cunning", displayName: "Cunning", rating: 0, attribute: "fellowship", displayAttBonus: "Fel" },
  { name: "deception", displayName: "Deception", rating: 0, attribute: "fellowship", displayAttBonus: "Fel" },
  { name: "insight", displayName: "Insight", rating: 0, attribute: "fellowship", displayAttBonus: "Fel" },
  { name: "intimidation", displayName: "Intimidation", rating: 0, attribute: "willpower", displayAttBonus: "Wil" },
  { name: "investigation", displayName: "Investigation", rating: 0, attribute: "intellect", displayAttBonus: "Int" },
  { name: "leadership", displayName: "Leadership", rating: 0, attribute: "willpower", displayAttBonus: "Wil" },
  { name: "medicae", displayName: "Medicae", rating: 0, attribute: "intellect", displayAttBonus: "Int" },
  { name: "persuasion", displayName: "Persuasion", rating: 0, attribute: "fellowship", displayAttBonus: "Fel" },
  { name: "pilot", displayName: "Pilot", rating: 0, attribute: "agility", displayAttBonus: "A" },
  { name: "psychicMastery", displayName: "Psychic Mastery", rating: 0, attribute: "willpower", displayAttBonus: "Wil" },
  { name: "scholar", displayName: "Scholar", rating: 0, attribute: "intellect", displayAttBonus: "Int" },
  { name: "stealth", displayName: "Stealth", rating: 0, attribute: "agility", displayAttBonus: "A" },
  { name: "survival", displayName: "Survival", rating: 0, attribute: "willpower", displayAttBonus: "Wil" },
  { name: "tech", displayName: "Tech", rating: 0, attribute: "intellect", displayAttBonus: "Int" },
  { name: "weaponSkill", displayName: "Weapon Skill", rating: 0, attribute: "initiative", displayAttBonus: "I" },
];

// Helper Functions

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

export function getSkillTotal(skill: Skill, char: Character): number {
  const attr = skill.attribute;
  return skill.rating + (char.attributes[attr] ?? 0) + (char.attBonuses[attr] ?? 0);
}

export async function saveExampleChar(): Promise<void> {
  const customRatings: Record<string, number> = {
    athletics: 4,
    awareness: 3,
    ballisticSkill: 0,
    cunning: 5,
    deception: 2,
    insight: 4,
    intimidation: 2,
    investigation: 3,
    leadership: 5,
    medicae: 0,
    persuasion: 1,
    pilot: 5,
    psychicMastery: 3,
    scholar: 2,
    stealth: 1,
    survival: 5,
    tech: 5,
    weaponSkill: 5,
  };

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
      strength: 1,
      toughness: 2,
      agility: 3,
      initiative: 4,
      willpower: 5,
      intellect: 6,
      fellowship: 7,
    },
    skills: skills.map(skill => ({ ...skill,
                                 rating: customRatings[skill.name] ?? skill.rating >> 0})),
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

