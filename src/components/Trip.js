import React from 'react'
import Trip1 from "../assets/Rajstan.png"
import Trip2 from "../assets/Kerala.png"
import Trip3 from "../assets/ghat.png"
import Trip4 from "../assets/goa.png"
import Trip5 from "../assets/safari.png"
import Trip6 from "../assets/temple.png"
import Trip7 from "../assets/himalya.png"
import Trip8 from "../assets/banaras.png"
import Trip9 from "../assets/Konkan.png"
import Trip10 from "../assets/odisha.png"
import Trip11 from "../assets/Darjeeling.png"
import Trip12 from "../assets/sikkim.png"

import VacationData from './VacitaionData'

export default function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <VacationData
                    image={Trip1}
                    heading="Mystical Rajasthan"
                    text="Experience the vibrant culture of Rajasthan with a visit to majestic forts in Jaipur, the serene lakes of Udaipur, and the mesmerizing sand dunes of Jaisalmer. Rich history and vivid landscapes await."
                />
                <VacationData
                    image={Trip2}
                    heading="Kerala Backwaters Bliss"
                    text="Cruise through Kerala's tranquil backwaters on traditional houseboats. Witness serene landscapes, lush greenery, and authentic village life along the palm-fringed waterways."
                />
                <VacationData
                    image={Trip3}
                    heading="Trekking the Western Ghats"
                    text="Explore the pristine Western Ghats through trekking adventures. Discover hidden waterfalls, dense forests, and the tranquility of nature in its purest form."
                />
                <VacationData
                    image={Trip4}
                    heading="Bustling Mumbai to Peaceful Goa"
                    text="From the bustling streets of Mumbai to the serene beaches of Goa, this journey offers a delightful contrast. Embrace the urban chaos and coastal calmness."
                />
                <VacationData
                    image={Trip5}
                    heading="Wildlife Safari in Jim Corbett"
                    text="Embark on a thrilling wildlife safari in Jim Corbett National Park. Encounter majestic tigers, diverse flora, and the untamed beauty of the Himalayan foothills."
                />
                <VacationData
                    image={Trip6}
                    heading="Temple Trails of Tamil Nadu"
                    text="Discover the architectural wonders of Tamil Nadu's temples. Explore intricate Dravidian art and the spiritual aura of ancient religious sites."
                />
                <VacationData
                    image={Trip7}
                    heading="Himalayan Heights in Himachal"
                    text="Ascend into the majestic Himalayan heights of Himachal Pradesh. Experience the serenity of snow-capped peaks, pristine lakes, and charming mountain villages."
                />
                <VacationData
                    image={Trip8}
                    heading="Cultural Kaleidoscope in Varanasi"
                    text="Immerse in the cultural tapestry of Varanasi, where spirituality, ancient rituals, and the sacred Ganges River converge in a mesmerizing blend."
                />
                <VacationData
                    image={Trip9}
                    heading="Coastal Charms of Konkan"
                    text="Explore the untouched coastal charms of the Konkan region. Sun-kissed beaches, rustic fishing villages, and delectable seafood await."
                />
                <VacationData
                    image={Trip10}
                    heading="Historical Odyssey in Hampi"
                    text="Step back in time amidst the evocative ruins of Hampi. Witness the grandeur of ancient Vijayanagara Empire and intricate stone carvings."
                />
                <VacationData
                    image={Trip11}
                    heading="Tea Gardens of Darjeeling"
                    text="Relax amidst the rolling tea gardens of Darjeeling. Savor fragrant teas, lush green landscapes, and the panoramic views of the Himalayas."
                />
                <VacationData
                    image={Trip12}
                    heading="Sikkim's Enchanted Forests"
                    text="Embark on an enchanting journey through the forests of Sikkim. Explore pristine wilderness, serene monasteries, and breathtaking vistas in the lap of the Eastern Himalayas."
                />




            </div>
        </div>
    )
}
