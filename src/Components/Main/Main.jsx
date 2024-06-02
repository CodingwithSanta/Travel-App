import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in peru raising over Machu Picchu,the so-called Lost City of Incas. This place is a popular amoung tourists as the sunrise from the Sun Gate is simply spectacular.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle:'Great Barrier Reff',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarcable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish"and"beauty". Always intersting to be in this place.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees: '$800',
    description: 'Explore the otherworldly landscapes of Cappadocia, Turkey, with its enchanting fairy chimneys and magical hot air balloon rides. Discover ancient cave dwellings, vibrant culture, and breathtaking vistas in every direction.'
  },

  {

    id:5,
    imgSrc: img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX',
    fees: '$1100',
    description: 'Discover the vibrant culture and rich history of Guanajuato, Mexico, where colorful streets and colonial architecture await you. Immerse yourself in the enchanting atmosphere of this UNESCO World Heritage city, renowned for its festivals and stunning landscapes.'
  },
  {

    id:6,
    imgSrc: img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees: '$840',
    description: 'Discover the breathtaking beauty of Cinque Terre, Italy! enchanting coastal paradise. Explore vibrant villages, stunning cliffs, and crystal-clear water.'
  },


  {
    id:7,
    imgSrc: img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees: '$790',
    description: 'Discover the vibrant coastal charm and breathtaking landscapes of Cinque Terre Cambodia, where adventure meets serenity.Experience the perfect blend of culture and nature in Cinque Terre Cambodia, a hidden gem for travelers seeking unforgettable beauty.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees: '$900',
    description: 'Discover the timeless beauty of the Taj Mahal, India!s iconic symbol of love and architectural marvel. Experience the splendor of the Taj Mahal, a UNESCO World Heritage site and one of the New Seven Wonders of the World.'
  },


  {
    id:9,
    imgSrc: img9,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Discover Bali!s breathtaking beaches, lush rice terraces, and vibrant culture.Experience paradise in Bali with world-class resorts and exhilarating adventures'
  },
]


const Main = () => {
 //  Lets create a react hook to add a scroll animation...

   useEffect(() => {
   Aos.init({duration:2000})
   }, []) 

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main