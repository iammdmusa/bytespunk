// eslint-disable-next-line @typescript-eslint/no-unused-vars
function get(id: string): ReturnType<typeof cy.get> {
	return cy.get(`[data-testid="${id}"]`)
}

describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the fruit gallery correctly', () => {
		cy.visit('/')
		cy.location('pathname').should('eq', '/')
	})
})
