gdjs.LeftClickLevelCode = {};
gdjs.LeftClickLevelCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.LeftClickLevelCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1= [];
gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects2= [];
gdjs.LeftClickLevelCode.GDLeftClickInstructionObjects1= [];
gdjs.LeftClickLevelCode.GDLeftClickInstructionObjects2= [];
gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1= [];
gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects2= [];
gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1= [];
gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects2= [];
gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1= [];
gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects2= [];
gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1= [];
gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects2= [];
gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1= [];
gdjs.LeftClickLevelCode.GDNextLevelButtonObjects2= [];
gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1= [];
gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects2= [];


gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1});
gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButton2Objects1Objects = Hashtable.newFrom({"TargetRoundButton2": gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1});
gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButton3Objects1Objects = Hashtable.newFrom({"TargetRoundButton3": gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1});
gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDRestartLevelButtonObjects1Objects = Hashtable.newFrom({"RestartLevelButton": gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1});
gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDNextLevelButtonObjects1Objects = Hashtable.newFrom({"NextLevelButton": gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1});
gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDLevelSelectButtonObjects1Objects = Hashtable.newFrom({"LevelSelectButton": gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1});
gdjs.LeftClickLevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1);
{for(var i = 0, len = gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1 */
{for(var i = 0, len = gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButton2Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1 */
{for(var i = 0, len = gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton3"), gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDTargetRoundButton3Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1 */
{for(var i = 0, len = gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton3"), gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1[k] = gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1[k] = gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1[i];
        ++k;
    }
}
gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1.length;i<l;++i) {
    if ( !(gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1[k] = gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1[i];
        ++k;
    }
}
gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1);
{for(var i = 0, len = gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDRestartLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeftClickLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDNextLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClickAndDragLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.LeftClickLevelCode.mapOfGDgdjs_9546LeftClickLevelCode_9546GDLevelSelectButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.LeftClickLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeftClickLevelCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.LeftClickLevelCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.LeftClickLevelCode.GDLeftClickInstructionObjects1.length = 0;
gdjs.LeftClickLevelCode.GDLeftClickInstructionObjects2.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects1.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButton2Objects2.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects1.length = 0;
gdjs.LeftClickLevelCode.GDTargetRoundButton3Objects2.length = 0;
gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.LeftClickLevelCode.GDLevelCompleteTextObjects2.length = 0;
gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.LeftClickLevelCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.LeftClickLevelCode.GDNextLevelButtonObjects1.length = 0;
gdjs.LeftClickLevelCode.GDNextLevelButtonObjects2.length = 0;
gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.LeftClickLevelCode.GDLevelSelectButtonObjects2.length = 0;

gdjs.LeftClickLevelCode.eventsList0(runtimeScene);

return;

}

gdjs['LeftClickLevelCode'] = gdjs.LeftClickLevelCode;
