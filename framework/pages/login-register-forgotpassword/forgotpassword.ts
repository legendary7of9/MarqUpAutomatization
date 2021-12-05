import { expect } from "@playwright/test"

class ForgotPasswordPage {
    page: any
    expect: any
  
      constructor(page: any) {
          this.page = page
      }
    }

    export {
        ForgotPasswordPage
    }