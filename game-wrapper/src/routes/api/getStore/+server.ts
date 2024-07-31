import type { RequestHandler } from './$types';
import { levelCompleteStore } from '$lib/stores';
import { get } from 'svelte/store';
import type { LevelComplete } from '$lib/interfaces/levelComplete';

export const GET: RequestHandler = async () => {
    const response: LevelComplete = get(levelCompleteStore);
    return new Response(JSON.stringify(response));
};