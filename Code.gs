var SCRIPT_NAME = "CloudFire_Setup"
var SCRIPT_VERSION = "v0.3"

function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('CloudFire')
    .addItem('Install', 'onInstall')
    .addToUi()
}

// Menu options
function onInstall() {CloudFire.onInstall()}

// Local Triggers
function resume(e) {CloudFire.resume(e)}

// Library triggers
function onInstallableEdit(event) {StaffData.onEdit(event)}