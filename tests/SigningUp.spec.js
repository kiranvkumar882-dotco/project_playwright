const {test,expect}=require('@playwright/test');
const POMSignin=require('../pages/POMSignin');

test.beforeEach(async({page})=>{
     await page.goto('https://demoblaze.com/')
    
})

test('Sign in ',async({page})=>{
    const signIn=new POMSignin(page)
    await signIn.signingIn()
    await page.screenshot({path: 'signIn.png'})

    page.on('Succesful SignIn',async(dialog)=> {
        expect(dialog.message()).toBe('Sign up successful.')
        await dialog.accept()
    
    })

    
})

test('Closing the signin box',async({page})=>{
    const signClose=new POMSignin(page)
    await signClose.close()
})



