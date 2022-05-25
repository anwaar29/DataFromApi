import React, { createContext, useState } from 'react'
export const anr=createContext()
const Data = (props) => {
    const [name,setName]=useState([{

        "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "January 15 2022",
        "ImageAsset1"    : "https://c.ndtvimg.com/2022-01/qtklueco_katrina-kaif-_625x300_13_January_22.jpg",
        "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
        "Likes"         : "1000K"

    },
    {
   
    "Title" : " Justin Bieber to perform in New Delhi on October 18",
    "CategoryName"  : "Hollywood",
    "PublishedDate" : "January 15 2022",
    "ImageAsset2"    : "https://www.thehindu.com/incoming/s8xphp/article65456463.ece/alternates/FREE_1200/PEOPLE-BIEBER-LYME%20DISEASE",
    "BlogContent"   : "Pop star Justin Bieber is set to bring his Justice World Tour to New Delhi on October 18,",
    "Likes"         : "100K"

     }])
  return (
    <anr.Provider value={[name,setName]}>
      {props.children}
    </anr.Provider>
  )
}

export default Data