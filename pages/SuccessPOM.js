const { expect } = require("@playwright/test")

class SuccessPOM{
    constructor(page){
        this.page=page
        this.successMsg=page.locator('xpath=//div[@class="sweet-alert  showSweetAlert visible"]')
        this.okButton=page.locator('xpath=//button[@class="confirm btn btn-lg btn-primary"]')
    }

    async Order(){
    
        await this.okButton.click()
        //await expect(this.successMsg).toBeHidden();
        
    }
}
module.exports=SuccessPOM;