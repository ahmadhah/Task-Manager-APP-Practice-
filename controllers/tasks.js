// {
//     getAllTasks,
//     createTask,
//     updateTask,
//     deleteTask,
//     getTask,
// }

const getAllTasks = async (req, res) => {
    res.status(200).send('getAllTasks')
}
const createTask = async (req, res) => {
    res.status(200).send('create task')
}
const updateTask = async (req, res) => {
    res.status(200).send('update')
}
const deleteTask = async (req, res) => {
    res.status(200).send('delete taks')
}
const getTask = async (req, res) => {
    res.status(200).send('get task')
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask,
}