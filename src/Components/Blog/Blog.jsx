import { useEffect, useState } from "react"
import client, { urlFor } from "../../Utils/Sanity"
import { Bars } from "react-loader-spinner";
import { MdDateRange } from "react-icons/md";
import styles from './blog.module.css';


function Blog() {

  const { customEllipsis } = styles

  const [blogData, setBlogData] = useState(null);
  const [Loading, setLoading] = useState(false);


  useEffect(() => {

    setLoading(true);
    client.fetch(`*[_type == 'blog']`)
      .then(res => {
        const tmp = res.slice(0, 3)
        setBlogData(tmp);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error);

      })

  }, [])



  return (
    <div id="blog" className=" md:px-48 px-5 my-20 pb-64 relative">

      <div>

        <div className="flex flex-col flex-wrap md:flex-nowrap items-center">
          <h2 className="font-bold text-4xl">
            المدونة
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            كن على معرفة بأحدث مواضيع التسويق الرقمي
          </p>
        </div>

        <div className="mt-10">
          {
            Loading ? <div className="flex items-center flex-wrap md:flex-nowrap justify-center min-h-[100px]">
              <Bars color="background-color: rgb(0 114 250)" />
            </div> : blogData && <div className="flex flex-wrap md:flex-nowrap gap-y-44 justify-center items-center gap-x-5">
              {
                blogData.map(blog => {
                  let time = new Date(blog._createdAt);
                  time = time.toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return <div key={blog._id} className="relative">
                    <img src={urlFor(blog.mainImage)} alt="" />
                    <div className="h-[300px] bg-white flex flex-col items-start px-4 py-8 rounded-lg shadow-2xl absolute -bottom-1/2 w-[80%] left-1/2 -translate-x-1/2">
                      <p className="px-5 py-1 bg-theme text-white rounded-full font-light text-sm">
                        {blog.slug}
                      </p>
                      <h3 className="text-2xl font-semibold mt-4 underline">
                        {blog.title}
                      </h3>
                      <div className="">
                        <p className="mt-4 text-sm text-gray-500 flex items-center gap-x-2">
                          <MdDateRange size={20} />

                          {
                            time

                          }
                        </p>
                      </div>

                      <p

                        className={customEllipsis + " mt-3 text-gray-600 w-full"}>
                        {
                          blog.description
                        }
                      </p>
                    </div>
                  </div>
                }

                )
              }
            </div>
          }

        </div>


      </div>

      <div className="absolute top-full left-1/2 -translate-x-1/2">
        <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_350_2894)">
            <path d="M1.62012 3.57822L14.4135 16.3715L27.2068 3.57822L40.0001 16.3715L52.7934 3.57822L65.5868 16.3715L78.3801 3.57822" stroke="url(#paint0_linear_350_2894)" strokeWidth="4.26444" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_350_2894" x1="1.62012" y1="9.97488" x2="78.3801" y2="9.97488" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3754FB" />
              <stop offset="1" stopColor="#FC01FF" />
            </linearGradient>
            <clipPath id="clip0_350_2894">
              <rect width="79.9583" height="19.19" fill="white" transform="translate(0.0205078 0.379883)" />
            </clipPath>
          </defs>
        </svg>

      </div>

    </div >
  )
}

export default Blog