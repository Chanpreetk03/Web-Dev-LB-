const Todo = require('../models/Todo')

exports.getTodo = async (req, res) => {
	try {
		const todos = await Todo.find({})
		res.status(200).json({
			success: true,
			data: todos,
			message: 'Entire todos',
		})
	} catch (err) {
		console.error(err)
		res.status(500).json({
			success: false,
			data: err.message,
			message: 'Server error',
		})
	}
}

exports.getTodoByTd = async (req, res) => {
	try {
		const id = req.params.id
		const todo = await Todo.findById({ _id: id })

		//data not found
		if (!todo) {
			return res.status(404).json({
				success: false,
				message: 'no data found',
			})
		} else {
			res.status(200).json({
				success: true,
				data: todo,
				message: `todo ${id} data successfully fetched`,
			})
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({
			success: false,
			data: err.message,
			message: 'Server error',
		})
	}
}