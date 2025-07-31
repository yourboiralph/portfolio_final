import { X } from 'lucide-react'
import React from 'react'

const PlayVideo = ({play, setPlay, link}) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-primary/30 backdrop-blur-sm'>
        <div>
            <X className='place-self-end font-bold cursor-pointer' color='red' onClick={() => setPlay(false)} />
            <iframe width="1280" height="720" src={`${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default PlayVideo