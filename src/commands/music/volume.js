const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
    data: new SlashCommandBuilder().setName("volume").setDescription("Change volume of the current song")
    .addNumberOption((option) => option.setName("amount").setDescription("Choose amount of the volume").setRequired(true)),
    async execute(interaction, client) {
        const noSongEmbed = new EmbedBuilder()
			.setColor(`c3b4f7`)
			.setTitle(`There are no songs in the queue!`)
        	

        const amountOfVolume = interaction.options.getNumber("amount")

        const queue = client.player.getQueue(interaction.guildId)

        if (!queue) return await interaction.editReply({ embeds: [noSongEmbed] })

        queue.setVolume(amountOfVolume)
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor(`c3b4f7`)
                .setTitle("Changed volume")
                .setDescription(`Changed volume of the song to **${amountOfVolume}**`)
                .setTimestamp()
                .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
            ]
        })



    }
}