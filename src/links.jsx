import slack from './assets/slack.svg'
import github from './assets/github.svg'

function Links(){
    return(
        <main>
        <a href="https://twitter.com/Badman_Bada"  id="twitter__link">Twitter</a>
        <a href="https://training.zuri.team/" id="btn__zuri" >Zuri Team</a>
        <a href="http://books.zuri.team/" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=BadaScript" id="book__python" >Python Books</a>
        <a href="https://background.zuri.team/" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" >Design Books</a>
        <div className='link-logos'>
            <div><img src={slack} /></div>
            <div><img src={github} /></div>
        </div>
        </main>
    )
}

export default Links