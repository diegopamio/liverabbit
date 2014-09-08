// spec.js
describe('liverabbit homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:1337/');
        element(by.id('usuario')).sendKeys('diego');
        element(by.id('password')).sendKeys('secreta');
        element(by.id('loginButton')).click();
        var loginMessage = element(by.id('loginResultMessage'));
        expect(loginMessage.isPresent()).toBe(true);
        expect(loginMessage.getText()).toEqual('Login Correcto');
    });
});