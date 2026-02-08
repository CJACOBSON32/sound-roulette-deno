// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
import { Client, Events, GatewayIntentBits } from "npm:discord.js@14.25.1";
import * as path from "jsr:@std/path@1.1.3";
import {readCommands} from "./utils/initialization.ts";


if (import.meta.main) {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once(Events.ClientReady, (readyClient) => {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });

    client.login(Deno.env.get("DISCORD_TOKEN"));

    const foldersPath = path.join(import.meta.dirname ?? "", 'commands');
    readCommands(foldersPath);
}
