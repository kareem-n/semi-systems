import { useEffect, useState } from "react"
import PageBanner from "../../Components/pageBanner/PageBanner"
import client, { urlFor } from "../../Utils/Sanity"
import { Bars } from "react-loader-spinner";
import { FaAngleLeft } from "react-icons/fa";

function Blog() {


    const [BlogData, setBlogData] = useState(null);
    const [Loading, setLoading] = useState(true);


    function getBlogDat() {

        client.fetch(`*[_type=='blog']`)
            .then(res => {
                setBlogData(res);
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



    const date = new Date();



    return (
        <div>

            <PageBanner head={'المدونه'} />
            <div className="my-20 px-5 md:px-48">

                <div className="">
                    {
                        Loading ? <div className="flex items-center justify-center py-10">
                            <Bars color="blue" />
                        </div> : <div className="grid grid-cols-3 grid-rows-1 gap-x-10">
                            <div className="col-span-1 p-2 row-span-1 grid grid-cols-1 ">
                                {
                                    BlogData.slice(1, 4).map(item => <div key={item._id} className="rounded-xl overflow-hidden  col-span-2 row-span-1 h-[200px]">
                                        <img src={urlFor(item.mainImage)} className="h-full w-full object-cover" alt="" />
                                        {item.slug}
                                    </div>)

                                }
                            </div>



                            <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
                                <img src={urlFor(BlogData[1].mainImage)} className="w-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-black/30">
                                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                                        <div className="text-sm flex items-center gap-x-1 text-gray-200">

                                            <span className="p-2 rounded-full">
                                                {date.getFullYear(BlogData[0]._createdAt)}
                                                -{date.getMonth(BlogData[0]._createdAt)}
                                                -{date.getDate(BlogData[0]._createdAt)}
                                            </span>
                                            <span className="w-2 h-2 bg-theme rounded-full"></span>
                                            <span className="p-2 rounded-full">
                                                {BlogData[0].slug}
                                            </span>


                                        </div>
                                        <h2 className="text-4xl font-bold mt-2">
                                            {BlogData[0].title}
                                        </h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                    <div className="py-20">
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-4xl">الأكثر قراءة </h2>
                            <button className="bg-theme hover:bg-themeHovered text-white px-6 py-2 rounded-full">
                                عرض الكل
                            </button>
                        </div>

                        <div className="grid grid-cols-3 mt-10 gap-10">
                            {
                                BlogData?.map(item => <div key={item._id} className="rounded-xl overflow-hidden shadow-xl">
                                    <img src={urlFor(item.mainImage)} className="w-full h-[250px] object-cover" alt="" />
                                    <div className="p-5">
                                        <p className="text-[12px] inline-block px-4 py-1 rounded-full opacity-80 bg-theme text-white">
                                            {item.slug}
                                        </p>
                                        <h3 className="font-bold text-xl mt-3">
                                            {item.title}
                                        </h3>

                                        <div className="mt-7">
                                            <span className="inline-block w-full h-[1px] bg-gray-500/30"></span>
                                            <button className="text-lg p-3 text-green-600 hover:text-green-700 flex items-center gap-x-3">قراءة المزيد
                                                <FaAngleLeft />
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>




                </div>

            </div>


        </div>
    )
}

export default Blog