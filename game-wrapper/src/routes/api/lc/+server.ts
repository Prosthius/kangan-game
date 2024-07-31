import type { RequestHandler } from './$types';
import type { LevelComplete } from '$lib/interfaces/levelComplete';
import { levelCompleteStore } from '$lib/stores';
import { get } from 'svelte/store';

export const POST: RequestHandler = async (request) => {
    const result: LevelComplete = await new Response(request.request.body).json();
    levelCompleteStore.set(result);

    console.log("api " + JSON.stringify(get(levelCompleteStore)));

    return new Response(`{"Response": "True"}`, {status: 200});
};
