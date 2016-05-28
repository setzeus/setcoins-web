export default {
	get(route) {
		return (
			fetch(route)
				.then(res => res.json())
				.catch(error => console.error(error))
		)
	},
	post(route, data) {
		fetch(route, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.catch(error => console.error(error))
	}
}