const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder } = require("discord.js")

var cmdresume = "`/resume`";
var startaes = "` 𝚂𝚃𝙰𝚁𝚃 ||"
var endaes = "|| 𝙴𝙽𝙳`"
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pauses the music"),
	async execute(interaction, client) {
		const queue = client.player.getQueue(interaction.guildId)



		if (!queue) return await interaction.reply({
			embeds: [new EmbedBuilder()
			.setColor(`c3b4f7`)
			.setTitle(`There is no song playing!`)
			.setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
        ],
		})

		let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		})

        const song = queue.current

		queue.setPaused(true)
		await interaction.reply({
			embeds: [new EmbedBuilder()
			.setColor(`c3b4f7`)
            .setThumbnail(song.thumbnail)
			.setTitle(`Song paused. Use ${cmdresume} to resume playing.`)
            .setDescription(`Song in queue: [${song.title}](${song.url})\n\n${startaes}${bar}${endaes}`)
			.setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
        ],
		})

	},
}
