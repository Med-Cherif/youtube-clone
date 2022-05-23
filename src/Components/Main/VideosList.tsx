import { useEffect } from "react"
import { videos } from "../../data/videos"
import { formatViews } from "../../helpers/views"
import VideoItem from "./VideoItem"

const VideosList = () => {

    return (
        <div className="bg-slate-50 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 -z-10">
                {videos.map((video, index) => {
                    return <VideoItem key={video.id + index} {...video} />
                })}
            </div>
        </div>
    )
}

export default VideosList