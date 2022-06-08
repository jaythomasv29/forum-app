import Image from 'next/image'
import React from 'react'

import { ChevronDownIcon, HomeIcon, SearchIcon, LogoutIcon} from '@heroicons/react/solid'
import { BellIcon, ChatIcon, ExternalLinkIcon, GlobeIcon, MenuIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } 
from '@heroicons/react/outline'

import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
  const { data : session } = useSession()
  console.log(session)

  
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" layout="fill" src="https://links.papareact.com/fqy" />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[100px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* SearchBox */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input className=" bg-transparent outline-none" type="text" placeholder="Search Reddit" />
        <button type="submit" hidden></button>
      </form>


      <div className="mg-5 mg hidden items-center text-gray-500 space-x-2 ml-2 md:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="mx-5 flex items-center md:hidden">
        <MenuIcon className="icon" />
      </div>
      <div className="hidden md:inline-flex hover:bg-gray-200 items-center justify-center px-2 ml-2 cursor-pointer">
        {/* Authentication */}
        {/* <div className="items-center flex-shrink-0 h-9 w-9 flex p-2 mr-2"> */}
          {/* <Image objectFit="contain" layout="fill" src="https://links.papareact.com/23l/" /> */}
         
          {
            session ? 
            <>
            <p onClick={() => signOut()}className="text-gray-500 text-xs whitespace-nowrap">{session?.user?.name}</p>
            <LogoutIcon className="icon ml-2 text-gray-500" />
            </>
            :
            <>
             <ExternalLinkIcon className="icon text-gray-500" />
            <p onClick={() => signIn()}className="text-gray-500 text-xs whitespace-nowrap">Sign In</p>
            </>
          }
            
            
      </div>

    

    </div>

  )
}

export default Header