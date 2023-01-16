const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder().setName("skip").setDescription("Skips the current song"),
	async execute(interaction, client) {
		const queue = client.player.getQueue(interaction.guildId)




		if (!queue) return await interaction.reply({
			embeds: [new EmbedBuilder()
			.setColor(`c3b4f7`)
			.setTitle(`There are no songs in the queue!`)
			.setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
        ],
		})

        const currentSong = queue.current

		queue.skip()
        await interaction.reply({
            embeds: [
                new EmbedBuilder() 
                .setColor(`c3b4f7`)
                .setDescription(`${currentSong.title} has been skipped!`)
                .setThumbnail(currentSong.thumbnail)
				.setTimestamp()
				.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
            ]
        })
	},
}
