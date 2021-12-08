import React from 'react'
import { IoMdCloseCircleOutline} from "react-icons/io";


// Icons from https://react-icons.github.io/react-icons/icons?name=io
function UnFavButton() {
    return (

        <div>
           <button className="favoriteButton"> <IoMdCloseCircleOutline  style={{stroke: 'red', strokeWidth: 20}} /></button>
           
        </div>
    )
}

export default UnFavButton;

// https://pretagteam.com/question/hover-and-focus-inline-style-in-react-doesnt-work

