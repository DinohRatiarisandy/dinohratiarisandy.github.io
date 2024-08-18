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
            className="h-10 rounded-full ring-2 ring-sky-600"
            src={profileImg}
            alt="Ratiarisandy's profile"
         />
         <Icon size={14} title={title} className="absolute left-9 top-9" />
         {Boolean(url) ? (
            <a href={url} target="_blank">
               {" "}
               <i className="trasition-colors text-slate-300 hover:text-sky-400 lg:text-sm">
                  {address}
               </i>
            </a>
         ) : (
            <i className="text-slate-300 lg:text-sm">{address}</i>
         )}
      </div>
   )
}

export default ContactCard
