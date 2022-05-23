import { useEffect } from "react"
import { calculateDuration } from "../../helpers/time"
import { formatViews } from "../../helpers/views"

interface IProps {
    id: number,
    poster: string,
    duration: number,
    title: string,
    createdAt: string,
    views: number,
    creator: {
        name: string,
        picture: string
    }
}

const VideoItem = (props: IProps) => {

    return (
        <div className='cursor-pointer'>
            <div className="relative">
                <img src={props.poster} alt={props.title} />
                <p className="absolute bottom-1 right-1 text-sm bg-black text-white">{calculateDuration(props.duration)}</p>
            </div>
            <div className="flex mt-2 gap-x-3">
                <img className="w-12 h-12 rounded-full object-cover" src={props.creator.picture} alt={props.creator.name} />
                <div>
                    <h2 className='text-sm'>{props.title}</h2>
                    <p className='text-xs my-1 text-gray-500'>{props.creator.name}</p>
                    <p className='text-sm text-gray-500'>{formatViews(props.views)} views . {props.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItem































