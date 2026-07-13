import { cities } from "../globals"
import "../styles/serviceArea.scss"

interface ServiceAreaProps {
    version: 'v1' | 'v2' 
}

export default function ServiceArea({version} : ServiceAreaProps) {
    if (version === 'v1') {
        return (
            <div className="service-area v1">
                <img src='map.png'/>
                <h2>Service Area</h2>
                <div className="gap"/>
                <span className="tertiary"><h3>Pennsylvania</h3></span>
                <hr/>
                <ol>
                    { cities.sort().map((city) => (
                        <p key={city}>{city}</p>
                    ))}
                </ol>
                <div className="gap"/>
                <p><span className="bold">Not in our service area?</span></p>
                <span className="tertiary"><p>Reach out anyway, we may still be able to help</p></span>
            </div>
        )
    }

    if (version === 'v2') {
        return (
            <div className="service-area-v2-wrapper">
                <img className="background" src="../service_area_background.jpg"/>
                <div className="service-area v2">
                    <div className="content">
                        <div className="headers">
                            <h1>Service Area</h1>
                            <h2>Pennsylvania</h2>
                        </div>
                        <div className="cities">
                            { cities.sort().map((city) => (
                                <p key={city}>{city}</p>
                            ))}
                        </div>
                        <div className="not-in-our-area">
                            <p className="bold">Not in our service area?</p>
                            <p>Reach out anyway, we may still be able to help</p>
                        </div>
                    </div>
                    <hr />
                    <div className="image">
                        <img className="map" src='map.png' height={'100px'} width={'100px'}/>
                    </div>
                </div>
            </div>
        )
    }
}