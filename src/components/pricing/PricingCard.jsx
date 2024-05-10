import React from 'react'
import './PricingCard.css'
import CheckIcon from '@mui/icons-material/Check';

const PricingCard = ({details}) => {
  return (
    <div className='pricing-wrapper'>
       <small>{details.type}</small>
       <h1>{details.currencyType} {details.amount}</h1>
       <p>Best for freelancer, indie hacker, single developer or solopreneurs</p>
       {
         details.features.map( (item) => (
            <ul>
                <li>
                    <CheckIcon sx={{fontSize:'16px'}}/>
                    <p>{item}</p>
                </li>
            </ul>
         ))
       }
       <button className='pricing-btn'>Get Started</button>
    </div>
  )
}

export default PricingCard