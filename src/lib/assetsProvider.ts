import ArrowLight from '@/assets/ic_arrow.svg'
import ArrowDark from '@/assets/ic_arrow_dark.svg'
import Logo from '@/assets/ic_logo.svg'
import HeaderBG from '@/assets/ic_header_bg.png'
import Menu from '@/assets/ic_menu.svg'
import Close from '@/assets/ic_close.svg'
import RightArrowLight from '@/assets/ic_right_arrow.svg'
import DownloadArrow from '@/assets/ic_download_arrow.svg'
import CodeIcon from '@/assets/ic_code.svg'
import EduIcon from '@/assets/ic_education.svg'
import ProjectIcon from '@/assets/ic_projects.svg'
import VSCodeIcon from '@/assets/ic_vs_code.svg'
import FigmaIcon from '@/assets/ic_figma.svg'
import FirebaseIcon from '@/assets/ic_firebase.svg'
import GitIcon from '@/assets/ic_git.svg'
import MongoIcon from '@/assets/ic_mongo.svg'
import RightArrowDark from '@/assets/ic_right_arrow_dark.svg'
import IntellijIcon from '@/assets/ic_intellij.svg'
import PycharmIcon from '@/assets/ic_pycharm.svg'
import AndroidStudioIcon from '@/assets/ic_android_studio.webp'
import ArduinoIcon from '@/assets/ic_arduino.svg'
import GithubIcon from '@/assets/ic_github.svg'
import SendIcon from '@/assets/ic_send.svg'
import SuccessIcon from '@/assets/ic_success.svg'
import ErrorIcon from '@/assets/ic_error.svg'
import SuccessCloseIcon from '@/assets/ic_success_close.svg'
import ErrorCloseIcon from '@/assets/ic_error_close.svg'
import LinkedinIcon from '@/assets/ic_linkedin.svg'
import YoutubeIcon from '@/assets/ic_youtube.svg'
import FacebookIcon from '@/assets/ic_facebook.svg'
import InstagramIcon from '@/assets/ic_instagram.svg'
import SignOutIcon from '@/assets/ic_sign_out.svg'
import GlobeIcon from '@/assets/ic_globe.svg'
import PrivateIcon from '@/assets/ic_lock.svg'
import StarFilledIcon from '@/assets/ic_star_filled.svg'
import StarIcon from '@/assets/ic_star.svg'
import DeleteIcon from '@/assets/ic_delete.svg'
import EditIcon from '@/assets/ic_edit.svg'

const ProfileImgRound = "https://firebasestorage.googleapis.com/v0/b/my-website-codewithcc.firebasestorage.app/o/public%2Fic_profile_img.png?alt=media"
const ProfileImage = "https://firebasestorage.googleapis.com/v0/b/my-website-codewithcc.firebasestorage.app/o/public%2Fic_user_image.png?alt=media&token=7663ce9e-3781-40e9-b02f-028306e67c32"

export const assets = {
    ArrowLight, ArrowDark, Logo, HeaderBG, Menu, Close, ProfileImgRound, RightArrowLight, DownloadArrow, ProfileImage,
    RightArrowDark, GithubIcon, SendIcon, SuccessIcon, ErrorIcon, SuccessCloseIcon, ErrorCloseIcon, SignOutIcon,
    GlobeIcon, PrivateIcon, StarFilledIcon, StarIcon, DeleteIcon, EditIcon
}

export const navItemsHome = [
    {
        link: '#top',
        label: 'Home'
    },
    {
        link: '#services',
        label: 'Services'
    },
    {
        link: '#works',
        label: 'My Works'
    },
    {
        link: '#about',
        label: 'About Me'
    },
    {
        link: '#contact',
        label: 'Contact'
    }
]

export const navItemsOther = [
    {
        link: '/#top',
        label: 'Home'
    },
    {
        link: '/#services',
        label: 'Services'
    },
    {
        link: '/#works',
        label: 'My Works'
    },
    {
        link: '/#about',
        label: 'About Me'
    },
    {
        link: '/#contact',
        label: 'Contact'
    }
]

export const infoList = [
    { icon: CodeIcon, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: EduIcon, title: 'Education', description: 'B.Sc in Computer Science' },
    { icon: ProjectIcon, title: 'Projects', description: 'Built more than 5 projects' }
]

export const toolsData = [
    VSCodeIcon, FirebaseIcon, MongoIcon, FigmaIcon, GitIcon, IntellijIcon, PycharmIcon, AndroidStudioIcon, ArduinoIcon
]

export const socialIcons = [
    {
        icon: FacebookIcon,
        link: "https://www.facebook.com/arigit.roy.7/"
    },
    {
        icon: InstagramIcon,
        link: "https://www.instagram.com/codewithcc/"
    },
    {
        icon: YoutubeIcon,
        link: "https://www.youtube.com/channel/UCVWCrS84CE1746jq0AAJ-pQ"
    },
    {
        icon: GithubIcon,
        link: "https://github.com/codewithcc"
    },
    {
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/in/codewithcc/"
    }
]