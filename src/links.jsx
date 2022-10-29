import slack from './assets/slack.svg'
import github from './assets/github.svg'

function Links(){
    return(
        <main>
        <div><a href="https://twitter.com/Badman_Bada" ><button id="twitter-link" >Twitter</button></a></div>
        <div><a href="https://training.zuri.team/" ><button id="btn_zuri" >Zuri Team</button></a></div>
        <div><a href="http://books.zuri.team/" ><button id="books" >Zuri Books</button></a></div>
        <div><a href="https://books.zuri.team/python-for-beginners?ref_id=BadaScript" ><button id="book_python" >Python Books</button></a></div>
        <div><a href="https://background.zuri.team/" ><button id="pitch" >Background Check for Coders</button></a></div>
        <div><a href="https://books.zuri.team/design-rules" ><button id="book_design">Design Books</button></a></div>
        <div className='link-logos'>
            <div><img src={slack} /></div>
            <div><img src={github} /></div>
        </div>
        </main>
    )
}

export default Links