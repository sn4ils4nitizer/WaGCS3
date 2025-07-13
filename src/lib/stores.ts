import { writable } from 'svelte/store';
import type { Character } from '../character/character'

export const currentCharacter = writable<Character | null>(null);
