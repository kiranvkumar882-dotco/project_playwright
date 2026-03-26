const { expect } = require("@playwright/test")
const CheckoutPOM=require('./CheckoutPOM')

class ShowCart{
    constructor(page){
        this.page=page
        this.items=page.locator('xpath=//div[@class="table-responsive"]')
        this.total = page.locator('xpath=//div[@class="col-lg-1"]//h2[normalize-space()="Total"]')
        this.amt=page.locator('xpath=//h3[@id="totalp"]')
        this.placOrder=page.locator('xpath=//button[@data-target="#orderModal"]')

    }
    async itemsVisible(){
        
        await this.placOrder.click()
        return new CheckoutPOM(this.page)

    }
}
module.exports=ShowCart;