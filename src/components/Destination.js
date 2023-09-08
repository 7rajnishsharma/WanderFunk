import Zero1 from "../assets/ziro1.png"
import Zero2 from "../assets/ziro2.png"
import Spiti1 from "../assets/spiti1.png"
import Spiti2 from "../assets/spiti2.png"
import gorkana1 from "../assets/gorkana1.png"
import gorkana2 from "../assets/gorkana2.png"
import Dz1 from "../assets/dz1.png"
import Dz2 from "../assets/dz2.png"
import DestinationData from "./DestinationData"

const Destination = () => {
    return (
        <>


            <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>

                <DestinationData
                    className="first-des"
                    heading="Ziro Valley, Arunachal Pradesh"
                    text="Nestled in the northeastern region of Arunachal Pradesh, Ziro Valley offers a tranquil escape into nature's embrace. The landscape here is characterized by emerald-green hills, terraced rice fields, and the unique Apatani tribe's cultural heritage. Away from the tourist crowds, Ziro Valley beckons travelers with its serene ambiance and opportunities for immersive experiences. Trekking through the pristine terrain, exploring the Apatani way of life, and witnessing the traditional architecture create lasting memories. It's an off-the-beaten-path gem for those seeking authenticity and natural beauty."
                    img1={Zero1}
                    img2={Zero2}
                />

                <DestinationData
                    className="first-des-reverse"
                    heading="Spiti Valley, Himachal Pradesh"
                    text="Tucked away in the remote Himalayan region, Spiti Valley's stark beauty captivates with its arid deserts, craggy mountains, and ancient monasteries. Less frequented than its neighbor, Ladakh, Spiti offers a quieter escape into the Himalayas. The rugged landscapes, dotted with centuries-old monastic complexes, make it a paradise for explorers seeking solitude and breathtaking vistas. With its pristine lakes and untouched wilderness, Spiti presents an opportunity to connect with nature in its rawest form."
                    img1={Spiti1}
                    img2={Spiti2}
                />

                <DestinationData
                    className="first-des"
                    heading="Gokarna, Karnataka"
                    text="Gokarna, a tranquil coastal town in Karnataka, offers a serene getaway along the Arabian Sea. Its idyllic beaches, such as Om Beach and Kudle Beach, beckon with soft sands and clear waters, devoid of the tourist frenzy found in more popular destinations. The town's charm lies in its simplicity, where travelers can enjoy long walks along pristine shores, explore ancient temples, and immerse themselves in the laid-back coastal culture. Gokarna is an understated gem for those seeking a peaceful beachside escape."
                    img1={gorkana1}
                    img2={gorkana2}
                />

                <DestinationData
                    className="first-des-reverse"
                    heading="Dzukou Valley, Nagaland"
                    text="Hidden away in the northeastern state of Nagaland, Dzukou Valley remains a well-kept secret. It reveals rolling hills adorned with seasonal flowers, including the famed Dzukou lily. The valley's pristine beauty and untouched terrain beckon trekkers and nature enthusiasts. Here, travelers can embark on soul-soothing hikes and immerse themselves in the tranquility of the region. Dzukou Valley offers a chance to experience a lesser-known facet of India's northeastern charm, away from the tourist trail, where natural beauty takes center stage."
                    img1={Dz1}
                    img2={Dz2}
                />



            </div>



        </>

    )
}

export default Destination;