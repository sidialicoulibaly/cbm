import Link from 'next/link';
import React from 'react'
type Props = {
    nom: String,
    lien: String
}


export default function ListItem({nom, lien}: Props) {
  return (
    <Link href={`${lien}`} legacyBehavior>
      <a className="text-white hover:underline block text-center lg:text-left">
        {nom}
      </a>
    </Link>
  )
}
