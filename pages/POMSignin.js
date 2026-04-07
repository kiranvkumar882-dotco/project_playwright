const { expect } = require("allure-playwright")
const { register } = require("node:module")

class POMSignin{

constructor(page){{ //PAGE FACTORY DESIGN - TO AVOID DUPLICATE LOCATORS
    this.page=page
    this.link=this.page.locator('xpath=//a[@id="signin2"]')
    this.username=page.locator('#sign-username')
    this.password=page.locator('#sign-password')
    this.registerButton=page.locator('xpath=//button[@onclick="register()"]')
    this.page=page
    this.link=page.locator('#signin2')
    this.closeButton=page.locator('xpath=(//button[@data-dismiss="modal"])[4]')


}}

async signinLink(){
    await expect(this.link).toBeVisible()
    return this
}

async signingIn(){
    
    await this.link.click()
    await this.username.fill('TestKiran')
    await this.password.fill('Testing@1234')
    await this.registerButton.click()
    return this

}

async close(){
        await this.link.click()
        await this.closeButton.click()
        return this
    }


}
module.exports=POMSignin;