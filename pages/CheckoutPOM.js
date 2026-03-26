const SuccessPOM=require('./SuccessPOM')
class CheckoutPOM{
    constructor(page){
        this.page=page
        this.addName=page.locator('xpath=//input[@id="name"]')
        this.country=page.locator('xpath=//input[@id="country"]')
        this.city=page.locator('xpath=//input[@id="city"]')
        this.card=page.locator('xpath=//input[@id="card"]')
        this.month=page.locator('xpath=//input[@id="month"]')
        this.year=page.locator('xpath=//input[@id="year"]')
        this.purchase=page.locator('xpath=(//button[@class="btn btn-primary"])[3]')
        

    }
    async buy(){
        await this.addName.fill("Kiran")
        await this.country.fill("India")
        await this.city.fill("Trivandrum")
        await this.card.fill("3342342345")
        await this.month.fill("August")
        await this.year.fill("2026")
        await this.purchase.click()
        return new SuccessPOM(this.page)
    }
}
module.exports=CheckoutPOM;