const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"


module.exports = {
    data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("displays the current song queue")
    .addNumberOption((options) => options.setName("page").setDescription("Page number of the queue").setMinValue(1)),

    async execute(interaction, client) {
        const queue = client.player.getQueue(interaction.guildId)
        if (!queue || !queue.playing){
            return await interaction.reply({
                embeds: [new EmbedBuilder()
                .setColor(`c3b4f7`)
                .setTitle(`There are no songs in the queue!`)
            ],
            })
        }

        const totalPages = Math.ceil(queue.tracks.length / 10) || 1
        const page = (interaction.options.getNumber("page") || 1) - 1

        if (page + 1 > totalPages) 
            return await interaction.reply({
                embeds: [new EmbedBuilder()
                .setColor(`c3b4f7`)
                .setTitle(`Invalid Page. There are only a total of ${totalPages} pages of songs`)
            ],
            })
        
        const queueString = queue.tracks.slice(page * 10, page * 10 + 10).map((song, i) => {
            return `**${page * 10 + i + 1}.** \`[${song.duration}]\` ${song.title} -- <@${song.requestedBy.id}>`
        }).join("\n")

        const currentSong = queue.current

        await interaction.reply({
            embeds: [new EmbedBuilder()
                   .setColor(`c3b4f7`)
                    .setDescription(`**Currently Playing**\n` + (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title} -- <@${currentSong.requestedBy.id}>` : "None") +
                    `\n\n**Queue**\n${queueString}`
                    )
                    .setFooter({text: `Page ${page + 1} of ${totalPages} || /${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
                    .setTimestamp()
                    .setFooter({ text: `t`, })
                    .setThumbnail(currentSong.setThumbnail)
                    .setTimestamp()
            ]
        })


    }
}
