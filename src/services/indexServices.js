//const db = require('../models/index')

const getAllUserView = async () => {
    try {
        const user = await db.user.findAll({
            attributes: ['username', 'fullname', 'phone', 'email'],
            raw: true,
        });
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const getUserById = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.user.findOne({
                where: { id: userid },
                raw: true,
            })
            if (users) {
                resolve(users);
            
            } else { resolve({}) }

        } catch (error) {
            reject(error)
        }
    })
}



module.exports = {
    getAllUserView: getAllUserView,
    getUserById: getUserById,
}