import { Routes } from '@/routes'
// import { useUserStore } from '@/store'
//import { useStore } from 'zustand'
// import type { UserRole } from '@/types'
// import { $UserRole } from '@/modules/auth/enum'

// const { designer, client, designCompany, manufacturingCompany, home, companyHome } = Routes
const {
  home,
  user: { profile },
  editor,
  templates,
  emails,
  IaChat,
  // configuration
} = Routes
import { BsGear } from 'react-icons/bs'
import { FaMagnifyingGlass as Search } from 'react-icons/fa6'
import { FaCircleUser as Account } from 'react-icons/fa6'
import { FaPlus as Editor } from 'react-icons/fa6'
import { FaListUl as Emails } from 'react-icons/fa6'
import { GoTable as Templates } from 'react-icons/go'
import { IoChatbubbleOutline } from 'react-icons/io5'
import Logo from '/logo_icon.svg'
import IaChatIcon from '/sidebar/iaChat.svg'
export const getLinks = () => {
  // const { user } = useUserStore()

  const mainlinks = [
    {
      iconDefault: <img src={Logo} alt="account" />,
      title: 'home',
      link: home,
    },
    {
      iconDefault: <Search className="bg-grey" />,
      iconFilled: <Search className="bg-lightBlue" fill={'white'} />,
      title: 'Search',
      // link: profile(user?.objectId),
      link: home,
    },
    {
      iconDefault: <Account className="bg-extraLightBlue" />,
      iconFilled: <Account className="bg-lightBlue" fill={'white'} />,
      title: 'Perfil',
      link: profile,
    },
    {
      iconDefault: <Editor className="bg-extraLightBlue" />,
      iconFilled: <Editor className="bg-lightBlue" fill={'white'} />,
      title: 'Editor',
      link: editor,
    },
    {
      iconDefault: <Templates className="bg-extraLightBlue" />,
      iconFilled: <Templates className="bg-lightBlue" fill={'white'} />,
      title: 'Templates',
      link: templates,
    },
    {
      iconDefault: <Emails className="bg-extraLightBlue" />,
      iconFilled: <Emails className="bg-lightBlue" fill={'white'} />,
      title: 'Emails',
      link: emails,
    },
    {
      iconDefault: <img src={IaChatIcon} alt="iaChat" className="bg-extraLightBlue" />,
      iconFilled: <img src={IaChatIcon} alt="iaChat" className="bg-lightBlue" />,
      title: 'Chat',
      link: IaChat,
    },
  ]

  const bottomLinks = [
    {
      iconDefault: <IoChatbubbleOutline className="bg-extraLightBlue" />,
      iconFilled: <IoChatbubbleOutline className="bg-lightBlue" fill={'white'} />,
      title: 'iaChat',
      link: '',
    },
    {
      iconDefault: <BsGear className="bg-extraLightBlue" />,
      iconFilled: <BsGear className="bg-lightBlue" fill={'white'} />,
      title: 'configuration',
      link: '',
    },
  ]
  return {
    mainlinks,
    bottomLinks,
  }
}
