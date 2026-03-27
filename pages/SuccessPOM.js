const { expect } = require("@playwright/test")

class SuccessPOM{
    constructor(page){
        this.page=page
        this.successMsg=page.locator('xpath=//div[@class="sweet-alert  showSweetAlert visible"]')
        this.okButton=page.getByRole('button', { name: 'OK' })
    }

    async Order(){
        
        await this.page.pause()
        await this.okButton.click()
        await this.page.pause()
        
    }
}
module.exports=SuccessPOM;