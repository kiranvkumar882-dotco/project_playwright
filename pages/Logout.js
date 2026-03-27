class Logout{
    constructor(page){
        this.page=page
        this.logoutButton=page.locator('#logout2')

    }

    async loggingOut(){

        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
    }
}
module.exports=Logout;