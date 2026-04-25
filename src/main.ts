import { Client, Events, GatewayIntentBits } from "discord.js";
import { CommandDefinition, readCommands } from "./utils/initialization.ts";
import { Collection } from "@discordjs/collection";

type ExtendedClient = Client & {
    commands?: Collection<string, CommandDefinition>
}

if (import.meta.main) {
    const client: ExtendedClient = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once(Events.ClientReady, (readyClient) => {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });

    client.login(process.env.DISCORD_TOKEN);

    const commands = readCommands();

    client.commands = commands;
}
