const { MessageEmbed } = require("discord.js");
module.exports = {
    sendMessagesChannelConfig: function(channel) {
        channel.bulkDelete(100);
        channel.send("\u200B");
        channel.send("*Configuração de Cargos*\n👨‍💼 Server Admin");
        channel.send("\u200B").then(function(message) {
            message.react("👨‍💼")
                //message.pin()
        }).catch(function() {
            //Something
        });

        return {};
    },
};

/*
 const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields({ name: 'Regular field title', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        channel.send(exampleEmbed);
*/