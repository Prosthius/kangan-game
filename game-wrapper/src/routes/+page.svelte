<script context="module" lang="ts">
    import { levelCompleteStore } from '$lib/stores';
    import type { LevelComplete } from '$lib/interfaces/levelComplete';

    export async function load({ fetch }) {
        const res = await fetch('/api/level-complete');
        const data: LevelComplete = await res.json();
        levelCompleteStore.set(data);
        return { props: { initialData: data } };
    }
</script>

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    // import { levelCompleteStore } from "$lib/stores";
    import { browser } from "$app/environment";
    import { get } from 'svelte/store';
    // import type { LevelComplete } from "$lib/interfaces/levelComplete";

    onMount(() => {
        if (browser) {
            // localStorage.clear();

            if (isLevelComplete(JSON.parse(localStorage.getItem("levelComplete") as string))) {
                const storedValueInit: LevelComplete = JSON.parse(localStorage.getItem("levelComplete") as string);
                levelCompleteStore.set(storedValueInit);
                console.log("storedValueInit " + JSON.stringify(storedValueInit));
            }

            levelCompleteStore.set({
                UserID: "Testing", 
                LevelComplete: "Testing"
            });

            console.log(get(levelCompleteStore));

            // localStorage.setItem("levelComplete", JSON.stringify({UserID: "Manual", LevelComplete: "Manual"}));
        }

        const gdjsFsm = document.createElement("script");
        gdjsFsm.src = "/gdjs-evtsext__panelspritebutton__buttonfsm.js";
        gdjsFsm.crossOrigin = "anonymous";
        document.head.appendChild(gdjsFsm);

        const gdjsPanelSprite = document.createElement("script");
        gdjsPanelSprite.src = "/gdjs-evtsext__panelspritebutton__panelspritebutton.js";
        gdjsPanelSprite.crossOrigin = "anonymous";
        document.head.appendChild(gdjsPanelSprite);

        (function () {
            //Initialization
            var game = new gdjs.RuntimeGame(gdjs.projectData, {});

            //Create a renderer
            game.getRenderer().createStandardCanvas(document.body);

            //Bind keyboards/mouse/touch events
            game.getRenderer().bindStandardEvents(
                game.getInputManager(),
                window,
                document,
            );

            //Load all assets and start the game
            game.loadAllAssets(function () {
                game.startGameLoop();
            });
        })();
    });

    // onDestroy(() => {
    //     levelCompleteStore;
    // })

    if (browser) {
        levelCompleteStore.subscribe((levelComplete) => {
            localStorage.setItem("levelComplete", JSON.stringify(levelComplete));
            console.log("Update " + JSON.stringify(levelComplete));
        });
        // console.log("LS set " + localStorage.getItem("levelComplete"));
        // console.log(get(levelCompleteStore));
    }

    function isLevelComplete(obj: any): obj is LevelComplete {
        return typeof obj === 'object' &&
            typeof obj.UserID === 'string' &&
            typeof obj.LevelComplete === 'string';
    }

    console.log($levelCompleteStore);
</script>
