import PageBanner from '../../Components/pageBanner/PageBanner'
import Intro from '../../Components/ServiceComponents/Intro';
import writing from '../../assets/graphic.png';
import serviceMan from '../../assets/servicesMan.png';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineGroups } from 'react-icons/md';
import { GoStopwatch } from 'react-icons/go';
import {  FaCameraRetro, FaImages, FaTools } from 'react-icons/fa';
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
import { SiAdobecreativecloud } from 'react-icons/si';




const Photography = () => {

    const IntroWritingContent = {
        leftImg: writing,
        firstContentRight: {
            slogan: "التصوير الفوتغرافي",
            title: `نستطيع تطوير علاماتكم التجارية
لتحقق أفضل انتشار ممكن`,
            desc: "اختبر خدمة التصوير الفوتوغرافي لدينا للحصول على لمسة احترافية لا تُضاهى! إنها الخدمة الأساسية لكل فرد أو جهة تبحث عن صور ذات جودة عالية وتميز. تعكس الصور التي نقدمها محتوى منتجاتك، مما يعزز قيمتها، سواء كانت تجارية أو فنية أو شخصية. دع صورك تتحدث بصدق وجاذبية من خلال خدمتنا الفريدة في التصوير الفوتوغرافي."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: "استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة"
        }

    }

    const ImportantWritingContent = {
        head: "أهمية التصوير الفوتوغرافي؟",
        subTitle: "التصوير الفوتوغرافي مهم للغاية، فهو يبرز هوية العميل بصريًا ويعزز الثقة عبر المواقع و وسائل التواصل.",

        items: [
            {
                title: "تعزيز التواجد والانتشار",
                subTitle: "يعتبر التصوير الفوتوغرافي أداة قوية للتسويق والإعلان حيث يمكنه إبراز منتجات الشركة أو خدماتها بطريقة جذابة واحترافية."
            },
            {
                title: "جذب الزوار وزيادة الانتشار",
                subTitle: "المحتوى القوي سبباً رئيسياً في جذب عدد أكبر من الزوار وزيادة انتشارك عبر المنصات المختلفة حيث يمكن للقراء المشاركة وإعادة نشر ما كتبته."
            },
            {
                title: "تعزيز ثقة العملاء",
                subTitle: `يتيح التصوير الفوتوغرافي لك فرصة لعرض منتجاتك
أو خدماتك بشكل احترافي وجذاب فالصور الملفتة
ُبرز مميزات المنتجات والخدمات وتسهم في تعزيز
الثقة لدى الجمهور.`
            },
            {
                title: "تعزيز الهوية التجارية",
                subTitle: `يساعد التصوير في بناء الهوية المؤسسية للشركات
فهو يعكس القيم والرؤية والمهارات التي تميز الشركة عن غيرها.`
            },
            {
                title: "التميز والتفرد",
                subTitle: `من خلال التصوير الفوتوغرافي يمكنك تحقيق التميز
والتفرد في عرض منتجاتك أو خدماتك لأن الصور
المبدعة والأصلية قادرة على جذب الانتباه وخلق هوية مميزة لك عن المنافسين المتواجدين في السوق.`
            }, {
                title: "توضيح المحتوى بشكل أفضل",
                subTitle: "يعزز التصوير الفوتوغرافي المواد الدعائية ويجعلها أكثر جاذبية وقدرة على إيصال الرسالة المطلوبة وذلك لأن الصور الاحترافية تقدم المعلومات بطريقة بصرية وتسهم في توضيح الفكرة والمحتوى المقدم."
            },
        ]
    }


    const whyUsWritingContent = {
        headTitle: "لماذا عليك اختيارنا؟",
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة خدمة التصوير الفوتوغرافي في تحقيق أهدافك التسويقية.",

        items: [
            {
                text: "مؤسسة موثقة",
                icon: <AiOutlineLike size={35} />
            },
            {
                text: "فريق ذو خبرة و كفاءة",
                icon: <MdOutlineGroups size={35} />
            },
            {
                text: "صور احترافية بجودة عالية",
                icon: <FaCameraRetro size={35} />
            },
            {
                text: "الالتزام بمواعيد التسليم",
                icon: <GoStopwatch size={35} />
            },
            {
                text: "أدوات متطورة ",
                icon: <FaTools size={35} />
            },
            {
                text: "الاهتمام بالتفاصيل",
                icon: <SiAdobecreativecloud size={35} />
            },
            {
                text: "سعر تنافسي للخدمة",
                icon: <LiaMoneyBillAltSolid size={35} />
            },
            {
                text: "عدد صور مناسب",
                icon: <FaImages size={35} />
            },

        ]
    }

    const PortfolioWritingContent = {
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
            {
                img: feedBackPerson1,
                name: 'mostafa ayman',
                desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية'
            },
            {
                img: feedBackPerson1,
                name: 'Mohamed fathey',
                desc: 'تجربتي معكم كانت مدهشة. الجودة والدعم فاقا توقعاتي بشكل كبير. لم أتوقع أن أجد فريقًا ملتزمًا بهذه الدرجة من الاحترافية'
            },
            {
                img: feedBackPerson1,
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
                    title: "خدمة كتابة المحتوى هي خدمة توفرها زاهي المتخصصة في إنتاج محتوى جذاب للعملاء ويشمل المحتوى على جميع أنواع النصوص مثل"
                },
                { details: "1-", desc: "المقالات" },
                { details: "2-", desc: "المدونات" },
                { details: "3-", desc: "التقارير" },
                { details: "4-", desc: "ومواد التسويق الرقمي " },
                { desc: "وتهدف هذه الخدمة إلى تزويد العملاء بمحتوى ذو جودة عالية وملائم لاحتياجاتهم واهتماماتهم. ومن أهم فوائد خدمة كتابة المحتوى هو تحسين التواجد الرقمي، زيادة حركة المرور والتفاعل في المواقع الإلكترونية وتعزيز الهوية التجارية وزيادة حجم المبيعات." }
            ]
        },
        {
            title: "كيف تختار أفضل شركة متخصصة لكتابة المحتوى؟ ",
            answer: [
                { title: "لاختيار أفضل شركة متخصصة لكتابة المحتوى ينبغي عليك اتباع بعض الخطوات الرئيسية :" },
                { details: "1-", desc: "البحث عن الشركات ذات الخبرة والمصداقية." },
                { details: "2-", desc: "مراجعة معرض أعمال الشركة والاطلاع على التقييمات والآراء من العملاء السابقين." },
                { details: "3-", desc: "التأكد من أن الشركة تتعامل مع كتاب محتوى محترفين ومتخصصين في مجالات مختلفة.  " },
                { details: "4-", desc: "يجب السؤال عن استراتيجية الكتابة وعملية التحرير التي تتبعها الشركة." },
                { details: "5-", desc: "مقارنة الأسعار والخدمات المقدمة واختيار الشركة التي تلبي احتياجاتك بشكل أفضل." },
            ]
        },

        {
            title: "كيف تكتب محتوى احترافي لأعمالك؟ ",
            answer: [
                { title: "لكتابة محتوى احترافي لأعمالك يجب أن تقوم :" },
                { details: "1-", desc: "ببحث شامل وجمع معلومات ذات صلة بموضوعك" },
                { details: "2-", desc: "استخدام لغة بسيطة وواضحة وتجنب استخدام الجمل المعقدة والمصطلحات التقنية غير المفهومة" },
                { details: "3-", desc: "يجب أيضا الاهتمام بتنظيم المحتوى وتقسيمه إلى فقرات مختلفة لتسهيل القراءة." },
                { details: "4-", desc: "التأكد من أن المحتوى خالٍ من الأخطاء النحوية والإملائية عن طريق مراجعته جيدًا قبل نشره" },
            ]
        },

        {
            title: "هل يمكن كتابة المحتوى بدون الحاجة لمساعدة خارجية؟",
            answer: [
                { desc: "نعم، يمكنك كتابة المحتوى بدون الحاجة لمساعدة خارجية ولكن قد يكون من الصعب عليك إنتاج محتوى عالي الجودة وجذاب للقراء بمفردك ولذلك فمن الأفضل الاستعانة بخدمة كتابة المحتوى المتخصصة في زاهي التي توفر لك الجودة والخبرة والاحترافية التي تضمن نجاح محتوى أعمالك." },
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
                { details: "1-", desc: "وضوح الهدف" },
                { details: "2-", desc: "تماسك الأفكار" },
                { details: "3-", desc: "جذب الانتباه من البداية" },
                { details: "4-", desc: "استخدام لغة سهلة ومفهومة" },
            ]
        },

        {
            title: "كيف يمكن تحسين محركات البحث (SEO) من خلال كتابة المحتوى؟",
            answer: [
                { details: "1-", desc: "استخدام الكلمات المفتاحية" },
                { details: "2-", desc: "تحسين العناوين والوصف" },
                { details: "3-", desc: "تنظيم المحتوى بطريقة متناسقة" },
                { details: "4-", desc: "إضافة روابط داخلية وخارجية" },
            ]
        },

        {
            title: "ما أهمية تحديد الجمهور المستهدف في كتابة المحتوى؟",
            answer: [
                { details: "1-", desc: "توجيه الرسالة بشكل أفضل" },
                { details: "2-", desc: "تحسين تفاعل القراء" },
                { details: "3-", desc: "تخصيص الأسلوب واللغة بما يناسبهم" },
            ]
        },

        {
            title: "كيف يمكن قياس نجاح المحتوى بعد نشره؟",
            answer: [
                { details: "1-", desc: "متابعة عدد الزيارات" },
                { details: "2-", desc: "تحليل معدل التفاعل (تعليقات، مشاركات)" },
                { details: "3-", desc: "مراقبة معدل التحويل" },
            ]
        }
    ]








    return (
        <div>
            <PageBanner head={'التصوير الفوتوغرافي'} />

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

            <FAQ items={faqWritingContent} />

        </div>
    )
}

export default Photography