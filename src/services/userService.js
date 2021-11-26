const db = require("../../database/models");
const userModel = db.User;
const { Op } = require("sequelize");

const userService = {
    async getUser(id){
        try {
            let user = await userModel.findOne({
                where: {
                    id: id,
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }        
    },
    async getUsers(){
        try {
            let users = await userModel.findAll();

            return users;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },
    async createUser(username, password){
        try {
            let user = await userModel.create({                
                username: username,
                password: password,
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }        
    },
    async updateUser(username, password, new_password){
        try {
            let userExist = await userModel.findOne({
                where: {
                    username,
                    password,
                }
            });

            if(!userExist){
                console.log("Usuario nao existe");
                return null;
            }
     
            userExist.password = new_password;

            await userExist.save();

            return userExist;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },

    async deleteUser(id){
        try {
            let user = await userModel.destroy({
                where: {
                    id: id,
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}


module.exports = userService;
