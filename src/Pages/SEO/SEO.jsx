import PageBanner from '../../Components/pageBanner/PageBanner';
import Intro from '../../Components/ServiceComponents/Intro';
import seo from '../../assets/seo.png';
import serviceMan from '../../assets/servicesMan.png';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { MdLibraryBooks, MdOutlineGroups } from 'react-icons/md';
import { LiaMoneyBillAltSolid } from 'react-icons/lia';
import { ImStatsDots } from 'react-icons/im';
import { TbReportSearch } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import extraImg from '../../assets/YE_Man.png';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import feedBackPerson1 from '../../assets/person.png'
import FAQ from '../../Components/ServiceComponents/FAQ';



const SEO = () => {

    const IntroSeoContent = {
        leftImg: seo,
        firstContentRight :{
            slogan: " تحسين محركات البحث ",
            title: "نستطيع تطوير علاماتكم التجارية لتحقق أفضل انتشار ممكن",
            desc: " في وكالة ZAHY للحلول التسويقية، نحرص بها على تحسين ظهور موقعك الإلكتروني وتطوير جميع صفحاته لكي تناسب محركات البحث كما نساهم بهذه الخدمة في زيادة عملائك وتقليص نفقات التسويق بالإضافة إلى قيامنا بتحليل النتائج ومراقبة الأداء العام لموقعك ولصفحاته المهمة بشكلٍ خاص، فإذا كنت ترغب بظهور موقعكَ ضمن النتائج الخمس الأولى في جوجل، تواصل معنا الآن."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }

    const ImportantSeoContent = {
        head: "  أهمية  تحسين محركات البحث ",
        subTitle: " من أفضل طرق التسويق الرقمي ",

        items : [
            {
                title:" تعزيز الثقة والمصداقية ",
                subTitle: " عادة ما يثق المستخدمون في نتائج البحث التي تظهر لهم أولا وعندما يظهر موقعك في النتائج الأعلى فإنه يكسب ثقة المستخدم في جودة المحتوى والخدمات التي يقدمها."
            },
            {
                title:" زيادة معدل الزيارات للموقع ",
                subTitle: " تحسين محركات البحث يساهم في زيادة عدد الزوار القادمين إلى موقعك فعندما يتصدر موقعك قائمة نتائج البحث يكون من المرجح أن ينقر عليها المستخدمون بشكل أكبر وبالتالي يزيد عدد الزيارات."
            },
            {
                title:" زيادة الوعي بالعلامة التجارية ",
                subTitle: "عندما يظهر موقعك في نتائج البحث بانتظام، فإنه يبني وعيًا قويًا لعلامتك التجارية ويتذكر الزوار أسماء المواقع الشهيرة والتي تظهر بصورة مستمرة مما يؤدي إلى زيادة التعرف بالعلامة التجارية المرتبطة بها."
            },
            {
                title:" زيادة المبيعات والإيرادات ",
                subTitle: " يؤدي التحسين على الموقع إلى زيادة الظهور أمام الجمهور المستهدف وبالتالي فإنه يزيد فرص المبيعات والإيرادات فعندما ينجح موقعك في جذب المزيد من الزوار فإن هناك فرصة أكبر لتحويلهم إلى عملاء."
            },
            {
                title:" تحسين تجربة المستخدم ",
                subTitle: "يعمل تحسين محركات البحث على تحسين تجربة المستخدم على موقعك. سرعة التحميل، وسهولة الاستخدام، والمحتوى الجيد جميعها حوافز تجعل المستخدم يبقى في موقعك ويرجع إليه مرة أخرى. "
            },
            {
                title:" توفير تكاليف التسويق ",
                subTitle: "يعتبر تحسين محركات البحث من أقل الطرق التسويقية تكلفة وأكثرها قائدة للعلامة التجارية وأكثرها أستدامة من غيرها من الاستراتيجيات مثل الإعلانات المدفوعة قصيرة المدى. "
            },
        ]
    }

    const whyUsSeoContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "انضم إلى نقرات لتجربة تطوير حضورك الرقمي بشكل مذهل، واستفد بالكامل من فعالية تصميم المواقع الإلكترونية في تحقيق أهدافك التسويقية. دعنا نواكبك في رحلة النجاح الرقمي!",
        items: [



            {
                text:" خبرة أعوام ",
                icon:<AiOutlineLike size={35} />
            },
            {
                text: " فريق متخصص",
                icon: <MdOutlineGroups size={35} />
            },
            {
                text:"  سابقة أعمال متميزة ",
                icon: <MdOutlineGroups size={35} />
            },
            {
                text:" تكلفة مناسبة ",
                icon:<LiaMoneyBillAltSolid size={35} />
            },
            {
                text: " نتائج طويلة المدى",
                icon: <MdLibraryBooks size={35} />
            },
            {
                text:"استراتيجيات فعالة",
                icon:<ImStatsDots size={35} />
            },
            {
                text: "تقارير أداء دورية ",
                icon:<TbReportSearch size={35} />
            },
            {
                text: "خدمة عملاء على مدار الساعة",
                icon: <RiCustomerService2Fill size={35} />
            },
        ]
    }

    const PortfolioSeoContnet = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
        ]
    }

    const extraSeoContent = {
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

    const feedbackSeoContent = {
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

    const faqSeoContent = [
        {
            title: "كيف تبدأ عملية تحسين محركات البحث؟ ",
            answer: [
                {
                    desc: "تبدأ عملية تحسين محركات البحث في نقرات بتنفيذ بعض استراتيجيات الـ SEO الأساسية، مثل استخدام الكلمات الرئيسية في محتوى موقعك وتحسين عناوين الصفحات، وتطبيق استراتيجية شاملة تناسب مجال نشاطك و تحقيق أهدافك التسويقية."
                }
            ]
        },
        {
            title: "ماذا تقدم شركة نقرات لكى تتصدر بموقعك فى محركات البحث؟",
            answer: [
                {
                    desc: "تقدم شركة نقرات مجموعة شاملة من الخدمات التي تساعدك في تحسين ظهور موقعك في محركات البحث وتتضمن هذه الخدمات التحليل والبحث عن الكلمات الرئيسية الأكثر شيوعًا واستخدامها بشكل استراتيجي في محتوى الموقع وتحسين عناصر التقنية الأساسية مثل العناوين والوصفات والروابط الداخلية، كما تقوم الشركة أيضًا بتقديم تقارير منتظمة لقياس تقدم الموقع."
                }
            ]
        },
        {
            title: "هل تشمل الخدمة تقارير دورية لقياس ومتابعة تحسين محركات البحث وتقييم النتائج؟ ",
            answer: [
                {
                    desc: "نعم، نوفر لك في نقرات تقارير دورية حول أداء الموقع لقياس ومتابعة تحسين محركات البحث وتقدم أيضا توصيات لتحسين الأداء تساعد في تقييم النتائج المحققة من استراتيجية تحسين محركات البحث المطبقة."
                }
            ]
        },
        {
            title: "ما هي المدة المتوقعة لرؤية تحسينات في تصنيف موقع الشركة بعد تطبيق خدمة تحسين محركات البحث؟",
            answer: [
                {title: " قد يستغرق الأمر بضعة أشهر لرؤية تحسينات قابلة للقياس في تصنيف موقع الشركة ولكن يعتمد ذلك على عدة عوامل بما في ذلك :"},
                {details: "1-", desc: "حجم الموقع"},
                {details: "2-", desc: "حجم المنافسة"},
                {details: "3-", desc: "جودة العمل"},
                {details: "4-", desc: "استجابة محرك البحث وغيرها"},
                {desc:"ولذلك في نقرات نضمن لك نتائج مرضية في فترات زمنية قصير"}
            ]
        },
        {
            title: "ما هي أفضل الاستراتيجيات لتحقيق نتائج مرضية في تحسين محركات البحث؟ ",
            answer: [
                {
                    title:"بعض الاستراتيجيات الفعالة المتبعة في نقرات لتحقيق نتائج مرضية في تحسين محركات البحث تشمل:"},
                {details: "1-" , desc: "تحسين المحتوى والكلمات الرئيسية"},
                {details: "2-", desc: "بناء روابط جودة عالية"},
                {details: "3-", desc: "تحسين تجربة المستخدم وسرعة التحميل"},
                {details: "4-", desc: "مراقبة وتقييم الأداء والتحسين المستمر."},
            ]
        },
        {
            title: "هل يمكن تحسين محركات البحث بدون الحاجة لمساعدة خارجية؟ ",
            answer: [
                {
                    desc: "في بعض الحالات يمكن للشركات تحسين محركات البحث بمفردها باستخدام أدوات التحسين المتاحة والموارد الداخلية ولكن هذا قد لا يحقق النتائج المرغوبة لذلك ننصحك بالتعاون مع نقرات الآن و مشاهدة الفارق في النتائج."
                }
            ]
        },
        {
            title: "ما هي العوامل الرئيسية التي تؤثر على تصنيف موقع الشركة في محركات البحث؟",
            answer: [
                {title: "العوامل التي تؤثر على تصنيف موقع الشركة في محركات البحث هي :"},
                {details: "1-", desc: "جودة المحتوى "},
                {details: "2-", desc: "العناوين والوصف "},
                {details: "3-", desc: "الكلمات الرئيسية"  },
                {details: "4-", desc: "الروابط الخارجية "},
                {details: "5-", desc: "تجربة المستخدم وغيرها"},
            ]

        },
        {
            title: "كيف يعمل تحسين محركات البحث على زيادة وجود الشركة عبر الإنترنت؟ ",
            answer: [
                {title: "يعمل تحسين محركات البحث على زيادة وجود الشركة عبر الإنترنت عن طريق تنفيذ استراتيجيات متعددة مثل :"},
                {details: "1-", desc: "تحسين محتوى الموقع"},
                {details: "2-", desc: "تحسين العناوين والوصف والكلمات الرئيسية"},
                {details: "3-", desc: "بناء روابط ذات جودة عالية"},
                {details: "4-", desc: "تحسين سرعة التحميل"},
                {details: "5-", desc: "تحسين تجربة المستخدم"},
                {desc: "والمزيد وهذه الاستراتيجيات تزيد من ظهور الموقع في نتائج البحث للمستخدمين."}

            ]
            
        },
        {
            title: "ما هي خدمة تحسين محركات البحث وما فوائدها؟ ",
            answer: [
                {title: "تحسين محركات البحث هي خدمة تقدمها نقرات بهدف زيادة ظهور موقعك في نتائج البحث العضوية لمحركات البحث مثل جوجل وبينج وغيرها من محركات البحث المختلفة."},
                {title: "ومن أهم فوائده :"},
                {details: "1-", desc: "زيادة تحسين ظهور الشركة على الإنترنت"},
                {details: "2-", desc: "وزيادة عدد الزيارات للموقع"},
                {details: "3-", desc: "زيادة الوعي بالعلامة التجارية"},
                {desc: "وبالتالي زيادة الثقة لدى العملاء المحتملين ما يساهم بشكل غير مباشر في زيادة عدد المبيعات والإيرادات."},

            ]

        }
    ]


  return (
    <div>
        <PageBanner head={'  تحسين محركات البحث'} />

        <div className="px-48">
                <Intro
                    leftImg={IntroSeoContent.leftImg}
                    firstContentRight={IntroSeoContent.firstContentRight}
                    rightImg={IntroSeoContent.rightImg}
                    secondContentLeft={IntroSeoContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantSeoContent.head}
                subTitle={ImportantSeoContent.subTitle}
                options={ImportantSeoContent.items}
            />

                <div className="px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsSeoContent.headTitle}
                    subTitle={whyUsSeoContent.subTitle}
                    items={whyUsSeoContent.items}
                />

                <Portfolio
                    headTitle={PortfolioSeoContnet.headTitle}
                    subTitle={PortfolioSeoContnet.subTitle}
                    items={PortfolioSeoContnet.items}
                />
            </div>

            <ExtraContent
                slogan={extraSeoContent.slogan}
                title={extraSeoContent.title}
                desc={extraSeoContent.desc}
                items={extraSeoContent.items}
                leftImg={extraImg}
            />
            <ServiceFeedback
                title={feedbackSeoContent.title}
                desc={feedbackSeoContent.desc}
                items={feedbackSeoContent.items}
            />

            <FAQ items={faqSeoContent} />
    </div>
  )
}

export default SEO