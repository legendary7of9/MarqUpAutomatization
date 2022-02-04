import { test , expect, chromium, Page } from '@playwright/test'
import { NewEditCopyModelPage, UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { ModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { DealAnalysisPage } from '../framework'
import { ExistingModelPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    //await sideBarMenu.sideBarModelClick();
    //await model.addModelButtonClick();
    //await model.addModelChooseButtonClick();
    //await users.AU();
    //await signIn.signInButton();
    //await page.waitForURL('/clients/265');
}); 


test('applyingPreliminaryDateToggleToAnyDeal @regChecklistNewMedium @newDealAnalysis', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const dealAnalysis = new DealAnalysisPage(page);
    const preliminaryDateCheckedUnchecked = page.locator('#deal-analysis-preliminary-date-input');
    console.log('dealAnalysis Applying Preliminary Date Toggle To Any Deal');
    await page.goto('/deals/analysis-deal/8264');
    await dealAnalysis.preliminaryCheckboxClick();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.signatureOkIconClick();
    await page.reload();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.preliminaryCheckboxClick();
    await page.goto('/deals/analysis-deal/8251');
    await page.waitForSelector('.mat-column-first_draft .mat-select-arrow-wrapper >> nth=0');
    await dealAnalysis.firstDraftDropDownChoose();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.preliminaryCheckboxClick();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.signatureOkIconClick();
    await page.reload();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.preliminaryCheckboxClick();
    await dealAnalysis.clearAllButtonFinalDraftClick();
    await dealAnalysis.clearAllPopupClearButtonClick();
    await dealAnalysis.firstDraftReopenButtonClick();
    await dealAnalysis.clearAllButton1stDraftClick();
    await dealAnalysis.clearAllPopupClearButtonClick();
    await page.goto('/deals/analysis-deal/8250');
    await page.waitForSelector('.mat-column-first_draft .mat-select-arrow-wrapper >> nth=0');
    await dealAnalysis.firstDraftDropDownChoose();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.preliminaryCheckboxClick();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.signatureOkIconClick();
    await page.reload();
    await expect(preliminaryDateCheckedUnchecked).toHaveAttribute('aria-checked', 'true');
    await dealAnalysis.preliminaryCheckboxClick();
    await dealAnalysis.clearAllButtonFinalDraftClick();
    await dealAnalysis.clearAllPopupClearButtonClick();
    await dealAnalysis.firstDraftReopenButtonClick();
    await dealAnalysis.clearAllButton1stDraftClick();
    await dealAnalysis.clearAllPopupClearButtonClick();
    })
