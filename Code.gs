var SCRIPT_NAME = "CloudFire_Setup"
var SCRIPT_VERSION = "v0.6.dev_ajr"

function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('CloudFire')
    .addItem('Install', 'onInstall')
    .addToUi()
}

// Menu options
function onInstall() {CloudFireSetup.onInstall()}

// Local Triggers
function resume(e) {CloudFireSetup.resume(e)}