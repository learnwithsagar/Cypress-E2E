export class homePage {


    weblocators = {

        search_input: 'input[placeholder="Search"]',
        click_search: '.fa.fa-search',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',

        successMessages: 'div.alert.alert-success.alert-dismissible'


    }

    searchProduct(productName) {

        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }
    addToCart() {

        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(this.weblocators.successMessages)
    }

}
