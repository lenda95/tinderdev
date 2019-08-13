const  { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    bio:{
        type: String
    },
    avatar:{
        type: String,
        required: true
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
},{
    timestamps: true,
    //Armazena as datas de criação e atualização do registro(createdAt,updateAt)
});

module.exports = model('Dev', DevSchema);