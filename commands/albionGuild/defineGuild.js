const { config } = require("dotenv");
config({
    path: __dirname + "/.env"
});
const axios = require('axios');
const { AlbionGuild } = require('../../models');
module.exports = {
    name: 'guildname',
    description: 'Use este comando para defiir qual a guild do servidor!',
    permissions: 'MANAGE_GUILD',
    execute(message) {
        let guildName = message.content.replace(process.env.PREFIX + this.name + " ", "");
        console.log('https://gameinfo.albiononline.com/api/gameinfo/search?q=' + guildName);
        axios.get('https://gameinfo.albiononline.com/api/gameinfo/search?q=' + guildName)
            .then(function(response) {
                // handle success
                const { data } = response;
                AlbionGuild.destroy({
                    truncate: false,
                    where: {
                        discordServer: message.guild.id
                    },
                });
                AlbionGuild.create({ name: data.guilds[0].Name, discordServer: message.guild.id, guildId: data.guilds[0].Id });
                // Create a new role with data and a reason
                message.guild.roles.create({
                        name: data.guilds[0].Name,
                        color: 'BLUE',
                        reason: 'Cargo para membros da guild',
                    }).then(console.log)
                    .catch(console.error);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    },
};