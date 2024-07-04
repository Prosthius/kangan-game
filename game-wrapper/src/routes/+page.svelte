<script lang="js">
    import { onMount } from "svelte";

    onMount(() => {
        const gdjsFsm = document.createElement('script');
        gdjsFsm.src = '/gdjs-evtsext__panelspritebutton__buttonfsm.js';
        gdjsFsm.crossOrigin = 'anonymous';
        document.head.appendChild(gdjsFsm);

        const gdjsPanelSprite = document.createElement('script');
        gdjsPanelSprite.src = '/gdjs-evtsext__panelspritebutton__panelspritebutton.js';
        gdjsPanelSprite.crossOrigin = 'anonymous';
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
</script>
