import { test , expect } from '@playwright/test'
import { url } from 'inspector'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { ViewingModelPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { DealAnalysisPage } from '../framework'
import { ExistingModelPage } from '../framework'
import { ModelPage } from '../framework'
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
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
});