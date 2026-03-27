const {test,expect}=require('@playwright/test');
const LoginPOM=require('../pages/LoginPOM')
const ATCPOM=require('../pages/ATCPOM')
const CheckoutPOM=require('../pages/CheckoutPOM')
const ShowCart=require('../pages/ShowCart')
const SuccessPOM=require('../pages/SuccessPOM')
const Logout=require('../pages/Logout')

test.beforeEach('Order Items',async({page})=>{

    await page.goto('https://demoblaze.com/')
    

})

//  test.afterEach('Logout',async({page})=>{
//     const LogoutButton=page.locator('xpath=//a[@onclick="logOut()"]')
//     await LogoutButton.click()
// })

test('Place Order: Phone',async({page})=>{
    
    const myLogin= new LoginPOM(page)
    const addItem= new ATCPOM(page)
    const checkout= new CheckoutPOM(page)
    const cart=new ShowCart(page)
    const msg= new SuccessPOM(page)

    myLogin.validLogin()

    await page.on('display',async(display)=>{

        await expect(display.message()).toBe('Product added.')
        display.accept()

    })

    await page.pause()
    addItem.buyPhone()
    await page.pause()
    cart.itemsVisible()
    await page.pause()
    await expect(cart.items).toBeVisible()
    checkout.buy()
    await page.pause()
    msg.Order()

})

test.only('Place Order: Monitor',async({page})=>{

    const myLogin1= new LoginPOM(page)
    const addMonitor= new ATCPOM(page)
    const newCheckout= new CheckoutPOM(page)
    const newCart=new ShowCart(page)
    const msgMonitor= new SuccessPOM(page)

    myLogin1.validLogin()
    await page.pause()

    await page.on('display',async(display)=>{
        await expect(page.message()).toBe("Product added.")
        display.accept()
    })
    
    addMonitor.buyMonitor()
    await page.pause()
    addMonitor.purchaseMonitor()
    await page.pause()
    newCart.itemsVisible()
    await page.pause()
   // await expect(newCart.items).toBeVisible()
    newCheckout.buy()
    await page.pause()
    msgMonitor.Order()   
    
})

test.afterEach('Logout',async({page})=>{
    const out=new Logout(page)
    out.loggingOut()
    await expect(page.locator('xpath=//a[@id="login2"]')).toBeVisible()
})


