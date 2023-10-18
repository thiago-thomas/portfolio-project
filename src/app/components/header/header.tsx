import Image from 'next/image'

import "./header.scss"

interface HeaderProps {
  name: string,
  role: string,
  imgsrc: string
}

export function Header({name, role, imgsrc}: HeaderProps){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m {name || "Your Name"}! 👋</h1>
            <h2>{role || "Software Developer"}</h2>
          </div>
          <img src={imgsrc || "https://picsum.photos/200"}></img>
        </div>
    )
}