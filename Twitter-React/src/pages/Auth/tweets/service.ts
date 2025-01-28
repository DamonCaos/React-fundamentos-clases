import { client } from "../../../api/client";
import { Tweet } from "../tweets/types";
const tweetsURL = "api/tweets";



export const getLatestTweets = async () => {
        const tweets: Tweet[] =  await client.get<Tweet[]>(tweetsURL) ;

    return tweets; 
}