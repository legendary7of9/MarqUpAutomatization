import { Locator, Page } from '@playwright/test';


class ManageDisplay {
    test: any;
    page: Page;
    manageDisplayButton: Locator;
    manageDisplaySelectAll: Locator;
    manageDisplayModel: Locator;
    manageDisplayPermissions: Locator;
    manageDisplayClient: Locator;
    manageDisplayStatus: Locator;
    manageDisplayPaytracts: Locator;
    manageDisplayEdited: Locator;
    closeManageDisplay: Locator;

    constructor(page: Page) {
        this.manageDisplayButton = page.locator('#manage-display-btn');
        this.manageDisplaySelectAll = page.locator('#manage-display-select-all');
        this.manageDisplayModel = page.locator('#manage-display-model');
        this.manageDisplayPermissions = page.locator('#manage-display-is_securx');
        this.manageDisplayClient = page.locator('#manage-display-ownerAccount');
        this.manageDisplayStatus = page.locator('#manage-display-status');
        this.manageDisplayPaytracts = page.locator('#manage-display-is_paytracts');
        this.manageDisplayEdited = page.locator('#manage-display-edited');
        this.closeManageDisplay = page.locator('.manage-display-overlay');
    }

    async manageDisplayButtonClick() {
        await this.manageDisplayButton.click();
    }

    async manageDisplaySelectAllClick() {
        await this.manageDisplaySelectAll.click();
    }

    async manageDisplayModelClick() {
        await this.manageDisplayModel.click();
    }

    async manageDisplayPermissionsClick() {
        await this.manageDisplayPermissions.click();
    }

    async manageDisplayClientClick() {
        await this.manageDisplayClient.click();
    }

    async manageDisplayStatusClick() {
        await this.manageDisplayStatus.click();
    }

    async manageDisplayPaytractsClick() {
        await this.manageDisplayPaytracts.click();
    }

    async manageDisplayEditedClick() {
        await this.manageDisplayEdited.click();
    }

    async closeManageDisplayClick() {
        await this.closeManageDisplay.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    ManageDisplay
}