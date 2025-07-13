<script lang="ts">
  import { join } from "@tauri-apps/api/path";
  import { onMount } from "svelte";
  import { readDir, BaseDirectory, type DirEntry } from "@tauri-apps/plugin-fs";
  import { loadCharacter } from "./character";
  import { currentCharacter } from "../lib/stores";

  //const entries = await readDir("", { baseDir: BaseDirectory.AppLocalData });
  //await readDirRecursive("", entries);

  export let currentPath = "";

  let entries: DirEntry[] = [];

  export async function readBaseDirectory() {
    return readDir("", { baseDir: BaseDirectory.AppLocalData });
  }

  export async function readDirectory(dir: string, isDir: boolean) {
    if (!isDir) {
      const path = currentPath ? await join(currentPath, dir) : dir;
      await handleCharacterSelect(path);
      return;
    }

    currentPath = currentPath ? await join(currentPath, dir) : dir;
    entries = await readDir(currentPath, {
      baseDir: BaseDirectory.AppLocalData,
    });
  }

  async function handleCharacterSelect(path: string) {
    console.log("Character Sent.");
    const character = await loadCharacter(path);
    currentCharacter.set(character);
  }

  onMount(async () => {
    entries = await readBaseDirectory();
  });
</script>

<h1>CHARACTER LIST UNDER CONSTRUCTION</h1>

<ul>
  {#each entries as entry}
    <li
      class="link"
      on:click={() => {
        readDirectory(entry.name, entry.isDirectory);
      }}
    >
      {entry.name} - {entry.isDirectory ? "Folder" : "File"}
    </li>
  {/each}
  {#if currentPath}
    <li
      style="padding-top: 2rem;"
      class="link"
      on:click={async () => {
        const parts = currentPath.split("/");
        parts.pop();
        currentPath = parts.join("/");
        entries = await readDir(currentPath, {
          baseDir: BaseDirectory.AppLocalData,
        });
      }}
    >
      Back
    </li>
  {/if}
</ul>

<style>
  .link {
    list-style: none;
    color: var(--maize);
    cursor: pointer;
  }

  .link:hover {
    color: var(--mint-cream);
    text-decoration: underline;
  }
</style>
