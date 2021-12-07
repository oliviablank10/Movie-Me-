import React from 'react'
import { IoIosHeartEmpty} from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

// Icons from https://react-icons.github.io/react-icons/icons?name=io
function FavButton() {
    
    return (
        <>
           <button className="favoriteButton"><IoIosHeart 
           style={{stroke: 'red', strokeWidth: 20}} 
           /></button>
        </>
    )
}
// https://pretagteam.com/question/hover-and-focus-inline-style-in-react-doesnt-work
export default FavButton







{/* on click or on hover fill in heart and add to favorites array, filled in heart icon is below */}
           {/* <IoIosHeart className="favoriteButton"/> */}