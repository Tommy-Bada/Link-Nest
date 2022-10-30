import slack from './assets/slack.svg'
import github from './assets/github.svg'

function Links(){
    return(
        <main>
        <div><a href="https://twitter.com/Badman_Bada"  id="twitter__link"><button>Twitter</button></a></div>
        <div><a href="https://training.zuri.team/" id="btn__zuri" ><button>Zuri Team</button></a></div>
        <div><a href="http://books.zuri.team/" id="books"><button>Zuri Books</button></a></div>
        <div><a href="https://books.zuri.team/python-for-beginners?ref_id=BadaScript" id="book__python" ><button>Python Books</button></a></div>
        <div><a href="https://background.zuri.team/" id="pitch"><button>Background Check for Coders</button></a></div>
        <div><a href="https://books.zuri.team/design-rules" id="book__design" ><button>Design Books</button></a></div>
        <div className='link-logos'>
            <div><img src={slack} /></div>
            <div><img src={github} /></div>
        </div>
        </main>
    )
}

export default Links