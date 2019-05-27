
freeboard.loadWidgetPlugin({
    "type_name": "TYPE_NAME",
    "display_name": "DISPLAY_NAME",
    "description": "DESCRIPTION",
    "external_scripts": [
        "URL"
    ],
    "fill_size": true,
    "settings": [
        {
            "name": "SETTING_ID_1",
            "display_name": "SETTING_DISPLAY_NAME_1"
        },
        {
            "name": "SETTING_ID_2",
            "display_name": "SETTING_DISPLAY_NAME_2",
            //"type": "number|calculated|option",
            "type": "option",
            "options": [
                {
                    "name": "SETTING_OPTION_NAME_1",
                    "value": "SETTING_OPTION_VALUE_1"
                },
                {
                    "name": "SETTING_OPTION_NAME_2",
                    "value": "SETTING_OPTION_VALUE_2"
                }
            ]
        }
    ],
    newInstance: function(settings, newInstanceCallback) {
        newInstanceCallback(new WIDGET_CONSTRUCTOR(settings));
    }

});

//example: freeboard.addStyle('.class1', "font: 10px sans-serif;");
freeboard.addStyle('CSS_CLASS', "CSS_DEFINITION");

var WIDGET_CONSTRUCTOR = function(settings) {
    var self = this;
    var currentSettings = settings;

    self.render = function(containerElement) {
        //ADD WIDGET TO CONTAINER
        $(containerElement).append(myElement);

        //DO RENDERING STUFF HERE
    }

    self.getHeight = function() {
        //CALCULATE OPTIMAL HEIGHT
        return currentSettings.height;
    }

    self.onSettingsChanged = function(newSettings) {
        //
        currentSettings = newSettings;
    }

    self.onCalculatedValueChanged = function(settingName, newValue) {
        //CHECK settingName and newValue AND update your rendering
    }

    self.onDispose = function() {
        //DO CLEANUP STUFF HERE
    }

}