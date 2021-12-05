import { expect } from "@playwright/test"

class RegisterPage {
    page: any
    expect: any
  
      constructor(page: any) {
          this.page = page
      }
    }

    export {
        RegisterPage
    }