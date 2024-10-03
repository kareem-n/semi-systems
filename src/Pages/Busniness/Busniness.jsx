import PageBanner from '../../Components/pageBanner/PageBanner';
import busnines from '../../assets/busnines.png';
import Intro from '../../Components/ServiceComponents/Intro';
import serviceMan from '../../assets/servicesMan.png';
import importantAsset from '../../assets/import.png';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import extraImg from '../../assets/YE_Man.png';
import feedBackPerson1 from '../../assets/person.png'
import Important from '../../Components/ServiceComponents/Important';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import {  AiOutlineLike } from 'react-icons/ai';
import { FaRegCheckCircle } from 'react-icons/fa';
import { GiClockwork } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportSearch } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import FAQ from '../../Components/ServiceComponents/FAQ';


const Busniness = () => {

    const IntroBusninessContent = {
        leftImg: busnines,
        firstContentRight :{
            slogan: "تصميم الهوية التجارية",
            title: "نستطيع تطوير علاماتكم التجارية لتحقق أفضل انتشار ممكن",
            desc: " في وكالة أبولو للحلول التسويقية، نعمل على تصميم وبرمجة موقع ويب مميز لشركتك، يجمع بين الجاذبية وسهولة الاستخدام، ليزيد من تفاعل الزوار وتحويلهم إلى عملاء. كما نلتزم بمعايير تحسين محركات البحث لضمان تصدر موقعك النتائج وزيادة ظهوره على الإنترنت."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }


    const ImportantBusninesContent = {
        head: "أهمية تصميم الهوية التجارية",
        subTitle: " إدارة الحملات التسويقية تقدم لك الفرصة للوصول إلى جمهور واسع وتعزيز وجودك الرقمي بفضل استراتيجيات التسويق المتقدمة والإعلانات المبتكرة على المنصات المختلفة.",

        items : [
            {
                title:" تمييز العلامة التجارية",
                subTitle: " الهوية التجارية تميز الشركة عن غيرها. فهي تساعد العملاء على التعرف بسرعة على علامتك التجارية في السوق المزدحم."
            },
            {
                title: " تعزيز الولاء والانتماء",
                subTitle: " الهوية القوية تبني ولاء العملاء. عندما يشعر العميل بالارتباط بعلامة تجارية، يكون أكثر وفاءً ويستمر في التعامل معها.",
            }, 
            {
                title: " بناء الثقة والمصداقية",
                subTitle: " الثقة تبنى من خلال هوية قوية. تصميم احترافي يعزز المصداقية ويجعل العملاء أكثر استعدادًا للتعامل معك."
            },
            {
                title: " زيادة القيمة السوقية",
                subTitle:" الهوية تضيف قيمة اقتصادية للشركة. الشركات ذات الهوية القوية تكتسب مكانة أعلى وتصبح أكثر جاذبية للمستثمرين والشركاء."
            },
            {
                title: " التواصل مع الجمهور",
                subTitle: " الهوية التجارية تعزز التواصل الفعال. إنها تتيح للشركة توصيل رسائلها وقيمها بطريقة واضحة وجذابة."
            },
            {
                title: " الاستمرارية والتطور",
                subTitle: " الهوية التجارية تدعم الاستمرارية. تصميم هوية متينة يسهل تحديثها وتطويرها مع الزمن دون فقدان ارتباط الجمهور بها."
            }
        ]
    }

    const whyUsBusniessContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "انضم إلى نقرات لتجربة تطوير حضورك الرقمي بشكل مذهل، واستفد بالكامل من فعالية تصميم المواقع الإلكترونية في تحقيق أهدافك التسويقية. دعنا نواكبك في رحلة النجاح الرقمي!",
        items: [
            {
                text:" خبرة أعوام ",
                icon:<AiOutlineLike size={35} />
            },
            {
                text: "خبرة ومهارة",
                icon: <FaRegCheckCircle size={35}/>
            },
            {
                text:"سرعة وجودة في العمل",
                icon:<GiClockwork size={35} />
            },
            {
                text:"مواد دعائية مؤثرة",
                icon:<MdLibraryBooks size={35} />
            },
            {
                text:"استراتيجيات فعالة",
                icon:<ImStatsDots size={35} />
            },
            {
                text: "عروض مميزة",
                icon: <HiOutlineSpeakerphone size={35} />
            },
            {
                text: "تقارير شاملة عن الحملة الإعلانية",
                icon:<TbReportSearch size={35} />
            },
            {
                text: "خدمة عملاء على مدار الساعة",
                icon: <RiCustomerService2Fill size={35} />
            },
        ]
    }

    const PortfolioBusniessContnet = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
        ]
    }


    const extraBusinessContent  = {
        slogan: 'نقطه التحول',
        title: `نساعدك في بناء حضورك وفقاً لرؤية وأهداف علامتك التجارية`,
        desc: `على عكس ما يعتقد البعض، بناء الحضور الرقمي المثالي ليس عملية عشوائية، بل يعتمد على تخطيط دقيق وجذور متينة ترتكز على رؤية استراتيجية.`,

        items: [
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
        ]
    }


    const feedbackBusinessontent = {
        title: `آراء عملائنا`,
        desc: `نستمد نجاحنا من رضا عملائنا عن الخدمات التي نقدمها`,
        items: [
            { img: feedBackPerson1, 
                name: 'mostafa ayman', 
                desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية' 
            },
            { img: feedBackPerson1, 
                name: 'Mohamed fathey', 
                desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية' 
            },
            { img: feedBackPerson1, 
                name: 'Kareem naser', 
                desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية' 
            },
        ]
    }


    const faqBusinessContent = [


    ]






  return (
    <div>
            <PageBanner head={'تصميم الهوية التجارية'} />

            <div className="px-48">
                <Intro
                    leftImg={IntroBusninessContent.leftImg}
                    firstContentRight={IntroBusninessContent.firstContentRight}
                    rightImg={IntroBusninessContent.rightImg}
                    secondContentLeft={IntroBusninessContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantBusninesContent.head}
                subTitle={ImportantBusninesContent.subTitle}
                options={ImportantBusninesContent.items}
            />


            <div className="px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsBusniessContent.headTitle}
                    subTitle={whyUsBusniessContent.subTitle}
                    items={whyUsBusniessContent.items}
                />

                <Portfolio
                    headTitle={PortfolioBusniessContnet.headTitle}
                    subTitle={PortfolioBusniessContnet.subTitle}
                    items={PortfolioBusniessContnet.items}
                />

            </div>

            <ExtraContent
                slogan={extraBusinessContent.slogan}
                title={extraBusinessContent.title}
                desc={extraBusinessContent.desc}
                items={extraBusinessContent.items}
                leftImg={extraImg}
            />

            <ServiceFeedback
                title={feedbackBusinessontent .title}
                desc={feedbackBusinessontent .desc}
                items={feedbackBusinessontent .items}
            />

            <FAQ items={faqBusinessContent} />  

    </div>
  )
}

export default Busniness