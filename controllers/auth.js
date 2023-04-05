import User from '../models/User.js';
import bcrypt from "bcryptjs";
// req - то, что приходит со стороны клиента
// response - то, через что мы обрабатываем и отправляем обратно
//reg user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })

        if(isUsed) {
            return res.json({
                message: 'Данный username уже занят.',
            })
        }
    

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
        username,
        password: hash,
        })
c
    await newUser.save()

    res.json({
        newUser, message: 'Регистрация прошла успешно.',
    })
    }    
    catch (error) {
        res.json({ message: 'Ошибка при создании пользователя.' })
    }
    

}
//log user
export const login = async (req, res) => {
    try {

    }
    catch (error) {
        
    }
}
// getMe
export const getMe = async (req, res) => {
    try {

    }
    catch (error) {
        
    }
}