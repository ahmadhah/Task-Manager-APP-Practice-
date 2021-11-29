const Task = require('../models/task')
const asyncWrapper = require('../middleware/aync')

//* FIRST METHODS Without asyncWrapper
// const getAllTasks = asyncWrapper(async (req, res) => {
//     try {
//         const tasks = await Task.find()
//         res.status(201).json({ tasks })
//     }
//     catch (err) {
//         res.status(400).json({ msg: err })
//     }
// }
// )

//* second METHODS Without asyncWrapper
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find()
    res.status(201).json({ tasks })
}
)
const createTask = async (req, res) => {
    try {

        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }
    catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// * simple code 
const getTask = async (req, res) => {
    try {
        //? destruturing id from req.params
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `task not found with id ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
}




const deleteTask = async (req, res) => {
    try {
        //? destruturing id from req.params
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `task not found with id ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return res.status(404).json({ msg: `task not found with id ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask,
}