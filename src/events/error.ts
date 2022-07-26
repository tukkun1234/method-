import * as Discord from "discord.js-selfbot-v13";
import * as Logger from "../utils/logger";

export default async (Client: Discord.Client, error: Error) => {
	Logger.error(error.message);
};