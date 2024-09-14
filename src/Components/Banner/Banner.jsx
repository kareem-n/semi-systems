
import img from '../../assets/banner.png';

function Banner() {
    return (
        <div

            style={{
                background: `url(${img})`,
                backgroundSize : '100%' ,
                backgroundPosition : 'center'
            }}
            className="my-20 h-[400px]">

            <div className="px-48 h-full flex items-center justify-center">
                <div className="flex flex-col items-center">

                    <h2 className='text-6xl text-center font-bold'>
                        هيا بنا الان <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg,#4b00f9,purple)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        > نبدأ</span>
                    </h2>
                    <p className='text-lg text-gray-600 mt-2'>
                        قم بإدارة جميع حملاتك التسويقية الإلكترونية في مكان واحد
                    </p>

                    <button
                        style={{
                            background: 'linear-gradient(45deg ,#4710ee ,#c54bb8)'
                        }}
                        className=' mt-4 px-7 py-2 rounded-full text-white'
                    >
                        تواصل معنا
                    </button>


                </div>

            </div>



        </div>
    )
}

export default Banner