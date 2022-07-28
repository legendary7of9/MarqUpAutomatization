import { Locator, Page } from '@playwright/test';


class TemplatesPage {
    test: any;
    page: Page;
    expect: any;
    addTemplateButton: Locator;
    addTemplatePopupNewTemplateButton: Locator;
    addTemplatePopupChooseTemplateButton: Locator;
    addTemplatePopupCancelButton: Locator;
    exportButton: Locator;
    checkboxSelectAll: Locator;
    tamplateNameFilter: Locator;
    visibilityFilter: Locator;
    permissionsFilter: Locator;
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

    constructor(page: Page) {
        this.page = page;
        this.addTemplateButton = page.locator('#templates-list-add-template');
        this.addTemplatePopupNewTemplateButton = page.locator('.mat-button >> text=New template'); //to be refactored
        this.addTemplatePopupChooseTemplateButton = page.locator('.mat-button >> text=Choose a template'); //to be refactored
        this.addTemplatePopupCancelButton = page.locator('.mat-button >> text=Cancel'); //to be refactored
        this.exportButton = page.locator('#templates-list-export');
        this.checkboxSelectAll = page.locator('#templates-list-select-all');
        this.tamplateNameFilter = page.locator('#template-name-column-sort');
        this.visibilityFilter = page.locator('#visibility-column-sort');
        this.permissionsFilter = page.locator('#premissions-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.payTractsFilter = page.locator('#paytracts-column-sort');
        this.createdFilter = page.locator('#created-column-sort');
        this.editedFilter = page.locator('#edited-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuButton1 = page.locator('.mat-icon-button >> nth=1');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
        this.threeDotsMenuShareAccessButton = page.locator('.context-menu-share-access');
        this.threeDotsMenuCreateContractButton = page.locator('.context-menu-create-contract');
        this.threeDotsMenuDeleteButton = page.locator('.context-menu-delete');
    }

    async addTemplateButtonClcik() {
        await this.addTemplateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addTemplatePopupNewTemplateButtonClick() {
        await this.addTemplatePopupNewTemplateButton.click();
        await this.page.waitForTimeout(1500);
    }

    async addTemplatePopupChooseTemplateButtonClick() {
        await this.addTemplatePopupChooseTemplateButton.click();
        await this.page.waitForTimeout(1500);
    }

    async addTemplatePopupCancelButtonClick() {
        await this.addTemplatePopupCancelButton.click();
    }

    async exportButtonClick() {
        await this.exportButton.click();
    }

    async checkboxSelectAllClick() {
        await this.checkboxSelectAll.click();
    }

    async tamplateNameFilterClick() {
        await this.tamplateNameFilter.click();
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
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuEditButton.click();
        await this.page.waitForTimeout(1000);
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
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuDeleteButton.click();
    }
}


export {
    TemplatesPage
}