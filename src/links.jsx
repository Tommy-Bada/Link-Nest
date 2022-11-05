import slack from './assets/slack.svg'
import github from './assets/github.svg'
import { Link, NavLink } from 'react-router-dom'

function Links(){
    return(
        <main>
        <a href="https://twitter.com/Badman_Bada" id="twitter__link">Twitter</a>
        <a href="https://training.zuri.team/" id="btn__zuri" >Zuri Team</a>
        <a href="http://books.zuri.team/" title="This is where I get books relating to design and coding" id="books">Get Amazing Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=BadaScript" id="book__python" >Get Amazing Books for Python</a>
        <a href="https://background.zuri.team/" id="pitch">Check Coders Background</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" >Get Zuri Design Books</a>
        <Link to="/contact" id='contact' >Contact Bada</Link>
        <div className='link-logos'>
            <div><img src={slack} /></div>
            <div><img src={github} /></div>
        </div>
        </main>
    )
}

export default Links