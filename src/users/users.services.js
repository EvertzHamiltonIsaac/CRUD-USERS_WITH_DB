const e = require('express')
const users_controller = require('./users.controllers')

const getAllUsers = async (req, res) => {
     users_controller.findAllUsers()
        .then((data) => { res.status(200).json(data)})
        .catch((err) => {res.status(400).json({message: err.message})})
}

const getUserById = async (req, res) => {
    const id = req.params.id
    users_controller.findUserById()
        .then((data) => {
            if(data){
                res.status(201).json(data)
            }else{
                res.status(404).json(data)
            }
        })
        .catch((err) => {res.status(400).json({message: 'INVALID ID'})})
}

const postUser = async (req, res) => {
    const {first_name, last_name, email, password , birthday} = req.body
    const newUser = {
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    users_controller.createUser(newUser)
    .then((data) => {res.status(201).json(data)})
    .catch((err) => {res.status(400).json({message: err.message})})
}

const patchUser = async (req, res) => {
    const id = req.params.id
    const {first_name, last_name, email, password , birthday} = req.body

    users_controller.updateUser(id, {first_name, last_name, email, password , birthday})
    .then((data) => {
        if(data){
            res.status(200).json({message: 'Quote update succesfully'})
        }else{
            res.status(404).json({message: 'Users Not Found'})
        }
    })
    .catch((err) => {res.status(400).json({message: err.message})})
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    users_controller.deleteUser(id)
    .then((data) => {
        if(data){
            res.status(204).json({message: 'Quote deleted succesfully'})
        }
        else{
            res.status(404).json({message: 'Users Not Found'})
        }
    })
    .catch((err) => {res.status(400).json({message: err.message})})
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}


