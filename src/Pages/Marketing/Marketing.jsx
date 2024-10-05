import PageBanner from '../../Components/pageBanner/PageBanner'
import Intro from '../../Components/ServiceComponents/Intro';
import marketing from '../../assets/marketing.png';
import serviceMan from '../../assets/servicesMan.png';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineGroups } from "react-icons/md";
import { GiClockwork } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportSearch } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
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








const Marketing = () => {


    const IntroMarketingContent = {
        leftImg: marketing,
        firstContentRight: {
            slogan: " إدارة الحملات التسويقية ",
            title: " نُدير حساباتك باحترافية تضمن تحقيق الأهداف المرجوّة ",
            desc: "اجعل حملاتك التسويقية تتألق في سماء النجاح مع خدمتنا الحصرية نقدم لك أداة قوية تهدف لاستحضار أفضل النتائج لحملاتك الإعلانية عبر منصات متعددة. ما يميز خدمتنا هو قدرتها على الوصول إلى جمهور أوسع، وصناعة تأثير عميق يعزز من شهرة علامتك التجارية، ويرفع من مستوى التوعية بها"
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }

    }

    const ImportantMarketingContent = {
        head: " أهمية إدارة الحملات التسويقية ",
        subTitle: "  إدارة الحملات التسويقية تقدم لك الفرصة للوصول إلى جمهور واسع وتعزيز وجودك الرقمي بفضل استراتيجيات التسويق المتقدمة والإعلانات المبتكرة على المنصات المختلفة.  ",

        items: [
            {
                title: "زيادة الوعي بالعلامة التجارية",
                subTitle: "من خلال استخدام استراتيجيات تسويقية متنوعة وابتكارية يمكن لإدارة الحملات التسويقية زيادة الوعي بالعلامة التجارية للشركة وهذا يساهم في زيادة الاعتراف بالشركة. "
            },
            {
                title: "  تحقيق الأهداف التسويقية ",
                subTitle: " إدارة الحملات التسويقية تمكنك من تحقيق أهدافك التسويقية بفعالية وتتضمن زيادة المبيعات وزيادة نسبة التحويل وبناء علاقات قوية مع العملاءالمحتملين. ",
            },
            {
                title: "  الوصول للجمهور المستهدف ",
                subTitle: " تمكنك إدارة الحملات التسويقية من استخدام تقنيات الاستهداف للوصول إلى الجمهور المستهدف بشكل فعال من خلال الاعلانات و المحتوى المتميز. "
            },

            {
                title: "  توفير الوقت والجهد ",
                subTitle: " إدارة الحملات التسويقية خدمة مؤثرة للشركات التي ليس لديها الوقت أو المعرفة أو الموارد لإدارة حملات التسويق بشكل كامل. فبدلاً من ضياع وقتك يمكنك الاعتماد على خبراء المجال. "
            },
            {
                title: "  رفع مستوى المنافسة",
                subTitle: " ُعزز إدارة الحملات التسويقية مكانة شركتك في العالم التجاري وترفع من مستوى المنافسة بين الشركات المختلفة فبفضل استخدام أفضل الإستراتيجيات والتقنيات يمكن لشركتك التفوق والتميز في السوق وتحقيق المزيد من النجاح والنمو. "
            },
            {
                title: " زيادة المبيعات والإيرادات ",
                subTitle: " توجيه الحملات التسويقية بشكل مباشر نحو جمهورك المستهدف أمرًا حاسمًا لزيادة المبيعات وتحقيق المزيد من الإيرادات فعن طريق استهداف الزبائن المحتملين بطرق مبتكرة وفعالة يتم تشجيع العملاء على الوصول إلى منتجات الشركة وشرائها. "
            }
        ]
    }


    const whyUsMarketingContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",
        items: [
            {
                text: " خبرة أعوام ",
                icon: <AiOutlineLike size={35} />
            },
            {
                text: " فريق متخصص",
                icon: <MdOutlineGroups size={35} />
            },
            {
                text: "سرعة وجودة في العمل",
                icon: <GiClockwork size={35} />
            },
            {
                text: "مواد دعائية مؤثرة",
                icon: <MdLibraryBooks size={35} />
            },
            {
                text: "عروض مميزة",
                icon: <HiOutlineSpeakerphone size={35} />
            },
            {
                text: " سعر تنافسي",
                icon: <LiaMoneyBillAltSolid size={35} />
            },
            {
                text: "تقارير شاملة عن الحملة الإعلانية",
                icon: <TbReportSearch size={35} />
            },
            {
                text: "خدمة عملاء على مدار الساعة",
                icon: <RiCustomerService2Fill size={35} />
            },

        ]
    }

    const PortfolioMareketingContnet = {
        headTitle: 'أعمالنا',
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,

        ]
    }
    const extraMarketingContent = {
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

    const feedbackMarketingContent = {
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

    const FaqMarketingContent = [
        {
            title: 'ما هي التحسينات التي يمكن إجراؤها على حملات الإعلانات الممولة لتحقيق أقصى استفادة ممكنة؟  ',
            answer: [
                {title: "التحسينات التي يمكن إجراؤها من جانب زاهي على حملات الإعلانات الممولة لتحقيق أقصى استفادة ممكنة تشمل :"},
                {details: "1-", desc: "مراقبة وتحليل البيانات "},
                {details: "2-", desc: "التجارب المختبرية"},
                {details: "3-", desc: "استكشاف الأفكار الجديدة"},
                {details: "4-", desc: "تحسين محتوى الإعلانات"},
                {details: "5-", desc: "تحسين استهداف الجمهور"},
                { desc: "مع العلم أن استمرار التحسين سيساهم في زيادة نسبة النجاح وتعظيم عائد الاستثمار في حملات الإعلانات الممولة."},
            ]
        },
        {
            title: "هل تستخدمون تقنيات متقدمة أو استراتيجيات مبتكرة لتحسين أداء الحملات الممولة؟ ",
            answer: [
                {
                    desc: " بالطبع نعم، نستخدم في زاهي تقنيات متقدمة واستراتيجيات مبتكرة حتى يمكننا استهداف الجمهور المناسب لمشروعك بدقة أكبر وتوجيه الإعلانات بطرق تجذب المستخدمين الحاليين. "
                }
            ]
        },

        {
            title: "كيف يتم تحليل وقياس نتائج حملات الإعلانات الممولة التي تقومون بها؟  ",
            answer: [
                {
                    title: "تحليل وقياس نتائج حملات الإعلانات الممولة يتطلب :",
                    desc: "استخدام أدوات التحليل والاعتماد على المتخصصين في زاهي وبشكل عام يمكنك قياس نتائج الحملات الممولة من خلال تقدير تأثير الحملة على عدد المبيعات أو قياس مدى تفاعل الجمهور مع الإعلان والاطلاع على التقارير المقدمة من الشركة."
                },
            ]
        },

        {
            title: " ما هي القنوات الإعلانية الممولة التي تنصحون باستخدامها لنشاطي التجاري؟ ",
            answer: [
                {title: "قنوات الإعلان الممولة التي يمكننا في زاهي التوصية باستخدامها تعتمد على :" },
                {details: "1-", desc: "طبيعة نشاطك التجاري"},
                {details: "2-", desc: "جمهورك المستهدف"},
                {title: "وبعض القنوات الشائعة تشمل :"},
                {details: "1-", desc: "الإعلانات على وسائل التواصل الاجتماعي"},
                {details: "2-", desc: "الإعلانات عبر البريد الإلكتروني"},
                {details: "3-", desc: "الإعلانات على محركات البحث"},
            ]
        },
        {
            title: " ما هي أهمية إدارة الحملات الإعلانية الممولة في تحقيق أهداف العمل؟",
            answer: [
                {title: "تكمن أهمية إدارة الحملات الإعلانية الممولة في قدرتها على :"},
                {details: "1-", desc: "الوصول إلى جمهورك المستهدف"},
                {details: "2-", desc: "زيادة الوعي بالعلامة التجارية"},
                {details: "3-", desc: "تعزيز المبيعات"},
            ]
        },
        {
            title: "كيف يمكن لخدمات الإعلان الممولة أن تساعدني في زيادة مبيعات منتجاتي أو خدماتي؟ ",
            answer: [
                {title: "خدمات الإعلان الممولة من زاهي يمكن أن تساعدك في زيادة مبيعات منتجاتك أو خدماتك عن طريق وضع :"},
                {details: "1-", desc: "خطط استراتيجية للحملات"},
                {details: "2-", desc: "تحليل السوق"},
                {details: "3-", desc: "الوصول للجمهور المستهدف"},
                {details: "4-", desc: "زيادة انتشار العلامة التجارية"},
                {desc: "مما يزيد من فرص الوصول إلى العملاء المحتملين وتحويلهم إلى عملاء فعليين ما يساعد على زيادة المبيعات والأرباح."},
            ]
        },
        {
            title: " هل لديكم خبرة في إدارة حملات الإعلانات الممولة لصناعتي الخاصة؟ ",
            answer:[
                {
                    desc: " نعم, فريق عمل زاهي لديه خبرة واسعة في إدارة حملات الإعلانات الممولة لذا إن كنت تبحث عن إدارة حملات إعلانات ممولة لشركتك الخاصة فزاهي هي الحل الأمثل لك."
                }
            ]
        },
        {
            title: "كيف يمكنني معرفة ما إذا كانت حملات الإعلانات الممولة تحقق نتائج إيجابية وترتفع عائداتها؟ ",
            answer: [
                {title: "لمعرفة ما إذا كانت حملات الإعلانات الممولة تحقق نتائج إيجابية وترتفع عائداتها يجب أن تستخدم أدوات التحليل المتاحة ومراقبة المقاييس مثل :",
                desc: "معدل النقر ومعدل التحويل وتكلفة الاستحواذ لقياس أداء الحملات وتحقيق العائد المرجو ونوفر لك في زاهي إمكانية تقديم تقارير دورية حول أداء حملتك الإعلانية لمتابعتها لحظة بلحظة."
                }
            ]
        },
        {
            title: "هل يمكنكم توجيهي في تحديد الميزانية المناسبة لحملات الإعلانات الممولة؟ ",
            answer: [
                {
                    desc: "بالطبع في زاهي يمكننا توجيهك وتقديم استشارات لك حول كيفية تحديد الميزانية الأمثل واستخدامها بكفاءة تامة."
                }
            ]
        },
    ]







    return (
        <div>
            <PageBanner head={' إدارة الحملات التسويقية '} />

            <div className="px-48">
                <Intro
                    leftImg={IntroMarketingContent.leftImg}
                    firstContentRight={IntroMarketingContent.firstContentRight}
                    rightImg={IntroMarketingContent.rightImg}
                    secondContentLeft={IntroMarketingContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantMarketingContent.head}
                subTitle={ImportantMarketingContent.subTitle}
                options={ImportantMarketingContent.items}
            />

            <div className="px-48 py-20">
                <WhyChooseUs
                    headTitle={whyUsMarketingContent.headTitle}
                    subTitle={whyUsMarketingContent.subTitle}
                    items={whyUsMarketingContent.items}
                />

                <Portfolio
                    headTitle={PortfolioMareketingContnet.headTitle}
                    subTitle={PortfolioMareketingContnet.subTitle}
                    items={PortfolioMareketingContnet.items}
                />
            </div>

            <ExtraContent
                slogan={extraMarketingContent.slogan}
                title={extraMarketingContent.title}
                desc={extraMarketingContent.desc}
                items={extraMarketingContent.items}
                leftImg={extraImg}
            />

            <ServiceFeedback
                title={feedbackMarketingContent.title}
                desc={feedbackMarketingContent.desc}
                items={feedbackMarketingContent.items}
            />

            <FAQ items={FaqMarketingContent} />



        </div>
    )
}

export default Marketing