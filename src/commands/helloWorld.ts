import {SlashCommandBuilder} from "npm:@discordjs/builders@1.13.0";
import {ChatInputCommandInteraction} from "npm:discord.js@14.25.1";


export const data = new SlashCommandBuilder().setName('helloWorld').setDescription('Replies with \"Hello world!\"');

export async function execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply('Hello world!');
}