import PageBanner from '../../Components/pageBanner/PageBanner'
import Intro from '../../Components/ServiceComponents/Intro';
import writing from '../../assets/writing.png';
import serviceMan from '../../assets/servicesMan.png';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineGroups, MdOutlineSupportAgent } from 'react-icons/md';
import { RiCharacterRecognitionFill } from 'react-icons/ri';
import { GoShieldCheck } from 'react-icons/go';
import { FaAngrycreative } from 'react-icons/fa';
import { GiClockwork } from 'react-icons/gi';
import { LiaMoneyBillAltSolid } from 'react-icons/lia';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import extraImg from '../../assets/YE_Man.png';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import feedBackPerson1 from '../../assets/person.png'
import FAQ from '../../Components/ServiceComponents/FAQ';




const Writing = () => {

    const IntroWritingContent = {
        leftImg: writing,
        firstContentRight :{
            slogan: " كتابة المحتوي ",
            title: "نستطيع تطوير علاماتكم التجارية لتحقق أفضل انتشار ممكن",
            desc: " تُعتبر خدمة كتابة المحتوى استثمارًا ضروريًا لنجاح أي عمل أو شركة، حيث إن الحصول على محتوى متميز وعالي الجودة يُعد مفتاحًا لجذب الجمهور المستهدف. تُشكل كتابة المحتوى جزءًا أساسيًا من استراتيجيات التسويق الحديثة، حيث تهدف إلى تقديم محتوى جذاب ومتفرد للشركات والأفراد على الإنترنت. تسهم هذه الخدمة في تعزيز الحضور الرقمي للعملاء وزيادة التفاعل مع الجمهور المستهدف من خلال إنشاء محتوى متنوع ومفيد يلبي احتياجاتهم."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }

    const ImportantWritingContent = {
        head: "أهمية كتابة المحتوى",
        subTitle: "كتابة المحتوى أهميتها لا تقدر بثمن فالكتابة هي أساس كل تواجد عبر الإنترنت سواءً في المواقع الإلكترونية أو المدونات أو وسائل التواصل الاجتماعي.",

        items: [
            {
                title: "تعزيز التواصل",
                subTitle: "المحتوى الجيد والمفيد وسيلة ممتازة للتواصل مع الجمهور فعن طريق كتابة المحتوى القوي يمكنك جذب اهتمام القراء والمشاركة معهم والتفاعل معهم مما يسهم في بناء علاقات قوية ودائمة."
            },
            {
                title: "كسب ثقة العملاء",
                subTitle: "يساهم المحتوى المفيد في بناء ثقة الجمهور فيك ككاتب. فعندما يرى القراء أنك تتقنالموضوع وتقدم محتوى ذو قيمة وجودة، فإن ذلك يجعلهم يثقون بك ويعتبرونك مصدراً قوياً للمعلومات."
            },
            {
                title: "جذب الزوار وزيادة الانتشار",
                subTitle: "المحتوى القوي سبباً رئيسياً في جذب عدد أكبر من الزوار وزيادة انتشارك عبر المنصات المختلفة حيث يمكن للقراء المشاركة وإعادة نشر ما كتبته."
            },
            {
                title: "زيادة حجم المبيعات",
                subTitle: "كتابة المحتوى أداة قوية لتحقيق أهدافك التسويقية و وسيلة فعالة للترويج للمنتجات والخدمات وزيادة مبيعات وإيرادات الشركة."
            },
            {
                title: "زيادة تفاعل القراء",
                subTitle: "المحتوى الممتع والشيق سبباً رئيسياً في استمرار القراء في قراءة ومشاركة المحتوى. فإذا كان المحتوى غنياً ومفيداً، فسيتفاعل القراء معه وينشروه للآخرين."
            },
            {
                title: "تحسين ترتيب محركات البحث",
                subTitle: "يساعد المحتوى الجيد في زيادة ظهور الصفحة في نتائج محركات البحث وبالتالي يزيد من قابلية العثور على الموقع وجذب المستخدمين المستهدفين."
            },
        ]
    }


    const whyUsWritingContent = {
        headTitle: "لماذا عليك اختيارنا؟",
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",

        items: [
            {
                text: "مؤسسة موثقة",
                icon:<AiOutlineLike size={35} />
            },
            {
                text: "متخصصين في كتابة المحتوى",
                icon:<MdOutlineGroups size={35} />
            },
            {
                text: "كتابة محتوى بأكثر من لغة",
                icon:<RiCharacterRecognitionFill size={35} />
            },
            {
                text: "خصوصية و أمان",
                icon:<GoShieldCheck size={35} />
            },
            {
                text: "محتوى ابداعي و مميز",
                icon:<FaAngrycreative size={35} />
            },
            {
                text: "الالتزام بالمواعيد",
                icon:<GiClockwork size={35} />
            },
            {
                text: "سعر تنافسي للخدمة",
                icon:<LiaMoneyBillAltSolid size={35} />
            },
            {
                text: "دعم فني على مدار الساعة",
                icon:<MdOutlineSupportAgent size={35} />
            },

        ]
    }

    const PortfolioWritingContent= {
        headTitle: "أعمالنا",
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
            
        ]
    }

    const extraWritingContent = {
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

    const feedbackWritingContent = {
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

    const faqWritingContent = [
        {
            title: "ما هي خدمة كتابة المحتوى وما فوائدها؟",
            answer: [
                {
                    title: "خدمة كتابة المحتوى هي خدمة توفرها زاهي المتخصصة في إنتاج محتوى جذاب للعملاء ويشمل المحتوى على جميع أنواع النصوص مثل"},
                    {details: "1-", desc: "المقالات"},
                    {details: "2-", desc: "المدونات"},
                    {details: "3-", desc: "التقارير"},
                    {details: "4-", desc: "ومواد التسويق الرقمي "},
                    {desc: "وتهدف هذه الخدمة إلى تزويد العملاء بمحتوى ذو جودة عالية وملائم لاحتياجاتهم واهتماماتهم. ومن أهم فوائد خدمة كتابة المحتوى هو تحسين التواجد الرقمي، زيادة حركة المرور والتفاعل في المواقع الإلكترونية وتعزيز الهوية التجارية وزيادة حجم المبيعات."}
            ]
        },
        {
            title: "كيف تختار أفضل شركة متخصصة لكتابة المحتوى؟ ",
            answer: [
                {title: "لاختيار أفضل شركة متخصصة لكتابة المحتوى ينبغي عليك اتباع بعض الخطوات الرئيسية :"},
                {details: "1-", desc: "البحث عن الشركات ذات الخبرة والمصداقية."},
                {details: "2-", desc: "مراجعة معرض أعمال الشركة والاطلاع على التقييمات والآراء من العملاء السابقين."},
                {details: "3-", desc: "التأكد من أن الشركة تتعامل مع كتاب محتوى محترفين ومتخصصين في مجالات مختلفة.  "},
                {details: "4-", desc: "يجب السؤال عن استراتيجية الكتابة وعملية التحرير التي تتبعها الشركة."},
                {details: "5-", desc: "مقارنة الأسعار والخدمات المقدمة واختيار الشركة التي تلبي احتياجاتك بشكل أفضل."},
            ]
        },

        {
            title: "كيف تكتب محتوى احترافي لأعمالك؟ ",
            answer: [
                {title: "لكتابة محتوى احترافي لأعمالك يجب أن تقوم :"},
                {details: "1-", desc: "ببحث شامل وجمع معلومات ذات صلة بموضوعك"},
                {details: "2-", desc: "استخدام لغة بسيطة وواضحة وتجنب استخدام الجمل المعقدة والمصطلحات التقنية غير المفهومة"},
                {details: "3-", desc: "يجب أيضا الاهتمام بتنظيم المحتوى وتقسيمه إلى فقرات مختلفة لتسهيل القراءة."},
                {details: "4-", desc: "التأكد من أن المحتوى خالٍ من الأخطاء النحوية والإملائية عن طريق مراجعته جيدًا قبل نشره"},
            ]
        },

        {
            title: "هل يمكن كتابة المحتوى بدون الحاجة لمساعدة خارجية؟",
            answer: [
                {desc: "نعم، يمكنك كتابة المحتوى بدون الحاجة لمساعدة خارجية ولكن قد يكون من الصعب عليك إنتاج محتوى عالي الجودة وجذاب للقراء بمفردك ولذلك فمن الأفضل الاستعانة بخدمة كتابة المحتوى المتخصصة في زاهي التي توفر لك الجودة والخبرة والاحترافية التي تضمن نجاح محتوى أعمالك."},
            ]
        },

        {
            title: "هل تشمل الخدمة تقارير دورية لقياس ومتابعة الأداء وتقييم النتائج؟",
            answer: [
                {
                    desc: "نعم، تشمل خدمة كتابة المحتوى في زاهي تقارير دورية شهرية أو أسبوعية لقياس ومتابعة الأداء وتقييم النتائج وتحسين الاستراتيجيات المتبعة وتوضيح تأثير وجودة المحتوى على حركة المرور في الموقع ومستوى التفاعل مع المواقع والشبكات الاجتماعية."
                },
            ]
        },

        {
            title: "ما هي العناصر الأساسية لكتابة محتوى فعال وجذاب؟",
            answer: [
                {details: "1-", desc: "وضوح الهدف"},
                {details: "2-", desc: "تماسك الأفكار"},
                {details: "3-", desc: "جذب الانتباه من البداية"},
                {details: "4-", desc: "استخدام لغة سهلة ومفهومة"},
            ]
        },

        {
            title: "كيف يمكن تحسين محركات البحث (SEO) من خلال كتابة المحتوى؟",
            answer: [
                {details: "1-", desc: "استخدام الكلمات المفتاحية"},
                {details: "2-", desc: "تحسين العناوين والوصف"},
                {details: "3-", desc: "تنظيم المحتوى بطريقة متناسقة"},
                {details: "4-", desc: "إضافة روابط داخلية وخارجية"},
            ]
        },

        {
            title: "ما أهمية تحديد الجمهور المستهدف في كتابة المحتوى؟",
            answer: [
                {details: "1-", desc: "توجيه الرسالة بشكل أفضل"},
                {details: "2-", desc: "تحسين تفاعل القراء"},
                {details: "3-", desc: "تخصيص الأسلوب واللغة بما يناسبهم"},
            ]
        },

        {
            title: "كيف يمكن قياس نجاح المحتوى بعد نشره؟",
            answer: [
                {details: "1-", desc: "متابعة عدد الزيارات"},
                {details: "2-", desc: "تحليل معدل التفاعل (تعليقات، مشاركات)"},
                {details: "3-", desc: "مراقبة معدل التحويل"},
            ]
        }
    ]

    






  return (
    <div>
        <PageBanner head={' كتابة المحتوي '} />

        <div className="px-5 md:px-48">
                <Intro
                    leftImg={IntroWritingContent.leftImg}
                    firstContentRight={IntroWritingContent.firstContentRight}
                    rightImg={IntroWritingContent.rightImg}
                    secondContentLeft={IntroWritingContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantWritingContent.head}
                subTitle={ImportantWritingContent.subTitle}
                options={ImportantWritingContent.items}
            />

        <div className="px-5 md:px-48 py-20">
            <WhyChooseUs
                headTitle={whyUsWritingContent.headTitle}
                subTitle={whyUsWritingContent.subTitle}
                    items={whyUsWritingContent.items}
            />

                <Portfolio
                    headTitle={PortfolioWritingContent.headTitle}
                    subTitle={PortfolioWritingContent.subTitle}
                    items={PortfolioWritingContent.items}
                />

        </div>

        <ExtraContent
            slogan={extraWritingContent.slogan}
            title={extraWritingContent.title}
            desc={extraWritingContent.desc}
            items={extraWritingContent.items}
            leftImg={extraImg}
        />

        <ServiceFeedback
            title={feedbackWritingContent.title}
            desc={feedbackWritingContent.desc}
            items={feedbackWritingContent.items}
        /> 

        <FAQ items={faqWritingContent}/>

    </div>
  )
}

export default Writing