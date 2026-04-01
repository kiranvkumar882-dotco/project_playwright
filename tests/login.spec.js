const {test,expect}=require('@playwright/test')
const LoginPOM=require('../pages/LoginPOM')
const credentials=require('../utils/credentials.json')

test.beforeEach('URL',async({page})=>{
    await page.goto('https://demoblaze.com/')
})

test('Valid Credentials',async({page})=>{
    const cred=new LoginPOM(page)
    await cred.validLogin()
    await expect(page.locator('xpath=//a[@id="nameofuser"]')).toBeVisible()
})


for(const data of credentials){

test(`Invalid credentials for ${data.username},${data.password}`,async({page})=>{ //use escape character

    const login=new LoginPOM(page)
    await login.invalidLogin(data.username,data.password)
    await page.on('dialog',async(dialog)=>{
    await dialog.accept()
    })
    await expect(page).toHaveURL('https://demoblaze.com/')
    
    
})

}
