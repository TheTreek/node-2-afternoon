let messages = [];
let messageId = 0;

module.exports = {
    create: (req,res)=>{
        const {text,time} = req.body;
        messages.push({id: messageId,text,time});
        messageId++;
        res.status(200).send(messages);
    },

    read: (req,res)=>{
        res.status(200).send(messages);
    },

    update: (req,res)=>{
        const {text} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },

    delete: (req,res)=>{
        const {id} = req.params.id;
        const i = messages.findIndex(message => message.id === id);
        messages.splice(i,1);
        res.status(200).send(messages);
    }
}