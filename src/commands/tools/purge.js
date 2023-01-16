const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { channel } = require("diagnostics_channel")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const { PermissionFlagsBits } = require('discord.js');
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"
const backtickred = "```ansi\n[2;31m"
const backtickredend = "[0m\n```"

module.exports = {
    data: new SlashCommandBuilder()
                        .setName('purge')
                        .setDescription('Purges messages. NOTE : Any messages older than 2 weeks CANNOT be deleted!')
                        .addNumberOption(opt => opt.setName('amount').setDescription('Number of messages to delete').setRequired(true))
                        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
                
        async execute(interaction, client) {
        const numMessages = interaction.options.get('amount').value;

        const overhundred = new EmbedBuilder()
        .setTitle(`API Error`)
        .setColor(`c3b4f7`)
        .setDescription(`${backtickred}You cannot delete over 100 messages at a time due to Discord API Limits!\n${backtickredend}`)
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        const finishedpurge = new EmbedBuilder()
        .setColor(`c3b4f7`)
        .setTitle(`Operation Completed!`)
        .setDescription(`${backtickmulti}yaml\nSucessfully deleted ${numMessages} messages in ${interaction.channel.name}\n${backtickmulti}`)
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})



        if(numMessages > 100) {
            return await interaction.reply({ embeds: [overhundred]});
        }

        await interaction.channel.bulkDelete(numMessages);
        await interaction.reply({ embeds: [finishedpurge]});



    
    }
    
}
