import {Interaction} from "npm:discord.js@14.25.1";
import {SlashCommandBuilder} from "npm:@discordjs/builders@1.13.0";
import * as helloWorld from "../commands/helloWorld.ts";
import {Collection} from "npm:@discordjs/collection@2.1.1";

export type CommandDefinition = {
    data: SlashCommandBuilder,
    execute: (interaction: Interaction) => Promise<void>
}

export function readCommands() {
    const commands: Collection<string, CommandDefinition> = new Collection();

    commands.set(helloWorld.data.name, helloWorld as CommandDefinition);

    return commands;
}