import React from 'react';
import {useStaticQuery, Link} from 'gatsby'



import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'
import PostData from '../../templates/countries.json'

const Countries = ({postInfo}) => {

let articleInfo = postInfo
// console.log(postInfo)

let countryCode
let country = postInfo.country
PostData.find((item) => {
    if (country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase() == item.name)
        countryCode = item.alpha2
})

    return (
        <div>
         
         <Link to={`/results/${country}`}
            style={{display: 'inline-block'}}
            
            articleInfo={postInfo.title}
            >
              <p>{articleInfo.title}</p>
                {countryCodeToFlagEmoji(countryCode)}
            </Link>
          
        </div>
    );
}

export default Countries;
