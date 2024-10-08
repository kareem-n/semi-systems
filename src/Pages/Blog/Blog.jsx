import { useEffect, useState } from "react"
import PageBanner from "../../Components/pageBanner/PageBanner"
import client, { urlFor } from "../../Utils/Sanity"
import { Bars } from "react-loader-spinner";
import { FaAngleLeft, FaCalendarCheck, FaClock, FaComment } from "react-icons/fa";

function Blog() {


    const [bannerBlogData, setBannerBlogData] = useState(null);
    const [recentBlogData, setRecentBlogData] = useState(null);
    const [Loading, setLoading] = useState(true);


    function getBlogDat() {


        const query = `{
            "banner": *[_type=='blog'] [0...4] {
            _id ,
            _createdAt ,
            title, 
            image,
            miniDescription ,
            comments, 
            }, 
            "recent": *[_type=='blog'] | order(_createdAt desc)[0...2]{
                _id ,
            _createdAt ,
            title, 
            image,
            miniDescription ,
            comments, 
            }
        }`

        client.fetch(query)
            .then(res => {
                console.log(res);

                setBannerBlogData(res.banner);
                setRecentBlogData(res.recent);
                setLoading(false);

            })
            .catch(error => {
                console.log(error);
                setLoading(false)

            })

    }

    useEffect(() => {

        getBlogDat();

    }, [])



    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();



    return (
        <div>

            <PageBanner head={'المدونه'} />
            <div className="my-20 px-5 md:px-36">
                {
                    Loading ? <div className="flex py-20 md:py-36 items-center justify-center">
                        <Bars height={100} width={100} color="blue" />
                    </div> : bannerBlogData && <div className="">

                        <div className="flex flex-col items-center">
                            <p className="text-gray-500 text-xl mb-2">
                                منشور مدونة
                            </p>
                            <h2 className="text-4xl font-bold">
                                أحدث أخبار <span className="text-theme">
                                    شركتنا
                                </span>

                            </h2>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-3 gap-10 mt-10 ">

                            <div className="row-span-3 col-start-1 row-start-1">

                                <div className="rounded-xl overflow-hidden shadow-xl">
                                    <img src={urlFor(bannerBlogData[0].image)} className="w-full h-[400px] object-cover" alt="" />
                                </div>

                                <div className="py-4 px-3">
                                    <h2 className="text-2xl font-bold">
                                        {bannerBlogData[0].title}
                                    </h2>

                                    <div className="text-sm flex items-center gap-x-10 mt-3">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            com 0
                                            <FaComment size={20} className="text-theme" />
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            {date.getFullYear(bannerBlogData[0]._createdAt)}
                                            -{date.getMonth(bannerBlogData[0]._createdAt)}-
                                            {date.getDate(bannerBlogData[0]._createdAt)}
                                            <FaCalendarCheck size={20} className="text-theme" />
                                        </div>
                                    </div>

                                    <div className="mt-3 flex flex-col items-start">
                                        <p className="text-lg">
                                            {
                                                bannerBlogData[0].miniDescription
                                            }
                                        </p>

                                        <div className="text-green-800 hover:text-green-600 font-bold flex items-center gap-x-3 mt-4 cursor-pointer">
                                            Read more
                                            <FaAngleLeft size={22} />
                                        </div>

                                    </div>


                                </div>
                            </div>

                            {
                                bannerBlogData.slice(1, 4).map(item => <div
                                    key={item._id}
                                    className="flex gap-x-5">

                                    <img src={urlFor(item.image)} className="w-1/4" alt="" />

                                    <div className="">
                                        <h2 className="text-xl font-bold">
                                            {item.title}
                                        </h2>

                                        <div className="text-sm flex items-center gap-x-10 mt-3">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                com {item.comments?.length}
                                                <FaComment size={20} className="text-theme" />
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                {date.getFullYear(bannerBlogData[0]._createdAt)}
                                                -{date.getMonth(bannerBlogData[0]._createdAt)}-
                                                {date.getDate(bannerBlogData[0]._createdAt)}
                                                <FaCalendarCheck size={20} className="text-theme" />
                                            </div>
                                        </div>

                                        <p className="text-lg mt-2">
                                            {
                                                bannerBlogData[0].miniDescription
                                            }
                                        </p>

                                        <div className="text-green-800 hover:text-green-600 font-bold flex items-center gap-x-3 mt-4 cursor-pointer">
                                            Read more
                                            <FaAngleLeft size={22} />
                                        </div>
                                    </div>


                                </div>)
                            }





                        </div>

                        <div className="my-20 py-10 p-4">

                            <h2 className="font-bold text-4xl text-center">
                                المقالات <span className="text-theme">
                                    الحديثة
                                </span>
                            </h2>
                            <div className="grid grid-cols-2 gap-20 mt-10">
                                {
                                    recentBlogData.map(item => <div key={item._id} className="">

                                        <img src={urlFor(item.image)} className="w-full" alt="" />
                                        <div className="relative">


                                            <div className="absolute bg-blue-500 text-white/75 rounded-lg p-3 top-0 -translate-y-1/2 mr-4 right-0 flex flex-col items-center font-bold text-sm">
                                                <span>
                                                    {date.getDate(item._createdAt)}
                                                </span>
                                                <span>
                                                    {month[date.getMonth(item._createdAt)]}
                                                </span>
                                            </div>
                                            <div className="pr-28 py-4 text-gray-500 flex items-center gap-x-5">
                                                <div className="flex items-center gap-x-1">
                                                    <FaClock />
                                                    {date.getHours(item._createdAt)}:
                                                    {date.getMinutes(item._createdAt)}
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    <FaComment />
                                                    com 0
                                                </div>



                                            </div>

                                            <h2 className="font-bold py- text-2xl">
                                                {
                                                    item.title
                                                }
                                            </h2>
                                            <p>
                                                {
                                                    item.miniDescription
                                                }
                                            </p>

                                            <div className="text-green-800 hover:text-green-600 font-bold flex items-center gap-x-3 mt-4 cursor-pointer">
                                            Read more
                                            <FaAngleLeft size={22} />
                                        </div>


                                        </div>

                                    </div>)
                                }

                            </div>

                        </div>



                    </div>
                }



            </div>


        </div>
    )
}

export default Blog