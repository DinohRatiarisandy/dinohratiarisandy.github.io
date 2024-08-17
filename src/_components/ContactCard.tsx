import React from "react"
import { IconTypeProps } from "./icons/iconTypeProps"

type ContactProps = {
   icon: React.ComponentType<IconTypeProps>
   title: string
   profileImg: string
   address: string
   url?: string
}

function ContactCard(props: ContactProps) {
   const { icon: Icon, title, profileImg, address, url } = props
   return (
      <div className="relative flex items-center gap-3 p-2">
         <img
            className="h-12 rounded-full ring"
            src={profileImg}
            alt="Ratiarisandy's profile"
         />
         <Icon size={16} title={title} className="absolute left-11 top-10" />
         {Boolean(url) ? (
            <a href={url} className="trasition-colors hover:text-sky-800">
               {" "}
               <i className="lg:text-xs">{address}</i>
            </a>
         ) : (
            <i className="lg:text-xs">{address}</i>
         )}
      </div>
   )
}

export default ContactCard
