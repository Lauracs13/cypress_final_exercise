var headerLocators = {
    homeLink: 'a:contains("Home")',
    contactLink: 'a:contains("Contact")',
    contactModal: '#exampleModal',
    emailInput: '#recipient-email',
    nameInput: '#recipient-name',
    messageInput: '#message-text',
    closeModalButton: '.close',
    aboutUsLink: 'a:contains("About us")',
    videoModal: '#videoModal',
    playButton: '.vjs-big-play-button',
    cartLink: 'a:contains("Cart")',
    loginLink: 'a:contains("Log in")',
    loginUsernameInput: '#loginusername',
    loginPasswordInput: '#loginpassword',
    submitButton: '.btn-primary',
    signUpLink: 'a:contains("Sign up")',
    signUsername: '#sign-username',
    signPassword: '#sign-password'    
}

class Header {
    homeLink() { return cy.get(headerLocators.homeLink) }
    contactLink() { return cy.get(headerLocators.contactLink) }
    contactModal() { return cy.get(headerLocators.contactModal) }
    emailInput() { return cy.get(headerLocators.emailInput) }
    nameInput() { return cy.get(headerLocators.nameInput) }
    messageInput() { return cy.get(headerLocators.messageInput) }
    closeModalButton() { return cy.get(headerLocators.closeModalButton) }
    aboutUsLink() { return cy.get(headerLocators.aboutUsLink) }
    videoModal() { return cy.get(headerLocators.videoModal) }
    playButton() { return cy.get(headerLocators.playButton) }
    cartLink() { return cy.get(headerLocators.cartLink) }
    loginLink() { return cy.get(headerLocators.loginLink) }
    loginUsernameInput() { return cy.get(headerLocators.loginUsernameInput) }
    loginPasswordInput() { return cy.get(headerLocators.loginPasswordInput) }
    submitButton() { return cy.get(headerLocators.submitButton) }
    signUpLink() { return cy.get(headerLocators.signUpLink) }
    signUsername() { return cy.get(headerLocators.signUsername) }
    signPassword() { return cy.get(headerLocators.signPassword) }
}

export default Header;
