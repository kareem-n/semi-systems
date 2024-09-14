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
    <div id="blog" className=" px-48 my-64">

      <div className="">

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl">
            المدونة
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            كن على معرفة بأحدث مواضيع التسويق الرقمي
          </p>
        </div>

        <div className="mt-10">
          {
            Loading ? <div className="flex items-center justify-center min-h-[100px]">
              <Bars color="background-color: rgb(0 114 250)" />
            </div> : blogData && <div className="flex items-center gap-x-5">
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


    </div >
  )
}

export default Blog