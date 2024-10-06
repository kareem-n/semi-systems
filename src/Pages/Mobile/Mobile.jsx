import PageBanner from '../../Components/pageBanner/PageBanner'
import Intro from '../../Components/ServiceComponents/Intro'
import mobile from '../../assets/mobile.png';
import serviceMan from '../../assets/servicesMan.png';
import importantAsset from '../../assets/import.png';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import Important from '../../Components/ServiceComponents/Important';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import { MdOutlineSupportAgent, MdPhoneIphone } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { LiaMoneyBillAltSolid } from 'react-icons/lia';
import { GiClockwork } from 'react-icons/gi';
import { TfiLayersAlt } from 'react-icons/tfi';
import { RiCharacterRecognitionFill } from 'react-icons/ri';
import { FaApplePay } from 'react-icons/fa';
import extraImg from '../../assets/YE_Man.png';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import feedBackPerson1 from '../../assets/person.png'
import FAQ from '../../Components/ServiceComponents/FAQ';





const Mobile = () => {

    const IntroMobileContent = {
        leftImg: mobile,
        firstContentRight :{
            slogan: "  تصميم تطبيقات الجوال",
            title: " لنحقق عبر هذا المزيج بين التقنية والتصاميم الجميلة أفضل " ,
            desc: " في وكالة Pivot للحلول التسويقية، نعمل على تصميم وبرمجة تطبيق جوال مميز لشركتك، يجمع بين الجاذبية وسهولة الاستخدام، مما يعزز تجربة المستخدم ويزيد من معدل التحويل. نحرص أيضًا على تحسين أداء التطبيق لضمان سرعة الاستجابة والتوافق مع جميع الأجهزة."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }


    const ImportantMobileConent = {
        head: " أهمية  تصميم تطبيقات الجوال",
        subTitle: "تصميم تطبيقات الجوال يعد أمرًا بالغ الأهمية للشركات في عصرنا الحالي لمواكبة التطورات و لفرصة أفضل للتواجد الرقمي.",
        items : [
            {
                title:" تعزيز الوجود الرقمي",
                subTitle: " تطبيق الجوال سببًا رئيسيًا في تعزيز وجودك على الإنترنت فعندما يكون لديك تطبيق مميز وسهل الاستخدام ستتمكن من جذب المزيد من المستخدمين وتحويلهم إلى عملاء فعليين."
            },
            {
                title: " التسويق الفعّال",
                subTitle: " يعتبر تطبيق الجوال منصة مثالية لأغراض التسويق وإرسال الإشعارات والتواصل المباشر المستخدمين ويمكن من خلاله استهداف الجمهور بالرسائل والعروض الخاصة وبناء علاقة قوية معهم.",
            }, 
            {
                title: " تحسين سمعة الشركة",
                subTitle: " تصميم تطبيق جوال عالي الجودة واحترافيًا يستجيب لاحتياجات العملاء من أهم العوامل التي تساهم في تحسين سمعة الشركة ومصداقيتها وبناء الثقة لدى العملاء. "
            },
            {
                title: "تعزيز التواصل مع العملاء",
                subTitle:" تطبيق الجوال وسيلة مثالية لتعزيز التواصل مع العملاء حيث يمكنهم إرسال رسائل، طلبات الدعم، التعليقات والملاحظات بسهولة، مما يعطيك فرصة لتلبية متطلبات عملائك وتحسين خدماتك. "
            },
            {
                title: " المنافسة في سوق الأعمال",
                subTitle: " بعتبر وجود تطبيق جوال لشركتك ضرورة للبقاء فيمنافسة مع الشركات الأخرى خاصةً مع انتشار استخدام الهواتف الذكية والتطور التكنولوجي السريع."
            },
            {
                title: " زيادة المبيعات والأرباح ",
                subTitle: " تصميم تطبيق جوال ناجح يسهل وصول وتفاعل العملاء مع المنتجات أو الخدمات يمكن أن يؤدي إلى زيادة المبيعات والأرباح للشركة بشكل غير مباشر."
            }
        ]
    }


    const whyUsMobileContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",
        items: [
            {
                text:"  مؤسسة موثقة ",
                icon:<AiOutlineLike size={35} />
            },
            {
                text: " خبرة عالية في تصميم التطبيقات",
                icon: <MdPhoneIphone size={35} />
            },
            {
                text:"سرعة وجودة في العمل",
                icon:<GiClockwork size={35} />
            },
            {
                text:" سعر تنافسي",
                icon:<LiaMoneyBillAltSolid size={35} />
            },
            {
                text:" استضافة مجانية",
                icon:<TfiLayersAlt size={35} />
            },
            {
                text: " دعم تطبيقات اللغات المتعددة",
                icon: <RiCharacterRecognitionFill size={35} /> 
                
            },
            {
                text: " دعم تطبيقات الدفع الإلكتروني",
                icon:<FaApplePay size={35} />
            },
            {
                text: " دعم فني مستمر",
                icon: <MdOutlineSupportAgent size={35} />
            },
        ]
    }


    const PortfolioMobileContent = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
            
        ]
    }


    const extraMobileContent  = {
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

    const feedbackMobileContent = {
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

    const faqMobileContent = [
        {
            title: "ما هو التوقيت المتوقع لتصميم وتطوير تطبيق جوال في السعودية؟",
            answer: [
                {
                    desc:" التوقيت المتوقع لتصميم وتطوير تطبيق جوال يعتمد على عدة عوامل منها حجم التطبيق و المميزات المطلوب تنفيذها ولكن بشكل عام، يتطلب التصميم والتطوير الشامل للتطبيق الجوال عدة أسابيع أو شهور."
                }
            ]
        },
        {
            title: "هل تقدم الخدمة دعماً فنياً وصيانة للتطبيقات الجوالة؟ ",
            answer: [
                {
                    desc: "نعم، نقدم لك في زاهي خدمة دعم فني وصيانة للتطبيقات الجوالة. وهذه الخدمة مهمة لضمان أن التطبيق يعمل بشكل سلس ولا يواجه أي مشاكل فنية في المستقبل."
                },
            ]
        },
        {
            title: "ما هي الميزات التي يجب أن أبحث عنها في تصميم تطبيق جوال؟",
            answer: [
                {title: "من أهم الميزات التي يجب أن تبحث عنها في تصميم تطبيق الجوال هو الآتي: "},
                {details: "1-",  desc: "يجب أن يكون التطبيق سهل الاستخدام. "},
                {details: "2-",  desc: " يجب أن يحتوي على تصميم جذاب و متجاوب مع مختلف أحجام الشاشات."}
            ]
        },
        {
            title: "هل يمكن تطوير تطبيق جوال متوافق مع جميع أنظمة التشغيل؟ ",
            answer: [
                {
                    desc: "نعم، بالطبع نوفر لك في زاهي إمكانيه تطوير تطبيق جوال متوافق مع جميع أنظمة التشغيل مثل نظام تشغيل iOS لأجهزة آبل ونظام تشغيل Android لأجهزة سامسونج وأجهزة أخرى."
                },
            ]
        },
        {
            title: "ما هي الخطوات الأساسية في تصميم تطبيق جوال ناجح؟ ",
            answer: [
                {title: "تصميم تطبيق جوال ناجح في زاهي يتطلب خطوات أساسية ومهمة ومنها ما يلي: "},
                {details: "1-", desc: "تحديد هدف التطبيق و المستخدمين المستهدفين. تجميع المعلومات وتصميم واجهة المستخدم بشكل جذاب وسهل الاستخدام. "},
                {details:"2-", desc:"تطوير وبرمجة التطبيق واختباره للتأكد من عمله بشكل سلس و خالي من الأخطاء."}
            ]
        },
        {
            title: "كيف يمكنني اختيار شركة تصميم تطبيقات الجوال المناسبة؟ ",
            answer: [
                {
                    desc: "للاختيار المناسب لشركة تصميم تطبيقات الجوال  يجب أن تكون الشركة ذات خبرة ومهارة في مجال تصميم التطبيقات كما يجب الاطلاع على أمثلة الأعمال السابقة للشركة والتأكد من جودتها وينبغي النظر في التكلفة والميزات المقدمة من قبل الشركة أيضا."
                },
            ]
        },
        {
            title: "ما هي أهمية تصميم تطبيقات الجوال في السعودية؟ ",
            answer: [
                {
                    desc: "تصميم تطبيقات الجوال في السعودية له أهمية كبيرة في عصر التكنولوجيا الحديثة فهو يعتبر وسيلة فعالة لتعزيز الأعمال التجارية وزيادة المبيعات بشكل غير مباشر من خلال سهولة تواصل العملاء من الشركات."
                },
            ]
        },
        {
            title: "  ما هي اللغات البرمجية المستخدمة في تطوير تطبيقات الجوال؟",
            answer: [
                
                {title: "اللغات البرمجية المستخدمة في تطوير تطبيقات الجوال تشمل:"},
                {details: "جافا (Java)  :" , desc: "تُستخدم بشكل رئيسي لتطوير تطبيقات Android  كانت اللغة الرسمية لـ Android لفترة طويلة  ."},
                {details: "كوتلن (Kotlin) : " , desc:" أصبحت اللغة الرسمية لتطوير تطبيقات Android منذ 2017، وتُعتبر بديلًا أكثر حداثة ومرونة عن جافا."},
                {details: "سويفت (Swift) :" , desc: "هي اللغة الرسمية لتطوير تطبيقات iOS  طورتها Apple لتحل محل (Objective-C) ."},
                {details: "Objective-C :", desc: "كانت اللغة المستخدمة سابقًا لتطوير تطبيقات iOS قبل Swift ."},
                {details: "دارت (Dart) :" , desc: "تُستخدم مع فريمورك Flutter، وهي منصة تطوير تطبيقات للجوّال من Google تدعم Android وiOS باستخدام نفس الكود."},
                {details: "جافاسكريبت (JavaScript) مع React Native  :", desc:"تُستخدم لتطوير تطبيقات الجوال عبر منصة React Native، وتسمح بكتابة كود واحد يعمل على Android وiOS."}
            ]
        },
        {
            title: "ما هي أشهر متاجر التطبيقات للجوال؟",
            answer: [
                {details:"Google Play  : ", desc: "هو المتجر الرسمي لتطبيقات Android ."},
                {details: "App Store  :", desc: "هو المتجر الرسمي لتطبيقات iOS ."}
            ]
        }

    ]






  return (
    <div>
        <PageBanner head={'تصميم تطبيقات الجوال '} />

        <div className="px-5 md:px-48">
                <Intro
                    leftImg={IntroMobileContent.leftImg}
                    firstContentRight={IntroMobileContent.firstContentRight}
                    rightImg={IntroMobileContent.rightImg}
                    secondContentLeft={IntroMobileContent.secondContentLeft}
                />
            </div>


            <Important
                asset={importantAsset}
                headTitle={ImportantMobileConent.head}
                subTitle={ImportantMobileConent.subTitle}
                options={ImportantMobileConent.items}
            />


                <div className="px-5 md:px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsMobileContent.headTitle}
                    subTitle={whyUsMobileContent.subTitle}
                    items={whyUsMobileContent.items}
                />

                <Portfolio
                    headTitle={PortfolioMobileContent.headTitle}
                    subTitle={PortfolioMobileContent.subTitle}
                    items={PortfolioMobileContent.items}
                />
            </div>

            <ExtraContent
                slogan={extraMobileContent.slogan}
                title={extraMobileContent.title}
                desc={extraMobileContent.desc}
                items={extraMobileContent.items}
                leftImg={extraImg}
            />


            <ServiceFeedback
                title={feedbackMobileContent.title}
                desc={feedbackMobileContent.desc}
                items={feedbackMobileContent.items}
            /> 

            <FAQ items={faqMobileContent}/>


    </div>
  )
}

export default Mobile