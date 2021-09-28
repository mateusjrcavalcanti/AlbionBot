const axios = require('axios');
const { AlbionGuild, AlbionNickname } = require('../../models');
module.exports = {
    name: 'registro',
    description: 'Use este comando para registrar seu personagem do Albion!',
    execute(message) {
        let nickName = message.content.replace(process.env.PREFIX + this.name + " ", "");
        if (nickName == "") return;
        axios.get('https://gameinfo.albiononline.com/api/gameinfo/search?q=' + nickName)
            .then(function(response) {
                // handle success
                const { data } = response;
                if (data.players.length > 0) {
                    AlbionNickname.count({
                        where: [{ nick: data.players[0].Name, discordServer: message.guild.id, }]
                    }).then(function(count) {
                        if (count == 0) {

                            AlbionGuild.findAll({
                                where: {
                                    discordServer: message.guild.id,
                                    guildId: data.players[0].GuildId,
                                }
                            }).then(AlbionGuils => {
                                AlbionNickname.destroy({
                                    truncate: false,
                                    where: {
                                        discordServer: message.guild.id,
                                        discordUser: message.author.id,
                                    },
                                });
                                //console.log(JSON.stringify(AlbionNickname));
                                AlbionNickname.create({ nick: data.players[0].Name, discordServer: message.guild.id, discordUser: message.author.id });
                                message.member.setNickname(data.players[0].Name);
                                let role = message.guild.roles.cache.find(role => role.name === data.players[0].GuildName);
                                message.member.roles.add(role);

                            })
                        }
                    });
                }

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