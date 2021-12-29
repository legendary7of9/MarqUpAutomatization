import { test , expect } from '@playwright/test'
import { USERS } from '../../framework'
import { signInPage } from '../../framework'
import { modelPage } from '../../framework'


test.beforeEach(async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('');

}); 

