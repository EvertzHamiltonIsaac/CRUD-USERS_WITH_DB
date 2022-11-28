const DBusers = require('../models/users.models')

const findAllUsers = async () => {
    const users = await DBusers.findAll()
    return users
}

const findUserById = async (id) => {
    const data = await DBusers.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createUser = async (obj) => {
    const data = await DBusers.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return data
}

const updateUser = async (id, obj) => {
    const data = await DBusers.update(obj, {
        where: {
            id: id
        }
    })

    return data[0]
}

const deleteUser = async (id) => {
    const data = await DBusers.destroy({
        where: {
            id:id
        }
    })

    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}


