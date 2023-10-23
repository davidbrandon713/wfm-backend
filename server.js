const express = require('express')
const cors = require('cors')

const app = express()
const port = 8081
app.use(express.json())
app.use(cors())

// app.get('/:item', async (req, res) => {
// 	try {
// 		await fetch(`https://api.warframe.market/v1/items/${req.params.item}`, {
// 			method: 'GET',
// 			headers: {
// 				'Access-Control-Allow-Origin': '*',
// 			},
// 		})
// 			.then((response) => response.json())
// 			.then((data) => res.status(200).json(data[0]))
// 	} catch (err) {
// 		res.status(500).json({ message: err.message })
// 	}
// })

app.get('/:item/orders', async (req, res) => {
	try {
		await fetch(
			`https://api.warframe.market/v1/items/${req.params.item}/orders?include=item`,
			{
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => res.status(200).json(data))
      .then(console.log(`GET ${req.params.item} orders`))
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

app.listen(port, () => {
	console.log(`\x1b[33mServer running on port ${port}.\x1b[39m`)
})
