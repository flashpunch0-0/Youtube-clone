import React from 'react'
import './Video.css'

export const Video = () => {

    return (
        <div className='video mb-4 p-3 font-medium text-sm cursor-pointer'>
            <div className='video__top mb-2 relative w-full'>
                <img
                    className=' w-full'
                    src='https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ'
                    alt=''
                />
                <span className=' absolute bottom-1 right-1 p-1  bg-blacksecondary rounded-sm'>05:43</span>
            </div>
            <div className='video__title  mb-1  text-white line-clamp-1 '>
                Create app in 5 minutes #made by Chintu
            </div>

            <div className='video__channel flex items-center  my-2'>

                <img
                    className=' w-9 h-9  mr-2 cursor-pointer'
                    src='https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo'
                    alt=''
                />
                <p className=' mb-0'>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

// {/* <li className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg  p">
//     {/* <MdThumbUp className="h-6 w-6 md:h-5 md:w-5" /> */}
//     {/* <span className="spanclass">Liked videos</span> */}
//     <button onClick={fetchdata}>
//         get api
//     </button>

// </li> */}

// const fetchdata = () => {
//     //   Axios.get(`https://internship-service.onrender.com/videos?page=${name}`).then((res) => {
//     const res = Axios.get(
//         `https://internship-service.onrender.com/videos?page=2`
//         // ).then((res) => console.log(res.data.data.posts));
//     ).then((res) => {
//         const newItem = {
//             id: res.data.data.posts
//             // name: res.data.data.posts.creator.name,
//             // title: res.data.data.posts.submission.title,
//             // description: res.data.data.posts.submission.description,
//             // thumbnail: res.data.data.posts.submission.thumbnail,
//             // videolink: res.data.data.posts.submission.mediaUrl,

//         };
//         console.log(newItem)
//     });

// };
// let theArray = []
// console.log(theArray)
// useEffect(() => {
//     Axios
//         .get(`https://internship-service.onrender.com/videos?page=2`)
//         .then(res => {
//             setapidata(res.data.data.posts.creator.name)
//             console.log(apidata)
//             // theArray.push(newItem);
//         })
// }, [])