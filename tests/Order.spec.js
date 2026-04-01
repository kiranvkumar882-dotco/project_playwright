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
    await addItem.buyPhone()

    await page.pause()
    await cart.itemsVisible()

    await page.pause()
    await expect(cart.items).toBeVisible()

    await checkout.buy()
    await page.pause()

    await msg.Order()

})

test('Place Order: Monitor',async({page})=>{

    const myLogin1= new LoginPOM(page)
    const addMonitor= new ATCPOM(page)
    const newCheckout= new CheckoutPOM(page)
    const newCart=new ShowCart(page)
    const msgMonitor= new SuccessPOM(page)

    await myLogin1.validLogin()
    await page.pause()

    await page.on('display',async(display)=>{
        await expect(page.message()).toBe("Product added.")
        display.accept()
    })
    
    await addMonitor.buyMonitor()
    await page.pause()

    await addMonitor.purchaseMonitor()
    await page.pause()

    await newCart.itemsVisible()
    await page.pause()

    await expect(newCart.items).toBeVisible()
    await newCheckout.buy()

    await page.pause()
    await msgMonitor.Order()   
    
})

test('Logout',async({page})=>{
    
    const vin=new LoginPOM(page)
    await vin.validLogin()

    await page.pause()
    await expect(page.locator('xpath=//a[@id="logout2"]')).toBeVisible()
    
    const out=new Logout(page)
    await out.loggingOut()
    
})


