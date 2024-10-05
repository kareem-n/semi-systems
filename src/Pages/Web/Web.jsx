import PageBanner from "../../Components/pageBanner/PageBanner"
import Intro from "../../Components/ServiceComponents/Intro"
import web from '../../assets/web.png';
import importantAsset from '../../assets/import.png';
import serviceMan from '../../assets/servicesMan.png';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import extraImg from '../../assets/YE_Man.png';
import feedBackPerson1 from '../../assets/person.png';
import Important from "../../Components/ServiceComponents/Important";
import WhyChooseUs from "../../Components/ServiceComponents/WhyChooseUst.tsx";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoCodeWorkingOutline, IoLayersOutline } from "react-icons/io5";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { MdKeyboardAlt } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import Portfolio from "../../Components/ServiceComponents/Portfolio.tsx";
import ExtraContent from "../../Components/ServiceComponents/ExtraContent.tsx";
import ServiceFeedback from "../../Components/ServiceComponents/ServiceFeedback.tsx";
import FAQ from "../../Components/ServiceComponents/FAQ.tsx";

function Web() {

    const introSectionData = {
        leftImg: web,
        firstContentRight: {
            slogan: 'برمجة المواقع الإلكترونية',
            title: "لنحقق عبر هذا المزيج بين التقنية والتصاميم الجميلة أفضل",
            desc: 'في وكالة أبولو للحلول التسويقية، نعمل على تصميم وبرمجة موقع ويب مميز لشركتك، يجمع بين الجاذبية وسهولة الاستخدام، ليزيد من تفاعل الزوار وتحويلهم إلى عملاء. كما نلتزم بمعايير تحسين محركات البحث لضمان تصدر موقعك النتائج وزيادة ظهوره على الإنترنت.'
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }


    }

    const ImportantSectionData = {
        head: 'أهمية تصميم موقع الكتروني؟',
        subTitle: 'تصميم الموقع الإلكتروني عاملاً حاسمًا في النجاح العام لأي منشأة وتحقيق الأهداف المرجوة.',
        items: [
            {
                title: 'تعزيز التواجد الرقمي',
                subTitle: `يساعدك الموقع الإكتروني في بناء وجود قوة لعلامتك التجارية على الإنترنت. يعتبر الموقع الإلكتروني مساحتك الخاصة حيث يمكن للزوار المحتملين أن يأتوا ويتعرفوا على منتجاتك أو خدماتك والتفاعل معها.`
            },
            {
                title: 'زيادة الثقة والمصداقية',
                subTitle: `المستخدمون يثقون بالشركات التي لديها موقع
إلكتروني احترافي وجذاب. من خلال توفير معلومات شاملة وأنيقة حول عملك، ستعزز ثقة زوار موقعك وتبني صورة مصداقية قوية لعلامتك التجارية.`
            },
            {
                title: 'زيادة المبيعات والأرباح',
                subTitle: `وجود موقع إلكتروني احترافي يمكنك من استهداف نطاق عملاء أوسع وزيادة فرص البيع ويصبح بإمكان العملاء الحاليين والجدد القيام بعمليات الشراء بكل سهولة ويسر.`
            },
            {
                title: 'تحسين محركات البحث',
                subTitle: `تصميم الموقع يؤثر على تصنيفك في نتائج محركات
البحث. يجب توفير تجربة مستخدم محسنة وإمكانية
الوصول إلى المحتوى بسهولة لتحقيق أعلى ترتيب في محركات البحث وزيادة حركة المرور على الموقع.`
            },


            {
                title: 'اضافة قيمة تنافسية لمشروعك',
                subTitle: `يمنحك فرصة للتميز عن الآخرين سواء كان ذلك من
خلال تقديم خدمات فريدة أو واجهة مستخدم سهلة الاستخدام ما يساعد في جذب المزيد من العملاء وتحقيق المزيد من النجاح من خلال موقعك.`
            },
            {
                title: 'التواصل الجيد مع العملاء',
                subTitle: `يمكن للعملاء والزوار التواصل معك لطلب المزيد من لمعلومات أو التحدث عن الاستفسارات بسهولة
وسرعة عن طريق إضافة نماذج اتصال ومعلومات
جهات الاتصال الخاصة بك في الموقع.`
            },

        ]



    }
    const whyUsContent = {
        headTitle: "لماذا عليك اختيارنا؟",
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",
        items: [
            {
                text: 'سابقة أعمال ناجحة',
                icon: <HiMiniUserGroup size={35} />
            },
            {
                text: 'متخصصين محترفين',
                icon: <IoCodeWorkingOutline size={35} />
            },
            {
                text: 'خبرة لأعوام',
                icon: <IoLayersOutline size={35} />
            },
            {
                text: 'شركة موثقة',
                icon: <FaCheck size={35} />
            },
            {
                text: 'دعم فني على مدار الساعة',
                icon: <FcSupport size={35} />
            },
            {
                text: 'استخدام أحدث التقنيات',
                icon: <MdKeyboardAlt size={35} />
            },
            {
                text: 'الالتزام بمواعيد التسليم',
                icon: <CiTimer size={35} />
            },
            {
                text: 'توفير تجربة مستخدم مميزة',
                icon: <FaRegStar size={35} />
            },

        ]
    }


    const PortfolioContnet = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,

        ]
    }

    const extraContentData = {
        slogan: 'نقطه التحول',
        title: "نساعدك في بناء حضورك وفقاً لرؤية وأهداف علامتك التجارية",
        desc: "على عكس ما يعتقد البعض، بناء الحضور الرقمي المثالي ليس عملية عشوائية، بل يعتمد على تخطيط دقيق وجذور متينة ترتكز على رؤية استراتيجية.",

        items: [
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
            { text: 'ساعات العمل', number: 677 },
        ]

    }

    const feedbackContnet = {
        title: "آراء عملائنا",
        desc: "نستمد نجاحنا من رضا عملائنا عن الخدمات التي نقدمها",
        items: [
            { img: feedBackPerson1, name: 'mostafa ayman', desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية' },
            { img: feedBackPerson1, name: 'kareem ayman', desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية' },
        ]
    }

    const FaqContent = [
        {
            title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
            answer: [
                {desc:"نعم، توفر لك زاهي خدمات الدعم الفني والصيانة بعد تصميم الموقع والمتجر ويشمل الدعم الفني الاستجابة لأي مشاكل فنية أو أسئلة تنشأ بعد تطبيق الموقع والمتجر بينما تتضمن الصيانة تحديثات الأمان وتصحيح الأخطاء وتحسين الأداء العام للموقع والمتجر."}
            ]
        },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
        // {
        //     title: "هل توفر الخدمة دعمًا فنيًا وصيانة للموقع والمتجر بعد التصميم؟",
        // },
    ]


    return (
        <div>
            <PageBanner head={'تصميم المواقع الالكترونية'} />

            <div className="px-48">
                <Intro
                    leftImg={introSectionData.leftImg}
                    firstContentRight={introSectionData.firstContentRight}
                    rightImg={introSectionData.rightImg}
                    secondContentLeft={introSectionData.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantSectionData.head}
                subTitle={ImportantSectionData.subTitle}
                options={ImportantSectionData.items}
            />

            <div className="px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsContent.headTitle}
                    subTitle={whyUsContent.subTitle}
                    items={whyUsContent.items}
                />

                <Portfolio
                    headTitle={PortfolioContnet.headTitle}
                    subTitle={PortfolioContnet.subTitle}
                    items={PortfolioContnet.items}
                />

            </div>

            <ExtraContent
                slogan={extraContentData.slogan}
                title={extraContentData.title}
                desc={extraContentData.desc}
                items={extraContentData.items}
                leftImg={extraImg}
            />

            <ServiceFeedback
                title={feedbackContnet.title}
                desc={feedbackContnet.desc}
                items={feedbackContnet.items}
            />

            <FAQ items={FaqContent} />




        </div>
    )
}

export default Web