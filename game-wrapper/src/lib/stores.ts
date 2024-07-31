import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { LevelComplete } from './interfaces/levelComplete';

// export const levelCompleteStore: Writable<LevelComplete> = writable({
//   UserID: "Default",
//   LevelComplete: "1"
// });

function createLevelCompleteStore() {
  const { subscribe, set, update } = writable<LevelComplete>({ UserID: 'Default', LevelComplete: '1' });

  return {
    subscribe,
    set: (value: LevelComplete) => {
      set(value);
      console.log("Store set to:", value);
    },
    update
  };
}

export const levelCompleteStore = createLevelCompleteStore();
