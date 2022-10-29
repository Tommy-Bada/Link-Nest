import profilePicture from './assets/profile-picture.png'

function Header(){
    return(
        <header>
        <div><img src={profilePicture} id="profile_img" /></div>
        <h2 id="twitter">Badman_Bada</h2>
        <h3 id="slack">BadaScript</h3>
        </header>
    )
}

export default Header