import { SlashCommandBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction } from "discord.js";


export const data = new SlashCommandBuilder().setName('helloWorld').setDescription('Replies with \"Hello world!\"');

export async function execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply('Hello world!');
}