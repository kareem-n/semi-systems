import PageBanner from "../../Components/pageBanner/PageBanner"
import { PiCertificateDuotone } from "react-icons/pi";
import { MdOutlineGroups, MdPriceCheck } from "react-icons/md";
import { FaLeftLong } from "react-icons/fa6";

import { IoCallOutline, IoRocketOutline } from "react-icons/io5";

import goal from '../../assets/goal.png';
import mission from '../../assets/mission.png';
import message from '../../assets/message.png';
import value from '../../assets/value.png';
import A from '../../assets/AAAAAA.png';
import right1 from '../../assets/right1.png';
import right2 from '../../assets/right2.png';
import route1 from '../../assets/route.png';
import route2 from '../../assets/route2.png';

import whyUs from '../../assets/whyus.png';
import comLeft from '../../assets/comLeft.png';
import comRight from '../../assets/comRight.png';
import rect from '../../assets/rect.png';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import person from '../../assets/person.png';

import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { GiMagicLamp } from "react-icons/gi";
import Slider from "react-slick/lib/slider";

function About() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div
            className=""
        >

            <PageBanner head='من نحن' />


            <div className="my-20 md:py-20 px-5 md:px-36">
                <div className="">
                    <h2 className="text-theme font-bold text-3xl md:text-5xl text-center">
                        من نكون ؟
                    </h2>
                    <h2 className="text-center font-bold text-xl md:text-4xl mt-2">
                        نحن نُمكّن العلامات التجارية الطموحة لتحقيق نجاحات استثنائية
                    </h2>

                    <p className=" mt-4">
                        - نحن وكالة تسويق إلكتروني عالمية نساعد الشركات الرائدة على الابتكار والنمو من خلال استراتيجيات رقمية فعّالة <br />
                        نجمع بين خبراتنا المتميزة وشبكة واسعة من المبدعين الرقميين
                        لنحقق نتائج تسويقية تتسم بالكفاءة والسرعة والاستدامة
                    </p>

                    <p className=" mt-4">
                        - نؤمن بأن الجرأة في اتخاذ خطوات جديدة هي ما يحدد ملامح النجاح المستقبلي، وأن الطموح للتميز يتطلب الاستعداد<br />
                        للتغيير والتطور نحن نعمل مع عملائنا لتحقيق رؤاهم وتجاوز توقعاتهم، ونبحث عن الشركات التي تسعى لتحدي نفسها<br />
                        وتحقيق التميز في عالم التسويق الرقمي نعمل بشغف لخلق قصص نجاح ملهمة ونساعد في تحويل الأفكار إلى إنجازات ملموسة
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-10 mt-10">
                    <div className="">
                        <img src={goal} alt="" />
                    </div>
                    <div className="">
                        <img src={mission} alt="" />
                    </div>
                    <div className="">
                        <img src={message} alt="" />
                    </div>
                    <div className="">
                        <img src={value} alt="" />
                    </div>

                </div>

                <div className="my-36 grid md:grid-cols-2 gap-y-16 gap-x-20">
                    <div className="">
                        <h2 className="text-3xl md:text-5xl font-extrabold flex items-center gap-x-5">
                            <span className="block w-10 h-10 bg-gray-500 rounded-full"></span>
                            <span>

                                عن <span className="text-purple-800">Pivot</span>
                            </span>
                        </h2>

                        <h2 className="text-2xl md:text-5xl font-bold mt-0 leading-normal">
                            نحن نزيد من نجاح الأعمال من خلال
                            حلول  <span className="text-theme">
                                التسويق الرقمي
                            </span>

                        </h2>

                        <p className="text-gray-600 text-lg mt-4">
                            نحن نؤمن بأن النجاح يأتي من الإتقان والسعي المستمرالتزامنا بالجودة والابتكار نابع من خبرات متراكمة على مدار سنوات، مع تركيزنا الدائم على تقديم حلول مصممة خصيصًا لتلبية احتياجات عملائنا وتحقيق أهدافهم بنجاح
                        </p>


                        <div className="mt-10 flex flex-wrap md:flex-nowrap justify-between items-center gap-10 ">
                            <div className="flex items-center gap-x-5">
                                <PiCertificateDuotone className="text-theme" size={50} />
                                <div className="">
                                    <p className="text-lg font-bold">
                                        شركة معتمدة
                                    </p>
                                    <p>
                                        تقدم أفضل جودة وكفاءة عالية
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-5">
                                <MdOutlineGroups className="text-theme" size={50} />
                                <div className="">
                                    <p className="text-lg font-bold">
                                        فريق خبراء
                                    </p>
                                    <p>
                                        فريق متخصص يقدم حلولًا مبتكرة
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="mt-10 flex items-center gap-x-10">
                            <div className="">
                                <button className="bg-theme rounded-lg text-white px-6 py-2 flex items-center">
                                    اكتشف المزيد
                                    <FaLeftLong className="mr-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-x-5">
                                <span className="inline-block shadow-lg shadow-gray-600 rounded-full text-white p-3 bg-theme">
                                    <IoCallOutline size={30} />
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-gray-600">
                                        اتصل بنا على :
                                    </span>
                                    <span className="py-2 ltr:text-bg-red-500">
                                        20100 5548525+
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>



                    <div className="">
                        <img src={A} alt="" />
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap md:flex-nowrap items-center md:gap-x-48 gap-y-48">

                    <div className="flex flex-col items-end relative">
                        <img src={right1} alt="" />
                        <img src={right2} className="w-[300px] absolute top-full -translate-y-1/2 translate-x-1/2 right-2/3 md:right-full" alt="" />
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-8">
                            <div className="bg-gray-200 p-5 rounded-full">
                                <HiOutlineDocumentSearch size={40} />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-bold">
                                    التحليل والمناقشة
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    يبدأ فريق عمل نقرات بتحديد رؤية المشروع
                                    وتحليل السوق ودراسة المنافسة و تحليل
                                    الجمهور المستهدف و تحديد الاستراتيجية
                                    المثلى لتحقيق أهداف العميل.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={route1} className="" alt="" />
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="bg-gray-200 p-5 rounded-full order-1">
                                <FaCode size={40} />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-bold">
                                    التحليل والمناقشة
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    يبدأ فريق عمل نقرات بتحديد رؤية المشروع
                                    وتحليل السوق ودراسة المنافسة و تحليل
                                    الجمهور المستهدف و تحديد الاستراتيجية
                                    المثلى لتحقيق أهداف العميل.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={route2} className="" alt="" />
                        </div>

                        <div className="flex items-center gap-x-8">
                            <div className="bg-gray-200 p-5 rounded-full">
                                <SiSpeedtest size={40} />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-bold">
                                    التحليل والمناقشة
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    يبدأ فريق عمل نقرات بتحديد رؤية المشروع
                                    وتحليل السوق ودراسة المنافسة و تحليل
                                    الجمهور المستهدف و تحديد الاستراتيجية
                                    المثلى لتحقيق أهداف العميل.
                                </p>
                            </div>
                        </div>


                    </div>


                </div>




            </div>
            <div className="bg-gray-200 pxp-5 md:px-48 my-36 py-20">
                <div className="p-10 bg-white rounded-lg shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-bold">2,999<span className="text-purple-500">+</span> </h3>
                        <p className="text-xl text-gray-500 mt-2">
                            المشاريع المكتمله
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-bold">1,594<span className="text-purple-500">+</span></h3>
                        <p className="text-xl text-gray-500 mt-2">
                            عميل حالي
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-bold">32<span className="text-purple-500">M</span></h3>
                        <p className="text-xl text-gray-500 mt-2">
                            المبيعات
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-bold">97<span className="text-purple-500">%</span></h3>
                        <p className="text-xl text-gray-500 mt-2">
                            نسبة رضا العميل
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-48 mb-20">
                <div className="relative py-2 flex flex-col items-center">
                    <h2 className="text-4xl ">
                        لماذا نحن
                    </h2>
                    <span className="w-20 h-[2px] mt-3 inline-block bg-theme"></span>
                </div>

                <div className="mt-10">
                    <img src={whyUs} alt="" />
                </div>

                <div className="mt-10 md:mt-20 px-5 md:px-36 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                    <div className="flex flex-col gap-y-4 items-center p-5 bg-white shadow-lg rounded-xl text-center">
                        <IoRocketOutline color="orange" size={50} />
                        <h3 className="text-xl font-bold">
                            سرعة في الأداء
                        </h3>
                        <p>
                            نضمن عملنا في سرعتنا وإحترافيتنا في التنفيذ
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4 items-center p-5 bg-white shadow-lg rounded-xl text-center">
                        <GiMagicLamp color="blue" size={50} />
                        <h3 className="text-xl font-bold">
                            أفكار ابداعيه
                        </h3>
                        <p>
                            نبدع من أجلك ونقدم لكم رؤية وصورة أفضل
                            لمستقبل أعمال
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4 items-center p-5 bg-white shadow-lg rounded-xl text-center">
                        <MdPriceCheck color="orange" size={50} />
                        <h3 className="text-xl font-bold">
                            أسعار تنافسية
                        </h3>
                        <p>
                            نفهم المتطلبات الخاصة بك ونقدم لك السعر
                            الأفضل
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-48 my-20 grid md:grid-cols-2 gap-y-10 items-center gap-x-20">
                <div className="">
                    <h2 className="text-4xl text-theme">
                        النجاح :
                    </h2>
                    <p className="font-bold text-2xl mt-2">
                        التحليل الشامل للبيانات هو مفتاح النجاح
                    </p>
                    <p className="text-gray-500 mt-5">
                        فهم سلوك العملاء وتحديد الاتجاهات السوقية يفتح لك فرصًا كبيرة لتطوير استراتيجيات تسويقية مبتكرة وفعّالة. هذه المعرفة تمكنك من التميز في سوق مزدحم، حيث يمكنك استغلال احتياجات العملاء بشكل دقيق لتحقيق التفوق على المنافسين.
                    </p>

                    <p className="text-gray-500 mt-4">
                        هذا الفهم العميق يعزز قدرتك على التكيف مع التغيرات السريعة في السوق، مما يتيح لك تقديم تجارب مميزة تعزز من ولاء العملاء وثقتهم في علامتك التجارية. من خلال هذا النهج، يمكنك تحقيق نجاح مستدام وبناء علاقات طويلة الأمد مع جمهورك، مما يساهم في نمو أعمالك بشكل مستمر.
                    </p>


                </div>
                <div className="">
                    <img src={comLeft} alt="" />
                </div>
            </div>
            <div className="px-5 md:px-48 relative z-40 my-48 grid md:grid-cols-2 gap-y-20 items-center gap-x-20">

                <img src={rect} className="absolute z-10 right-0 bottom-full translate-y-1/2" alt="" />

                <div className="relative z-40">
                    <img src={comRight} alt="" />
                </div>

                <div className="relative z-40">
                    <h2 className="text-4xl text-theme">
                        الفعالية :
                    </h2>
                    <p className="font-bold text-2xl mt-2">
                        التخطيط الاستراتيجي يضمن نجاح الحملات
                    </p>
                    <p className="text-gray-500 mt-5">
                        إن وضع خطة استراتيجية مدروسة بعناية يتيح لك توجيه جهودك نحو الأهداف المحددة بدقة، مما يعزز فرصك في الوصول إلى جمهورك المستهدف وتحقيق نتائج ملموسة تفوق توقعاتك. من خلال هذه الخطة، يمكنك تحديد القنوات الأكثر فعالية للتواصل مع عملائك، وتخصيص الموارد بشكل أفضل لتحقيق تأثير أكبر.
                    </p>

                    <p className="text-gray-500 mt-4">
                        كما أن التقييم المستمر لنتائج حملاتك يسمح لك بإجراء التعديلات اللازمة، مما يعزز من كفاءة استراتيجياتك التسويقية ويضمن تكيّفك مع أي تغييرات في السوق أو سلوك العملاء. في النهاية، فإن التخطيط الجيد لا يضمن فقط النجاح على المدى القصير، بل يمهد الطريق لتحقيق نمو مستدام ونجاح طويل الأمد.
                    </p>


                </div>
            </div>


            <div className="px-4 md:px-48 pb-20">
                <div className="flex flex-col relative">
                    <img src={s3} className="w-[150px] self-end ml-24" alt="" />
                    <img src={s1} className="w-[200px]" alt="" />
                    <img src={s2} className="w-[200px] self-end" alt="" />

                    <div className="absolute inset-0 md:px-36 flex items-center justify-center">
                        <div className="bg-gray-400/20 backdrop-blur-md p-10 w-full rounded-xl shadow-xl">

                            <Slider {...settings}>

                                <div className="p-1 py-10">
                                    <div className="flex flex-col gap-y-5 items-center">
                                        <p className="text-center md:px-20">
                                            حبيت أشكركم أنتم كنتم شريكًا استراتيجيًا وليس مجرد شركة تسويق
                                            خطتنا التسويقية حققت الهدف بشكل ممتاز وأنا متحمس لاستمرار العمل معكم لتوسيع نطاق النجاح الذي حققناه. آمل أن نواصل تطوير استراتيجيات جديدة ومبتكرة تعزز من تواجدنا في السوق وتحقق المزيد من الإنجازات.
                                        </p>

                                        <div className="flex flex-col items-center">
                                            <img width={'70px'} src={person} alt="" />
                                            <h2 className="text-xl font-bold mt-4">mostafa ayman</h2>
                                            <p className="text-gray-600 mt-2">
                                                Egypt
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <div className="p-1 py-10">
                                    <div className="flex flex-col gap-y-5 items-center">
                                        <p className="text-center px-20">
                                            حبيت أشكركم أنتم كنتم شريكًا استراتيجيًا وليس مجرد شركة تسويق
                                            خطتنا التسويقية حققت الهدف بشكل ممتاز وأنا متحمس لاستمرار العمل معكم لتوسيع نطاق النجاح الذي حققناه. آمل أن نواصل تطوير استراتيجيات جديدة ومبتكرة تعزز من تواجدنا في السوق وتحقق المزيد من الإنجازات.
                                        </p>

                                        <div className="flex flex-col items-center">
                                            <img width={'70px'} src={person} alt="" />
                                            <h2 className="text-xl font-bold mt-4">mostafa ayman</h2>
                                            <p className="text-gray-600 mt-2">
                                                Egypt
                                            </p>
                                        </div>
                                    </div>


                                </div>

                            </Slider>

                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default About