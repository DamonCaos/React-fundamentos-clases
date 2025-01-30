import Button from "../../../components/button";
import "./TweetsPage.css"
import clsx from "clsx";
import { getLatestTweets } from "..//tweets/service";
import { useEffect, useState } from "react";
import { Tweet } from "../tweets/types";

const green = true;

interface Props {
    onLogout: () => void;
}

function TweetsPage() {

    const [tweets, setTweets] = useState<Tweet[]>([]);
    useEffect(() => {
        getLatestTweets().then((response) => {
            setTweets(response);
        });
    }, []);
   

    const habdleLogoutClick = async () => {
        await logout();
        onLogout();
    }


    return ( 
    <div className={clsx("tweets-page", { green })}>
        <h1 className="text-blue-600">Tweets Page</h1>
        <ul className="flex">
            {tweets.map((tweet) =>(
                <li key={tweet.id}>{tweet.content}</li>
            ))}
        </ul>
        <Button onClick={()=> {
            console.log("Button clicked")
        }}>Click me</Button>

        <Button variant="primary">primary</Button>
        </div>
)}

export default TweetsPage;