const userModel = require('../models/userSchema.js')

const register = async(req, res) => {
    const { name, email, age, mobile, work, add, desc } = req.body

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(404).json({ message: "please fill the data" })
    }

    try {
        const checkIfUserExist = await userModel.findOne({ email: email })
        if (checkIfUserExist) {
            res.status(404).json({ message: "This user is already exist" })
        } else {
            const createUser = new userModel({
                name,
                email,
                age,
                mobile,
                work,
                add,
                desc
            })

            await createUser.save()
            res.status(201).json({ message: "user created success", data: createUser })
                //console.log(createUser)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


const getUsers = async(req, res) => {
    try {
        const data = await userModel.find()
        if (data) {
            res.status(200).json({
                message: "users success",
                data: data
            })
        } else {
            res.status(400).json({
                message: 'error users'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'server error',
            error: error
        })
    }
}


const getOneUser = async(req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById({ _id: id })
        if (user) {
            res.status(200).json({
                message: 'user finded',
                data: user
            })
        } else {
            res.status(400).json({
                message: 'not find user'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'server error',
            error: error
        })
    }
}


const update = async(req, res) => {
    const { id } = req.params
    try {
        const setUser = await userModel.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (setUser) {
            res.status(200).json({
                message: 'user updated success',
                data: setUser
            })
        } else {
            res.status(400).json({
                message: 'error to update user'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            error: error
        })

    }
}


const deleteUser = async(req, res) => {
    const { id } = req.params
    try {
        const dlt = await userModel.findOneAndDelete({ _id: id })

        if (dlt) {
            res.status(200).json({
                message: 'user deleted success',
                data: dlt
            })
        } else {
            res.status(400).json({
                message: 'error to delete user'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            error: error
        })

    }
}

module.exports = { register, getUsers, getOneUser, update, deleteUser }