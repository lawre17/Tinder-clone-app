import { useEffect, useState } from "react"
import TinderCard from "react-tinder-card"
import '../Css/TinderCards.css'
import { collection,onSnapshot} from 'firebase/firestore';
import database from "../firebase"
import Header from "./Header";

function TinderCards() {
    const [potential, setPotential] = useState([])
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
            .then(res => res.json())
        .then(data =>setPotential(data.results))
    },[])



    return ( 
        <div>
            <Header/>
            <div>
                <div className="card-container">
                    {
                        potential.map((person) => (
                            
                            <TinderCard
                                className="swipe"
                                key={person.location.postcode}
                                preventSwipe={[['up','down']]}
                            >
                                <div
                                    style={{ objectFit: 'cover', backgroundImage: `url(${person.picture.large})`}}
                                    className="card">
                                    <h3>{ person.name.title+" "+person.name.first+","+person.dob.age}</h3>
                                </div>
                            </TinderCard>
                        ))
                    }
                </div>
            </div>
        </div>
     )
    
}

export default TinderCards;