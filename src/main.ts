// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
import { Client, Events, GatewayIntentBits } from "npm:discord.js@14.25.1";
import {CommandDefinition, readCommands} from "./utils/initialization.ts";
import {Collection} from "npm:@discordjs/collection@2.1.1";

type ExtendedClient = Client & {
    commands?: Collection<string, CommandDefinition>
}

if (import.meta.main) {
    const client: ExtendedClient = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once(Events.ClientReady, (readyClient) => {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });

    client.login(Deno.env.get("DISCORD_TOKEN"));

    const commands = readCommands();

    client.commands = commands;

}
