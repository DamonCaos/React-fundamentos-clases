import { client } from "../../../api/client";
import { Tweet } from "../tweets/types";

const tweetsURL = "api/tweets";

export const getLatestTweets = async () => {
        const response = await client.get<Tweet[]>(tweetsURL);
        const tweets: Tweet[] = response.data;

    return tweets; 
}