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
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",
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

        {
            title: "ما هي الهوية التجارية ولماذا هي مهمة؟",
            answer:[
                {title: "الهوية التجارية هي مجموعة من العناصر البصرية والشعورية التي تمثل العلامة التجارية، مثل :"},
                {details: "1-", desc: "الشعار "},
                {details: "2-", desc: "الألوان"},
                {details: "3-", desc: "الخطوط"},
                {details: "4-", desc: "نبرة الصوت"},
                { title: "أهميتها تكمن في تمييز الشركة عن منافسيها :"},
                {details: "1-", desc: "بناء الثقة مع العملاء"},
                {details: "2-", desc: "تعزيز الارتباط العاطفي بين العملاء والعلامة التجارية"},
            ]
        },
        {
            title: "ما الفرق بين الهوية التجارية والعلامة التجارية؟",
        answer :[
            {
                title: "الهوية التجارية :",
                desc: "الهوية التجارية تشمل جميع العناصر المرئية والمعنوية التي تمثل الشركة، مثل الشعار، الألوان، الخطوط، الرسائل، والقيم التي تنقلها العلامة."
            },
            {
                title: "العلامة التجارية :",
                desc: "العلامة التجارية هي الصورة الذهنية التي تتشكل لدى الجمهور عن الشركة أو المنتج بناءً على تجربتهم مع الشركة."
            },
            
        ],
        },

        {
            title:"ما هي العناصر الأساسية في تصميم الهوية التجارية؟",
        answer: [
            {details:"1-" , desc:"الشعار (اللوجو)",},
            {details:"2-", desc:"الألوان",},
            { details:"3-",desc:"الخطوط",},
            {details:"4-",desc:"النمط البصري",},
            {details:"5-",desc:"الرسائل والنبرة"},
            {details:"6-",desc:"العناصر التصويرية (مثل الأيقونات والصور)"},
        ],
        },

        {
            title: "كيف يتم اختيار الألوان المناسبة للهوية التجارية؟",
        answer: [
            {
                desc: "يتم اختيار الألوان بناءً على القيم التي تمثلها الشركة والجمهور المستهدف. الألوان يجب أن تكون متوافقة مع هوية الشركة، مثل استخدام الأزرق للثقة والاحترافية، والأخضر للبيئة والطبيعة."
            }
        ]
        },

        {
            title: "ما الدور الذي يلعبه الشعار في الهوية التجارية؟",
        answer: [
            {
                desc : "الشعار هو العنصر الأكثر وضوحًا في الهوية التجارية، حيث يمثل رمزًا مرئيًا يربط العملاء بالشركة. يجب أن يكون بسيطًا، مميزًا وسهل التذكر."
            },
        ]
        },

        {
            title: "كيف تساعد الهوية التجارية في بناء ولاء العملاء؟",
            answer: [
                {
                    desc: "الهوية التجارية المتسقة تعزز الثقة والاعتمادية لدى العملاء. عندما يشعر العميل بتجربة موحدة وموثوقة مع الشركة عبر مختلف القنوات، فإن ذلك يسهم في بناء الولاء والارتباط العاطفي مع العلامة."
                },
            ]
        },

        {
            title: "هل يمكن تغيير الهوية التجارية مع مرور الوقت؟",
            answer: [
                {
                    desc: "نعم، يمكن للشركات تحديث هويتها التجارية مع مرور الوقت بما يتناسب مع تغيرات السوق أو توسع الشركة. يُسمى هذا بـ إعادة التصميم أو إعادة التسمية، لكنه يجب أن يتم بحذر لتجنب فقدان الهوية الأساسية."
                }
            ]
        },
        {
            title: "كيف يمكن للهوية التجارية تعزيز القيمة السوقية للشركة؟",
            answer: [
                {
                    desc: "الهوية القوية والمميزة تزيد من التعرف على العلامة وتعزز ثقة العملاء، مما يؤدي إلى زيادة الولاء وتوسيع قاعدة العملاء، وبالتالي زيادة القيمة السوقية للشركة."
                },
            ]
        },
        {
            title: "ما هي الأخطاء الشائعة في تصميم الهوية التجارية؟",
            answer: [
                {details: "1-", desc: "عدم وضوح الرسالة"},
                {details: "2-" , desc: "تعقيد التصميم بشكل مفرط"},
                {details: "3-" , desc: "اختيار ألوان غير متوافقة أو غير جذابة"},
                {details: "4-" , desc: "عدم التناسق بين العناصر البصرية"},
                {details: "5-" , desc: "تقليد هوية شركات أخرى"},

            ]
        },
    ]






  return (
    <div>
            <PageBanner head={'تصميم الهوية التجارية'} />

            <div className="px-5 md:px-48">
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


            <div className="px-5 md:px-48 py-20">
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