module.exports = {
    findChannelByName: function(guild, name) {
        let channelsGuild = guild.channels.cache;
        let channel = channelsGuild.find(element => element.name == name);
        /*channelsGuild.forEach(function(channelGuild, channelGuildId) {
            if (channelGuild.name == name) {
                retorno = channelGuild;
            };
        }, channelsGuild);*/
        return channel;
    },
    createChannelConfig: function(guild) {
        return guild.channels.create("chronosbot", {
            type: "text",
            permissionOverwrites: [{
                id: guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                //allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], //Allow permissions
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
            }],
        })
    },
};