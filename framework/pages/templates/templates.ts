import { Locator, Page } from '@playwright/test';


class TemplatesPage {
    test: any;
    page: Page;
    expect: any;
    deleteTemplateButton: Locator;
    deleteTemplatPopupXButton: Locator;
    deleteTemplatePopupOnlySelectedRadioButton: Locator;
    deleteTemplateAllSelectedRadioButton: Locator;
    deleteTemplatPopupCancelButton: Locator;
    deleteTemplatPopupDeleteButton: Locator;
    doURealyWantToDeletePopupCancelButton: Locator;
    doURealyWantToDeletePopupDeleteButton: Locator;
    addTemplateButton: Locator;
    addTemplatePopupNewTemplateButton: Locator;
    addTemplatePopupChooseTemplateButton: Locator;
    addTemplatePopupCancelButton: Locator;
    exportButton: Locator;
    exportPopupXButton: Locator;
    exportPopupExportAllRadioButton: Locator;
    exportPopupExportSelectedRadioButton: Locator;
    exportPopupCancelButton: Locator;
    exportPopupExportButton: Locator;
    exportEmailPopupXButton: Locator;
    exportEmailPopupCancelButton: Locator;
    checkboxSelectAll: Locator;
    tamplateNameFilter: Locator;
    modelFilter: Locator;
    visibilityFilter: Locator;
    permissionsFilter: Locator;
    clientFilter: Locator;
    statusFilter: Locator;
    payTractsFilter: Locator;
    createdFilter: Locator;
    editedFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuButton1: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;
    threeDotsMenuShareAccessButton: Locator;
    threeDotsMenuCreateContractButton: Locator;
    threeDotsMenuDeleteButton: Locator;
    threeDotsMenuClose: Locator;
    deletePopupCancelButton: Locator;
    deletePopupDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.deleteTemplateButton = page.locator('#templates-list-delete-templates');
        this.deleteTemplatPopupXButton = page.locator('#modal-delete-templates-cancel-cross');
        this.deleteTemplatePopupOnlySelectedRadioButton = page.locator('.mat-radio-label >> nth=0');
        this.deleteTemplateAllSelectedRadioButton = page.locator('.mat-radio-label >> nth=1');
        this.deleteTemplatPopupCancelButton = page.locator('#modal-delete-templates-cancel');
        this.deleteTemplatPopupDeleteButton = page.locator('#modal-delete-templates-delete');
        this.doURealyWantToDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
        this.doURealyWantToDeletePopupDeleteButton = page.locator('#confirm-modal-delete');
        this.addTemplateButton = page.locator('#templates-list-add-template');
        this.addTemplatePopupNewTemplateButton = page.locator('#create-template-new-template');
        this.addTemplatePopupChooseTemplateButton = page.locator('#create-template-choose-template');
        this.addTemplatePopupCancelButton = page.locator('#create-template-cancel');
        this.exportButton = page.locator('#templates-list-export');
        this.exportPopupXButton = page.locator('#export-templates-cancel-cross');
        this.exportPopupExportAllRadioButton = page.locator('.mat-radio-label >> nth=0');
        this.exportPopupExportSelectedRadioButton = page.locator('.mat-radio-label >> nth=1');
        this.exportPopupCancelButton = page.locator('#export-templates-cancel');
        this.exportPopupExportButton = page.locator('#export-templates-export');
        this.exportEmailPopupXButton = page.locator('.close-ic');
        this.exportEmailPopupCancelButton = page.locator('.mat-button >> text=Done');
        this.checkboxSelectAll = page.locator('#templates-list-select-all');
        this.tamplateNameFilter = page.locator('#template-name-column-sort');
        this.modelFilter = page.locator('#model-column-sort');
        this.visibilityFilter = page.locator('#visibility-column-sort');
        this.permissionsFilter = page.locator('#premissions-column-sort');
        this.clientFilter = page.locator('#accounts-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.payTractsFilter = page.locator('#paytracts-column-sort');
        this.createdFilter = page.locator('#created-column-sort');
        this.editedFilter = page.locator('#edited-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuButton1 = page.locator('.mat-icon-button >> nth=2');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
        this.threeDotsMenuShareAccessButton = page.locator('.context-menu-share-access');
        this.threeDotsMenuCreateContractButton = page.locator('.context-menu-create-contract');
        this.threeDotsMenuDeleteButton = page.locator('.context-menu-delete');
        this.threeDotsMenuClose = page.locator('.cdk-overlay-backdrop');
        this.deletePopupCancelButton = page.locator('#confirm-modal-cancel');
        this.deletePopupDeleteButton = page.locator('#confirm-modal-delete');
    }

    async deleteTemplateButtonClick() {
        await this.deleteTemplateButton.click();
        await this.page.waitForTimeout(500);
    }

    async deleteTemplatPopupXButtonClick() {
        await this.deleteTemplatPopupXButton.click();
    }

    async deleteTemplatePopupOnlySelectedRadioButtonClick() {
        await this.deleteTemplatePopupOnlySelectedRadioButton.click();
    }

    async deleteTemplateAllSelectedRadioButtonClick() {
        await this.deleteTemplateAllSelectedRadioButton.click();
    }

    async deleteTemplatPopupCancelButtonClick() {
        await this.deleteTemplatPopupCancelButton.click();
    }

    async deleteTemplatPopupDeleteButtonClick() {
        await this.deleteTemplatPopupDeleteButton.click();
        await this.page.waitForTimeout(500);
    }

    async doURealyWantToDeletePopupCancelButtonClick() {
        await this.doURealyWantToDeletePopupCancelButton.click();
    }

    async doURealyWantToDeletePopupDeleteButtonClick() {
        await this.doURealyWantToDeletePopupDeleteButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addTemplateButtonClcik() {
        await this.addTemplateButton.click();
        await this.page.waitForSelector('#create-template-new-template');
    }

    async addTemplatePopupNewTemplateButtonClick() {
        await this.addTemplatePopupNewTemplateButton.click();
        await this.page.waitForSelector('#template-detail-save');
    }

    async addTemplatePopupChooseTemplateButtonClick() {
        await this.addTemplatePopupChooseTemplateButton.click();
        await this.page.waitForTimeout(1500);
    }

    async addTemplatePopupCancelButtonClick() {
        await this.addTemplatePopupCancelButton.click();
        await this.page.locator('#create-template-new-template').isHidden();
    }

    async exportButtonClick() {
        await this.exportButton.click();
        // await this.page.waitForSelector('#export-templates-export');
        await this.page.waitForTimeout(1500);
    }

    async exportPopupXButtonClick() {
        await this.exportPopupXButton.click();
        await this.page.locator('#export-templates-export').isHidden();
    }

    async exportPopupExportAllRadioButtonClick() {
        await this.exportPopupExportAllRadioButton.click();
    }

    async exportPopupExportSelectedRadioButtonClick() {
        await this.exportPopupExportSelectedRadioButton.click();
    }

    async exportPopupCancelButtonClick() {
        await this.exportPopupCancelButton.click();
        await this.page.locator('#export-templates-export').isHidden();
    }

    async exportPopupExportButtonClick() {
        await this.exportPopupExportButton.click();
        await this.page.waitForTimeout(1500);
    }

    async exportEmailPopupXButtonClick() {
        await this.exportEmailPopupXButton.click();
    }

    async exportEmailPopupCancelButtonClick() {
        await this.exportEmailPopupCancelButton.click();
    }

    async checkboxSelectAllClick() {
        await this.checkboxSelectAll.click();
        await this.page.waitForTimeout(1000);
    }

    async tamplateNameFilterClick() {
        await this.tamplateNameFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async modelFilterClick() {
        await this.modelFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async visibilityFilterClick() {
        await this.visibilityFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async permissionsFilterClick() {
        await this.permissionsFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async clientFilterClick() {
        await this.clientFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async payTractsFilterClick() {
        await this.payTractsFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async createdFilterClick() {
        await this.createdFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async editedFilterClick() {
        await this.editedFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-edit');
        await this.threeDotsMenuEditButton.click();
        await this.page.waitForSelector('#template-detail-save');
    }

    async threeDotsMenuSaveAsNewButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuSaveAsNewButton.click();
    }

    async threeDotsMenuShareAccessButtonClcik() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuShareAccessButton.click();
    }

    async threeDotsMenuCreateContractButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuCreateContractButton.click();
    }

    async threeDotsMenuButton1CreateContractButtonClick() {
        await this.threeDotsMenuButton1.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuCreateContractButton.click();
    }

    async threeDotsMenuDeleteButtonClick() {
        await this.threeDotsMenuButton.click();
        // await this.page.waitForSelector('.action-remove');
        await this.page.waitForTimeout(500);
        await this.threeDotsMenuDeleteButton.click();
        // await this.page.waitForSelector('#confirm-modal-delete');
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuCloseAction() {
        await this.threeDotsMenuClose.click();
        await this.page.locator('.mat-menu-content').isHidden();
    }

    async deletePopupCancelButtonClick() {
        await this.deletePopupCancelButton.click();
        await this.page.waitForTimeout(500);
    }

    async deletePopupDeleteButtonClick() {
        await this.deletePopupDeleteButton.click();
        await this.page.locator('#confirm-modal-delete').isHidden();
    }
}


export {
    TemplatesPage
}