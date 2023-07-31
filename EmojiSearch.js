import React, { useState } from 'react'
import './Emoji.css';
const emojiData=[
    {
         id:1,
         symbol:"😅",
         name:"Smile"
    },
    {
        id:2,
        symbol:"😡",
        name:"Angry"
    },
    {
        id:3,
        symbol:"☺️",
        name:"Blush"
    },
    {
        id:4,
        symbol:"🙃",
        name:"Sarcasm"
    },
    {
        id:5,
        symbol:"😜",
        name:"Wink"
    },
    {
        id:6,
        symbol:"😘",
        name:"Kiss"
    },
    {
        id:7,
        symbol:" 🤔",
        name:"Thinker"
    },
    {
        id:8,
        symbol:"🤣",
        name:"Lauging"
    },
    {
        id:9,
        symbol:"😭",
        name:"Crying"
    },
    {
        id:10,
        symbol:"😱",
        name:"Shocking"
    }]
function EmojiSearch() {
    const [SearchEmoji,setSearchEmoji] = useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji =emojiData.filter((emoji)=>{
const emojiName = emoji.name.toLowerCase();
return emojiName.includes(SearchEmoji.toLowerCase())
    });
  return (
    <div id="hello">
        <h1>React Emoji Search App</h1>
        <input type="text" placeholder='Search for the Emoji....'value={SearchEmoji} onChange={handleChange}></input>
        <div id="hello2">
            {
  showEmoji.map((emoji)=>emoji.symbol)
            }

        </div>
    </div>

  )
}

export default EmojiSearch