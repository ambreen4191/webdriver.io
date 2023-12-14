/* eslint wdio/await-expect: 0, max-len: ['warn', { 'code': 80 }] */
const webChat = require('../../../../lib/webChat');
const speclib = require('../../../../lib/speclib');
const { randomData } = require('../../../../lib/defaultconstantslib').TEST_DATA.request.sfr.randomData;
const shoppingPage = require('../../../../pages/salestracking/shopping.page');
const sidebarPage = require('../../../../pages/sidebar.page');

speclib.descSkipIf(speclib.RETAILER !== 'allenedmonds')(`${speclib.RETAILER} 
Sales floor Project`, () => {
  it('C185958 Verify that store selector question should be asked in book an appointment flow', () => {
    speclib.addTestId('185958');
    speclib.addModule(speclib.ALLURE.module.storefront);
    speclib.addSeverity(speclib.ALLURE.severity.major);

    speclib.addStepAutoNumber(`Open ${speclib.RETAILER} page`);

    speclib.addStepAutoNumber(shoppingPage.getShoppingUrl);
    speclib.openWebPage(shoppingPage.getShoppingUrl);

    speclib.addStepAutoNumber('click on Store Link');
    sidebarPage.defaultStoreLnk.click();

    speclib.addStepAutoNumber('validating Chatbot');
    expect(webChat.isChatbotDisplayed()).toBeExisting();

    speclib.addStepAutoNumber('click on Chatbot');
    webChat.clickOnChatbot();

    speclib.addStep(webChat.readMessage(1));
    expect(webChat.readMessageNumber(1)).toBeExisting();

    speclib.addStepAutoNumber(webChat.getVerifiedMessage(webChat.iWantShedulAnAppointment));
    expect(webChat.iWantShedulAnAppointment).toBeExisting();

    speclib.addStepAutoNumber("click on 'I want schedule  an appointment' Option");
    webChat.iWantShedulAnAppointment.click();

    speclib.addStepAutoNumber("click on 'in a store' Options");
    webChat.inAStoreOptions.click();

    speclib.addStep(webChat.readMessage(5));
    expect(webChat.readMessageNumber(5)).toBeExisting();

    speclib.addStepAutoNumber(`enter text in type field: ${randomData}`);
    webChat.enterValueInTypeField(webChat.typeButton, randomData);

    speclib.addStepAutoNumber(webChat.readMessage(7));
    expect(webChat.readMessageNumber(7)).toBeExisting();

    speclib.addStepAutoNumber("verify 'list of store' is displaying");
    expect(webChat.findAnotherStoreButton).toBeExisting();
  });
});
