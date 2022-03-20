import facebookSVG from '../../assets/icons/facebook-f-brands.svg'
import instagramSVG from '../../assets/icons/instagram-brands.svg'
import youtubeSVG from '../../assets/icons/youtube-brands.svg'
import linkedinSVG from '../../assets/icons/linkedin-brands.svg'
import twitchSVG from '../../assets/icons/twitch-brands.svg'
import telegramSVG from '../../assets/icons/telegram-brands.svg'
import showerSVG from '../../assets/icons/shower-solid.svg'
import personBothSVG from '../../assets/icons/person-booth-solid.svg'
import creditCardSVG from '../../assets/icons/credit-card-solid.svg'
import racquetSVG from '../../assets/icons/racquet-solid.svg'
import magnifylensSVG from '../../assets/icons/magnifing-lens.svg'
import ballSVG from '../../assets/icons/ball.svg'

const imgStyle = {
    maxWidth: '100%',
}

const iconMap = {
    facebook: <img alt="icon" style={imgStyle} src={facebookSVG} />,
    instagram: <img alt="icon" style={imgStyle} src={instagramSVG} />,
    youtube: <img alt="icon" style={imgStyle} src={youtubeSVG} />,
    linkedin: <img alt="icon" style={imgStyle} src={linkedinSVG} />,
    twitch: <img alt="icon" style={imgStyle} src={twitchSVG} />,
    telegram: <img alt="icon" style={imgStyle} src={telegramSVG} />,
    shower: <img alt="icon" style={imgStyle} src={showerSVG} />,
    personBoth: <img alt="icon" style={imgStyle} src={personBothSVG} />,
    creditCard : <img alt="icon" style={imgStyle} src={creditCardSVG} />,
    racquet : <img alt="icon" style={imgStyle} src={racquetSVG} />,
    magnifyLens : <img alt="icon" style={imgStyle} src={magnifylensSVG} />,
    ball : <img alt="icon" style={imgStyle} src={ballSVG} />
}

export default iconMap