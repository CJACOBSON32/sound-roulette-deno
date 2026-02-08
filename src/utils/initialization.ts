import {Interaction} from "npm:discord.js@14.25.1";
import * as path from "jsr:@std/path@1.1.3";
import {SlashCommandBuilder} from "npm:@discordjs/builders@1.13.0";
import {Collection} from "npm:@discordjs/collection@2.1.1";
import * as fs from 'node:fs';
import { toFileUrl } from "jsr:@std/path@1.1.3/windows/to-file-url";

export type CommandDefinition = {
    data: SlashCommandBuilder,
    execute: (interaction: Interaction) => Promise<void>
}

export async function readCommands(directory: string) {
    const commands: Collection<string, CommandDefinition> = new Collection();
    const commandFolders = Deno.readDir(directory);

    for await (const dirEntry of commandFolders) {
        if (dirEntry.isFile) {
            const filePath = path.join(directory, dirEntry.name);
            const command = await readCommand(filePath);
            commands.set(command.data.name, command);
        } else {
            const commandFiles = fs.readdirSync(directory).filter((file) => file.endsWith('.ts'));
            for (const file of commandFiles) {
                const filePath = path.join(directory, file);
                const command = await readCommand(filePath);
                commands.set(command.data.name, command);
            }
        }
    }

    return commands;
}

async function readCommand(filePath: string) {
    const actualPath = toFileUrl(filePath);
    const command = await import(actualPath.href) as CommandDefinition;

    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        return command;
    } else {
        throw new Error(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}