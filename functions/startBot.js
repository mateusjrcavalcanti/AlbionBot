const { findChannelByName, createChannelConfig } = require('../functions/channels');
const { sendMessagesChannelConfig } = require('../functions/messages');

module.exports = {
    inicializaBot: function(client) {

        // Em @Guilds temos todos os servidores
        var Guilds = client.guilds.cache;
        Guilds.forEach(function(Guild, GuildId) {

            //--> Criar se não existir um canal de configurações
            let channelConfig = findChannelByName(Guild, "chronosbot");
            if (channelConfig == undefined) {
                channelConfig = createChannelConfig(Guild);
            } else {
                sendMessagesChannelConfig(channelConfig);
            }

        }, Guilds)

        //--> Definindo o status do BOT como online
        client.user.setPresence({
            status: "online",
            game: {
                name: "Albion Online",
                type: "STREAMING"
            }
        });
        console.log(`Eae, o ${client.user.username} está online!`);
    },
};