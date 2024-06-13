gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDDesertBackground2Objects1= [];
gdjs.MainMenuCode.GDDesertBackground2Objects2= [];
gdjs.MainMenuCode.GDLevel1Objects1= [];
gdjs.MainMenuCode.GDLevel1Objects2= [];
gdjs.MainMenuCode.GDLevel2Objects1= [];
gdjs.MainMenuCode.GDLevel2Objects2= [];
gdjs.MainMenuCode.GDLevel3Objects1= [];
gdjs.MainMenuCode.GDLevel3Objects2= [];
gdjs.MainMenuCode.GDLevel4Objects1= [];
gdjs.MainMenuCode.GDLevel4Objects2= [];
gdjs.MainMenuCode.GDTitleTextObjects1= [];
gdjs.MainMenuCode.GDTitleTextObjects2= [];
gdjs.MainMenuCode.GDLevelCompleteTextObjects1= [];
gdjs.MainMenuCode.GDLevelCompleteTextObjects2= [];
gdjs.MainMenuCode.GDRestartLevelButtonObjects1= [];
gdjs.MainMenuCode.GDRestartLevelButtonObjects2= [];
gdjs.MainMenuCode.GDNextLevelButtonObjects1= [];
gdjs.MainMenuCode.GDNextLevelButtonObjects2= [];
gdjs.MainMenuCode.GDLevelSelectButtonObjects1= [];
gdjs.MainMenuCode.GDLevelSelectButtonObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MainMenuCode.GDLevel1Objects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.MainMenuCode.GDLevel2Objects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel3Objects1Objects = Hashtable.newFrom({"Level3": gdjs.MainMenuCode.GDLevel3Objects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel4Objects1Objects = Hashtable.newFrom({"Level4": gdjs.MainMenuCode.GDLevel4Objects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MainMenuCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel1Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeftClickLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MainMenuCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel2Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClickAndDragLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.MainMenuCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel3Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MovingObjectLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.MainMenuCode.GDLevel4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLevel4Objects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MouseOverLevel", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDDesertBackground2Objects1.length = 0;
gdjs.MainMenuCode.GDDesertBackground2Objects2.length = 0;
gdjs.MainMenuCode.GDLevel1Objects1.length = 0;
gdjs.MainMenuCode.GDLevel1Objects2.length = 0;
gdjs.MainMenuCode.GDLevel2Objects1.length = 0;
gdjs.MainMenuCode.GDLevel2Objects2.length = 0;
gdjs.MainMenuCode.GDLevel3Objects1.length = 0;
gdjs.MainMenuCode.GDLevel3Objects2.length = 0;
gdjs.MainMenuCode.GDLevel4Objects1.length = 0;
gdjs.MainMenuCode.GDLevel4Objects2.length = 0;
gdjs.MainMenuCode.GDTitleTextObjects1.length = 0;
gdjs.MainMenuCode.GDTitleTextObjects2.length = 0;
gdjs.MainMenuCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.MainMenuCode.GDLevelCompleteTextObjects2.length = 0;
gdjs.MainMenuCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNextLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDNextLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.MainMenuCode.GDLevelSelectButtonObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
