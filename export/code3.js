gdjs.MouseOverLevelCode = {};
gdjs.MouseOverLevelCode.GDCastlesBackgroundObjects1= [];
gdjs.MouseOverLevelCode.GDCastlesBackgroundObjects2= [];
gdjs.MouseOverLevelCode.GDLevelInstructionsObjects1= [];
gdjs.MouseOverLevelCode.GDLevelInstructionsObjects2= [];
gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1= [];
gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects2= [];
gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1= [];
gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects2= [];
gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1= [];
gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects2= [];
gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1= [];
gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects2= [];
gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1= [];
gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects2= [];
gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1= [];
gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects2= [];
gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1= [];
gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects2= [];
gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1= [];
gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects2= [];
gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1= [];
gdjs.MouseOverLevelCode.GDNextLevelButtonObjects2= [];
gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1= [];
gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects2= [];


gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButton2Objects1Objects = Hashtable.newFrom({"TargetRoundButton2": gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTooltipTwoBackgroundObjects1Objects = Hashtable.newFrom({"TooltipTwoBackground": gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButton2Objects1Objects = Hashtable.newFrom({"TargetRoundButton2": gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDPopup_95959595two_95959595textObjects1Objects = Hashtable.newFrom({"Popup_two_text": gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDPopup_95959595two_95959595textObjects1Objects = Hashtable.newFrom({"Popup_two_text": gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDNextLevelButtonObjects1Objects = Hashtable.newFrom({"NextLevelButton": gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDRestartLevelButtonObjects1Objects = Hashtable.newFrom({"RestartLevelButton": gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1});
gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDLevelSelectButtonObjects1Objects = Hashtable.newFrom({"LevelSelectButton": gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1});
gdjs.MouseOverLevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Popup_one_text"), gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Popup_two_text"), gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TooltipOneBackground"), gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TooltipTwoBackground"), gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Popup_one_text"), gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1);
/* Reuse gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TooltipOneBackground"), gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[i].setVariableBoolean(gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Popup_two_text"), gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1);
/* Reuse gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("TooltipTwoBackground"), gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[i].setVariableBoolean(gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Popup_one_text"), gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("TooltipOneBackground"), gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Popup_two_text"), gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TooltipTwoBackground"), gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTooltipTwoBackgroundObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDTargetRoundButton2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDPopup_95959595two_95959595textObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1 */
/* Reuse gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1 */
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Popup_two_text"), gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length;i<l;++i) {
    if ( gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[k] = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i];
        ++k;
    }
}
gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDPopup_95959595two_95959595textObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TooltipTwoBackground"), gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].setVariableBoolean(gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton2"), gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TooltipTwoBackground"), gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[i].getVariableBoolean(gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[k] = gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1.length;i<l;++i) {
    if ( gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[i].getVariableBoolean(gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[k] = gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1[i];
        ++k;
    }
}
gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].getVariableBoolean(gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_1 = true;
        gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[k] = gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1[i];
        ++k;
    }
}
gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompleteText"), gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelInstructions"), gdjs.MouseOverLevelCode.GDLevelInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1);
{for(var i = 0, len = gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MouseOverLevelCode.GDLevelInstructionsObjects1.length ;i < len;++i) {
    gdjs.MouseOverLevelCode.GDLevelInstructionsObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDNextLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDRestartLevelButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MouseOverLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MouseOverLevelCode.mapOfGDgdjs_9546MouseOverLevelCode_9546GDLevelSelectButtonObjects1Objects, runtimeScene, true, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.MouseOverLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MouseOverLevelCode.GDCastlesBackgroundObjects1.length = 0;
gdjs.MouseOverLevelCode.GDCastlesBackgroundObjects2.length = 0;
gdjs.MouseOverLevelCode.GDLevelInstructionsObjects1.length = 0;
gdjs.MouseOverLevelCode.GDLevelInstructionsObjects2.length = 0;
gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.MouseOverLevelCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects1.length = 0;
gdjs.MouseOverLevelCode.GDTargetRoundButton2Objects2.length = 0;
gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects1.length = 0;
gdjs.MouseOverLevelCode.GDTooltipOneBackgroundObjects2.length = 0;
gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects1.length = 0;
gdjs.MouseOverLevelCode.GDPopup_9595one_9595textObjects2.length = 0;
gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects1.length = 0;
gdjs.MouseOverLevelCode.GDPopup_9595two_9595textObjects2.length = 0;
gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects1.length = 0;
gdjs.MouseOverLevelCode.GDTooltipTwoBackgroundObjects2.length = 0;
gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.MouseOverLevelCode.GDLevelCompleteTextObjects2.length = 0;
gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.MouseOverLevelCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.MouseOverLevelCode.GDNextLevelButtonObjects1.length = 0;
gdjs.MouseOverLevelCode.GDNextLevelButtonObjects2.length = 0;
gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.MouseOverLevelCode.GDLevelSelectButtonObjects2.length = 0;

gdjs.MouseOverLevelCode.eventsList0(runtimeScene);

return;

}

gdjs['MouseOverLevelCode'] = gdjs.MouseOverLevelCode;
