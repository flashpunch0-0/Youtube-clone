import React, { useEffect, useState } from 'react'
import moment from 'moment/moment';
import request from '../../api'
import numeral from 'numeral'
export const Video = ({ video }) => {

    // getting videos 
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video

    // setting view and channelicons
    const [views, setViews] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)
    // convertin code to duration seconds
    const [duration, setDuration] = useState(null)
    const seconds = moment.duration(duration).asSeconds()
    const video_duration = moment.utc(seconds * 1000).format("mm:ss")


    // useeffect to get contentdetails stats
    const _videoId = id?.videoId || id

    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [_videoId])
    // 
    // tp get channel icon of each video
    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [channelId])
    //

    return (
        <div className='video mb-4 p-3 font-medium text-sm cursor-pointer'>
            <div className=' mb-2 relative w-full'>
                <img
                    className=' w-full'
                    src={medium.url}
                    alt='thumbnail'
                />
                {/* video duration */}
                <span className=' absolute bottom-1 right-1 p-1  bg-blacksecondary rounded-sm'>{video_duration}</span>
            </div>
            <div className='  mb-1  text-white line-clamp-1 '>
                {title}
            </div>
            <div className='video__details'>

                <span> {numeral(views).format('0.a')} Views •{moment(publishedAt).fromNow()} </span>
            </div>
            <div className='video__channel flex items-center  my-2'>

                <img
                    className=' w-9 h-9  mr-2 cursor-pointer rounded-full'


                    src={channelIcon?.url}
                    alt='No'
                />
                <p className=' mb-0'>{channelTitle}</p>
            </div>
        </div>
    )
}

