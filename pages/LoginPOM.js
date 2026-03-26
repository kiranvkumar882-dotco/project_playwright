const ATCPOM=require('./ATCPOM')
class LoginPOM{
    constructor(page){
        this.page=page
        this.loginButton=page.locator('xpath=(//a[@class="nav-link"])[5]')
        this.loginusername=page.locator('#loginusername')
        this.loginpassword=page.locator('#loginpassword')
        this.loginSubmitButton=page.locator('xpath=(//button[@class="btn btn-primary"])[3]')

    }
    async validLogin(){
        await this.loginButton.click()
        await this.loginusername.fill('TestKiran')
        await this.loginpassword.fill('Testing@1234')
        await this.loginSubmitButton.click()
        return new ATCPOM(this.page)
    }

    async invalidLogin(username,password){
        await this.loginButton.click()
        await this.loginusername.fill(username)
        await this.loginpassword.fill(password)
        await this.loginSubmitButton.click()
        return this.page
    }
}
module.exports=LoginPOM;