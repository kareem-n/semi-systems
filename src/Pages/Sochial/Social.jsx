
import PageBanner from '../../Components/pageBanner/PageBanner';
import social from '../../assets/social.png';
import serviceMan from '../../assets/servicesMan.png';
import Intro from '../../Components/ServiceComponents/Intro';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { FaHandHoldingMedical, FaRegCheckCircle } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { LiaMoneyBillAltSolid } from 'react-icons/lia';
import { GiClockwork } from 'react-icons/gi';
import { TbReportSearch } from 'react-icons/tb';
import { MdOutlineGroups } from 'react-icons/md';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import extraImg from '../../assets/YE_Man.png';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import feedBackPerson1 from '../../assets/person.png'
import FAQ from '../../Components/ServiceComponents/FAQ';



const Social = () => {

    const IntroSocialContent = {
        leftImg: social,
        firstContentRight :{
            slogan: " ادارة حسابات السوشيال ميديا",
            title: "نُدير حساباتك باحترافية تضمن تحقيقا لأهداف المرجوّة",
            desc: "وهذا يتم عبر التخطيط السليم ووضع جدول نشر يضمن الوصول إلى أوسع فئة من الجمهور المستهدف، مع مراعاة النشر في أوقات الذروة ونقوم أيضًا بتحليل حسابات السوشيال ميديا الخاصة بك باحترافية، نحلل المنافسين والسوق لاختيار المنصات المناسبة، ثم نضع دراسة شاملة لمواصفات الخدمة ومميزاتها التنافسية مع خطة المحتوى"
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }
    const ImportantSociallContent = {
        head: "أهمية إدارة حسابات التواصل الاجتماعي",
        subTitle: " إدارة حسابات التواصل الاجتماعي أداة حيوية لأي مؤسسة أو فرد يودون بناء وتطوير وجودهم الرقمي وتوسيع نطاق تأثيرهم.",

        items : [
           {
            title: "تحسين التواجد الرقمي",
            subTitle: "استراتيجية المحتوى المبتكرة والمناسبة تساعد في جذب المزيد من الجمهور وزيادة التفاعلات والمتابعين لحساباتك الاجتماعية وتحسين وجودك الرقمي."
           },
           {
            title: "زيادة المبيعات",
            subTitle: "المحتوى الجذاب و التواجد والتفاعل على منصات التواصل الاجتماعي يؤدي إلى زيادة مبيعات المنتجات أو الخدمات التي تقدمها."
           },
           {
            title: "تواجد مستمر وإدارة للأزمات",
            subTitle: "ستكون علامتك التجارية متواجدة بشكل مستمر على المنصات الاجتماعية وفي حالة حدوث أي أزمة سيتولى فريق الخبراء التعامل معها وإدارتها بفعالية للحفاظ على سمعة علامتك التجارية."
           },
           {
            title: "زيادة الوعي بالعلامة التجارية",
            subTitle: "التواجد الفعال على مواقع التواصل الاجتماعي يساعد على بناء وتعزيز هوية علامتك التجارية والوصول لعدد أكبر من العملاء المحتملين وبناء الثقة مع العملاء الحاليين."
           },
           {
            title: "تحليل البيانات وتقارير مفيدة",
            subTitle: "تقارير وتحليلات مفصلة ورصد دوري لعدد المشاهدات والإعجابات والتعليقات والمشاركات مما يساعدك على تحديد النقاط القوية والضعف واتخاذ خطوات لتحسين الأداء بشكل مستمر."
           },
           {
            title: "توفير الوقت والجهد",
            subTitle: "الاعتماد على فريق متخصص سيوفر لك الكثير من الوقت والجهد الذي قد تستغرقه في إنشاء وتنفيذ حملات التسويق عبر منصات التواصل الاجتماعي ويضمن لك أيضا فاعلية النتائج."
           },
        ]
    }

    const whyUsSocialContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "انضم إلى نقرات لتجربة تطوير حضورك الرقمي بشكل مذهل، واستفد بالكامل من فعالية تصميم المواقع الإلكترونية في تحقيق أهدافك التسويقية. دعنا نواكبك في رحلة النجاح الرقمي!",
        items: [
            {
                text:"  مؤسسة موثوقة ",
                icon:<AiOutlineLike size={35} />
            },
            {
            text: "خبرة ومهارة",
            icon: <FaRegCheckCircle size={35}/>
            },
            {
                text: "خدمة عملاء على مدار الساعة",
                icon: <RiCustomerService2Fill size={35} />
            },
            {
                text:"  سعر تنافسي للخدمة ",
                icon:<LiaMoneyBillAltSolid size={35} />
            },
            {
            text:" الألتزام بالمواعيد",
            icon:<GiClockwork size={35} />
            },
            {
                text: "توفير تقارير دورية",
                icon:<TbReportSearch size={35} />
            },
            {
                text: " مرونة في التعاملات ",
                icon: <FaHandHoldingMedical size={35} />
            },
            {
                text: " فريق متكامل من المتخصصين",
                icon: <MdOutlineGroups size={35} />
            },
        ]
    }

    const PortfolioSocialContnet = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
        ]
    }

    const extraSocialContent = {
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

    const feedbackSocialContent = {
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

    const faqSocialContent =[
        {
            title: "لماذا تعتبر وسائل التواصل الاجتماعي أداة رائعة تمكّن نشاطك التجاري من بناء الثقة والتفاعل مع جمهورك؟",
            desc: "تعتبر وسائل التواصل الاجتماعي أداة رائعة تمكّن نشاطك التجاري من بناء الثقة والتفاعل مع جمهورك حيث تساعد وسائل التواصل الاجتماعي في التواصل مع الجمهور بشكل فعال وتسهل بناء العلاقات القوية و تعزيز العلامة التجارية وزيادة قاعدة العملاء."
        },
        {
            title: "هل تدعم خدمة إدارة حسابات التواصل الاجتماعي جميع منصات التواصل الاجتماعي؟ ",
            desc: "نعم، في نقرات نقدم لك خدمة إدارة حسابات التواصل الاجتماعي على منصات متعددة مثل فيسبوك وإنستغرام وتويتر ولينكد إن وغيرها."
        },
        {
            title: "هل ستتولى الشركة المسؤولية الكاملة عن التفاعل مع المتابعين على حسابات التواصل الاجتماعي الخاصة بي؟ ",
            desc: "نعم، يتولى المدير المختص بإدارة حساباتك في نقرات مسئولية التفاعل مع المتابعين على حسابات التواصل الاجتماعي الخاصة بك و الرد على التعليقات والاستفسارات من العملاء."
        },
        {
            title: "هل يمكنني التحكم في محتوى منشورات التواصل الاجتماعي الخاصة بي؟ ",
            desc: "بالطبع نعم لك حق السيطرة الكاملة على محتوى منشورات التواصل الاجتماعي الخاصة بك ويتعاون المدير المختص بإدارة حسابات التواصل الخاصة بك في نقرات معك في ذلك."
        },
        {
            title: "هل تتطلب خدمة إدارة حسابات التواصل الاجتماعي ميزانية كبيرة؟ ",
            desc: "ليس من الضروري أن تكون الخدمة مكلفة بشكل كبير حيث يمكن تحديد ميزانية مسبقة وتحديد استراتيجية التسويق الرقمي المناسبة لذلك لتلبية احتياجات النشاط التجاري وفي نقرات نقدم لك أفضل سعر لخدمة إدارة حسابات التواصل الاجتماعي."
        },
        {
            title: "ما هي مدة التعاقد على الخدمة؟ ",
            desc: "نقدم لك في نقرات إمكانية التعاقد لفترة زمنية محددة مثل 6 أشهر أو سنة كاملة، أو يمكن أن يكون عقدًا شهريًا قابلًا للتجديد وذلك حسب احتياجاتك."
        },
        {
            title: "لماذا يحتاج نشاطك التجاري إلى إدارة حسابات التواصل الاجتماعي؟ ",
            desc: "يحتاج نشاطك التجاري إلى إدارة حسابات التواصل الاجتماعي للمساعدة في بناء الوعي بالعلامة التجارية وزيادة ظهور الشركة لدى الجمهور و زيادة التفاعل والمشاركة والاستجابة للتعليقات والرسائل."
        },
        {
            title: "ما هي افضل شركة ادارة حسابات تواصل اجتماعي؟ ",
            desc: "شركة المثلى لإدارة حسابات التواصل الاجتماعي تختلف وفقًا لاحتياجات ومتطلبات كل شركة أو فرد ومن أفضل الشركات التي يمكنك الوثوق بها هي شركة نقرات التي تمتلك فريق من المبدعين و المتخصصين."
        },
        {
            title: "ما هي خدمة إدارة حسابات التواصل الاجتماعي؟ ",
            desc: "خدمة إدارة حسابات التواصل الاجتماعي هي خدمة توفرها لك نقرات للمساعدة في إدارة وتحسين أداء حسابات وسائل التواصل الاجتماعي للأفراد والشركات وتشمل إنشاء المحتوى المناسب وجدولة المنشورات، وتنفيذ استراتيجيات التسويق الرقمي، ومراقبة وتحليل الأداء، والتفاعل مع المتابعين."
        },
    ]

return (
    <div>
        <PageBanner head={'تصميم الهوية التجارية'} />

        <div className="px-48">
                <Intro
                    leftImg={IntroSocialContent.leftImg}
                    firstContentRight={IntroSocialContent.firstContentRight}
                    rightImg={IntroSocialContent.rightImg}
                    secondContentLeft={IntroSocialContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantSociallContent.head}
                subTitle={ImportantSociallContent.subTitle}
                options={ImportantSociallContent.items}
            />

            <div className="px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsSocialContent.headTitle}
                    subTitle={whyUsSocialContent.subTitle}
                    items={whyUsSocialContent.items}
                />

                <Portfolio
                    headTitle={PortfolioSocialContnet.headTitle}
                    subTitle={PortfolioSocialContnet.subTitle}
                    items={PortfolioSocialContnet.items}
                />
            </div>

            <ExtraContent
                slogan={extraSocialContent.slogan}
                title={extraSocialContent.title}
                desc={extraSocialContent.desc}
                items={extraSocialContent.items}
                leftImg={extraImg}
            />

            <ServiceFeedback
                title={feedbackSocialContent.title}
                desc={feedbackSocialContent.desc}
                items={feedbackSocialContent.items}
            />

            <FAQ items={faqSocialContent} />


    </div>
)
}

export default Social