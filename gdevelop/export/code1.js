gdjs.ClickAndDragLevelCode = {};
gdjs.ClickAndDragLevelCode.localVariables = [];
gdjs.ClickAndDragLevelCode.GDForestBackgroundObjects1= [];
gdjs.ClickAndDragLevelCode.GDForestBackgroundObjects2= [];
gdjs.ClickAndDragLevelCode.GDTargetObjects1= [];
gdjs.ClickAndDragLevelCode.GDTargetObjects2= [];
gdjs.ClickAndDragLevelCode.GDTarget2Objects1= [];
gdjs.ClickAndDragLevelCode.GDTarget2Objects2= [];
gdjs.ClickAndDragLevelCode.GDTarget3Objects1= [];
gdjs.ClickAndDragLevelCode.GDTarget3Objects2= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects2= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects2= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1= [];
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects2= [];
gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1= [];
gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects2= [];
gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1= [];
gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects2= [];
gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1= [];
gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects2= [];
gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1= [];
gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects2= [];
gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1= [];
gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects2= [];


gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetObjects1Objects = Hashtable.newFrom({"Target": gdjs.ClickAndDragLevelCode.GDTargetObjects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButton2Objects1Objects = Hashtable.newFrom({"TargetRoundButton2": gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTarget2Objects1Objects = Hashtable.newFrom({"Target2": gdjs.ClickAndDragLevelCode.GDTarget2Objects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButton3Objects1Objects = Hashtable.newFrom({"TargetRoundButton3": gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTarget3Objects1Objects = Hashtable.newFrom({"Target3": gdjs.ClickAndDragLevelCode.GDTarget3Objects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDRestartLevelButtonObjects1Objects = Hashtable.newFrom({"RestartLevelButton": gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDNextLevelButtonObjects1Objects = Hashtable.newFrom({"NextLevelButton": gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1});
gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDLevelSelectButtonObjects1Objects = Hashtable.newFrom({"LevelSelectButton": gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1});
gdjs.ClickAndDragLevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameInstructions"), gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1);
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.ClickAndDragLevelCode.GDTargetObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1 */
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].setVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Target2"), gdjs.ClickAndDragLevelCode.GDTarget2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTarget2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1 */
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].setVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Target3"), gdjs.ClickAndDragLevelCode.GDTarget3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton3"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTargetRoundButton3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDTarget3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1 */
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].setVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.ClickAndDragLevelCode.GDTargetObjects1);
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetObjects1[i].getBehavior("Animation").setAnimationName("Outline");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target2"), gdjs.ClickAndDragLevelCode.GDTarget2Objects1);
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTarget2Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTarget2Objects1[i].getBehavior("Animation").setAnimationName("Outline");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton3"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Target3"), gdjs.ClickAndDragLevelCode.GDTarget3Objects1);
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTarget3Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTarget3Objects1[i].getBehavior("Animation").setAnimationName("Outline");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton3"), gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length;i<l;++i) {
    if ( gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].getVariableBoolean(gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[k] = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i];
        ++k;
    }
}
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameInstructions"), gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1);
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1 */
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1 */
/* Reuse gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1 */
{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length ;i < len;++i) {
    gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDRestartLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClickAndDragLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDNextLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MovingObjectLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.ClickAndDragLevelCode.mapOfGDgdjs_9546ClickAndDragLevelCode_9546GDLevelSelectButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.ClickAndDragLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickAndDragLevelCode.GDForestBackgroundObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDForestBackgroundObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTarget2Objects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTarget2Objects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTarget3Objects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTarget3Objects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButton2Objects2.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects1.length = 0;
gdjs.ClickAndDragLevelCode.GDTargetRoundButton3Objects2.length = 0;
gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDGameInstructionsObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDLevelCompleteTextObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDNextLevelButtonObjects2.length = 0;
gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.ClickAndDragLevelCode.GDLevelSelectButtonObjects2.length = 0;

gdjs.ClickAndDragLevelCode.eventsList0(runtimeScene);

return;

}

gdjs['ClickAndDragLevelCode'] = gdjs.ClickAndDragLevelCode;
