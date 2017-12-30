class MessageHandler{

    prefix;

    constructor(){

    }

    setPrefix(prefix){
        this.prefix = prefix;
    }

    handle(msg){
        if(msg.content === 'ping')
            msg.reply('pong');
    }

}