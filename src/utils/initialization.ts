import { Interaction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import * as helloWorld from "../commands/helloWorld.ts";
import { Collection } from "@discordjs/collection";

export type CommandDefinition = {
    data: SlashCommandBuilder,
    execute: (interaction: Interaction) => Promise<void>
}

export function readCommands() {
    const commands: Collection<string, CommandDefinition> = new Collection();

    commands.set(helloWorld.data.name, helloWorld as CommandDefinition);

    return commands;
}