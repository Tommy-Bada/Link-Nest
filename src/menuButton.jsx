import backButton from './assets/Avatar.svg'
import menuButton from './assets/Content.svg'

function BackButton(){
    if(screen.width >= 768){
        return(
            <div className="extra-button">
                <a href="#"> <img src={backButton} /></a>
            </div>
        )
    }
    else{
        return(
            <div className="extra-button">
                <a href="#"><img src={menuButton} /></a>
            </div>
        )
    }
}

export default BackButton