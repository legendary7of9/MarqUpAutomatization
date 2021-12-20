import { expect } from "@playwright/test"

class ForgotPasswordPage {
  page: any
  expect: any
  
      constructor(page: any) {
          this.page = page
      }

      async buttonBack() {

        //Shold be refactored
        await this.page.click('a');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
        const locator = this.page.locator('app-login.ng-star-inserted:nth-child(2) div.not-authorized:nth-child(2) div.authorized-popup div.authorized-popup__breadcrumbs > span.current-state.ng-star-inserted');
        await expect(locator).toHaveText(['Sign In']);
      }



    }

    export {
        ForgotPasswordPage,
    }