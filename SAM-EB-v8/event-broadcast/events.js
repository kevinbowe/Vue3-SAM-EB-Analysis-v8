// You can send up to 10 events to Amazon EventBridge simulataneously.

module.exports.params = {
	Entries: [
		{
			// Event envelope fields
			Source: 'custom.vue3sam-eb-analysis',
			EventBusName: 'default',
			DetailType: 'payment',
			Time: new Date(),

			// Main event body
			Detail: JSON.stringify({
				action: 'sendcard',
				amount: 222.74,
				location: 'NC-DUR-001',
				result: 'approved',
				remainingFunds: 200.20
			})
		},
		{
			// Event envelope fields
			Source: 'custom.vue3sam-eb-analysis',
			EventBusName: 'default',
			DetailType: 'payment',
			Time: new Date(),

			// Main event body
			Detail: JSON.stringify({
				action: 'sendcard',
				location: 'MA-BOS-001',
				amount: 300,
				result: 'approved',
				transactionId: '123456',
				cardPresent: true,
				partnerBank: 'Example Bank',
				remainingFunds: 722.34
			})
		},
		{
			// Event envelope fields
			Source: 'custom.vue3sam-eb-analysis',
			EventBusName: 'default',
			DetailType: 'payment',
			Time: new Date(),

			// Main event body
			Detail: JSON.stringify({
				action: 'sendcard',
				location: 'NC-DUR-001',
				amount: 11,
				result: 'approved',
				transactionId: '123451',
				cardPresent: true,
				partnerBank: 'Example Bank',
				remainingFunds: 711.00
			})
		},
		{
			// Event envelope fields
			Source: 'custom.vue3sam-eb-analysis',
			EventBusName: 'default',
			DetailType: 'payment',
			Time: new Date(),

			// Main event body
			Detail: JSON.stringify({
				action: 'sendcard',
				location: 'NY-NYC-001',
				amount: 20,
				result: 'approved',
				transactionId: '123457',
				cardPresent: true,
				partnerBank: 'Example Bank',
				remainingFunds: 212.52
			})
		},
		{
			// Event envelope fields
			Source: 'custom.vue3sam-eb-analysis',
			EventBusName: 'default',
			DetailType: 'payment',
			Time: new Date(),

			// Main event body
			Detail: JSON.stringify({
				action: 'sendcard',
				location: 'NY-NYC-002',
				amount: 60,
				result: 'denied',
				transactionId: '123458',
				cardPresent: true,
				remainingFunds: 5.77
			})
		}
	]
}