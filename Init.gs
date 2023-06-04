/**
 * @OnlyCurrentDoc
 *
 * Initialize
 */
function onOpen() {
    var ui = SpreadsheetApp.getUi();

    // Menu.
    var menu = ui.createMenu('Gmail-to-GSheets');

    // Add fiat values.
    menu.addItem('Run', 'importEmails')
        .addSeparator();

    menu.addToUi();
}

/**
 * Export sheet.
 */
function menuSheetExport() {
    var ui = SpreadsheetApp.getUi();

    var result = ui.alert(
        'Do you want to backup this sheet?',
        ui.ButtonSet.OK_CANCEL);

    if(result == ui.Button.OK) {
        sheetExport(ui);
    }
}

/**
 * Restore sheet.
 */
function menuSheetRestore() {
    sheetRestore(SpreadsheetApp.getUi());
}

/**
 * Import transactions.
 */
function menuSoon() {
    var ui = SpreadsheetApp.getUi();
    ui.alert('Coming soon...', ui.ButtonSet.OK);
}
