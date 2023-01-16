const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed, PermissionFlagsBits  } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = ("```")
const backtick = ("`")

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option => option.setName("user").setDescription("Person to ban").setRequired(true))
    .addStringOption((option) => option.setName("reason").setDescription("Ban reason")),
		async execute(interaction, client) {

        const target = interaction.options.getUser("user") // Raw User
        const reason = interaction.options.getString("reason") || "No reason given" // Reason/No reason given
        const banhammer = await interaction.guild.members.fetch(target.id); // Ban command compatible User
        const moderator = interaction.user.tag

        //selfban
        if (target.id === interaction.user.id) {
            return interaction.reply({ content: `${backtickmulti}yaml\n❌ | You cannot ban yourself!${backtickmulti}`, ephemeral: true });    
        }

        //higher role embed
        const errEmbed = new EmbedBuilder()
        .setDescription(`You can't take action on ${backtick}${target.username}${backtick} since they have a higher role!`)
        .setColor("c3b4f7")

        //higher role
        if (banhammer.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        // bot
        if (target.bot) {
            return interaction.reply({ content: `You cannot ban a bot!`, ephemeral: true });
        }

        //check if bannable
        if (!banhammer.bannable) {
            return interaction.reply({ content: `I cannot ban this user! I do not have permissions or there might be a error`, ephemeral: true });
        }

        // the ban hammer strikes!
        await banhammer.ban({ reason });

        //success message
        const embed = new EmbedBuilder()
        .setTitle(`Sucessfully banned ${target.tag}`)
        .setColor(`c3b4f7`)
        .addFields(
            {name: "`Moderator`", value:`${moderator}`, inline: true},
            {name: "`Target`", value:`${target.tag}`, inline: true},
            {name: "`Reason`", value:`${reason}`, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        //send success message
        await interaction.reply({ embeds: [embed]});



        
    }}