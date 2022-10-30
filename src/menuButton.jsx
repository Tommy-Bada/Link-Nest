import backButton from './assets/Avatar.svg'
import menuButton from './assets/Content.svg'

function BackButton(){
    if(screen.width >= 768){
        return(
            <div className="extra-button">
                <img src={backButton} />
            </div>
        )
    }
    else{
        return(
            <div className="extra-button">
                <img src={menuButton} />
            </div>
        )
    }
}

export default BackButton