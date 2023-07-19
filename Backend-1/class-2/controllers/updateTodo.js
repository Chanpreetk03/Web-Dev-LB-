const Todo = require('../models/Todo')

exports.updateTodo = async (req, res) => {
	try {
		const { id } = req.params
		const { title, description } = req.body
		const todo = findByIdAndUpdate(
			{ _id: id },
			{ title, description, updatedAt: Date.now() },

			res.status(200).json({
				success: true,
				data: todo,
				message: "updated succesfully",
			})
		)
	} catch (err) {
		console.error(err)
		res.status(500).json({
			success: false,
			data: err.message,
			message: 'Server error',
		})
	}
}
