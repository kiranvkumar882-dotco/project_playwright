const ShowCart=require('./ShowCart')
class ATCPOM{
    constructor(page){
        this.page=page
        this.product=page.locator('xpath=(//a[@class="hrefch"])[1]')
        this.addtocart=page.locator('xpath=//a[@onclick="addToCart(1)"]')
        this.phone=page.locator('xpath=(//a[@class="list-group-item"])[2]')
        this.newphone=page.locator('xpath=(//a[@class="hrefch"])[3]')
        this.addphone=page.locator('xpath=//a[@onclick="addToCart(3)"]')
        this.icon=page.locator('xpath=(//a[@class="nav-link"])[4]')

        this.monitorTab=page.locator('xpath=(//a[@id="itemc"])[3]')
        this.appleMonitor=page.locator('xpath=(//a[@href="prod.html?idp_=10"])[2]')
        this.addToCartMonitor=page.locator('xpath=(//a[@href="#"])[7]')

        


    }

    async addingItem(){
        await this.product.click()
        await this.addtocart.click()
        return this
    }

    async buyPhone(){
        await this.phone.click()
        await this.newphone.click()
        await this.addphone.click()
        await this.icon.click()
        return new ShowCart(this.page)

    }

    async buyMonitor(){

        await this.page.pause()
        await this.monitorTab.click()

    }

    async purchaseMonitor(){
        await this.appleMonitor.click()
        await this.page.pause()
        await this.addToCartMonitor.click()
        await this.page.pause()
        await this.icon.click()
        return new ShowCart(this.page)
        
    }
}
module.exports=ATCPOM;