import React from 'react'
import PageBanner from '../../Components/pageBanner/PageBanner';
import graphic from '../../assets/graphic.png';
import Intro from '../../Components/ServiceComponents/Intro';
import serviceMan from '../../assets/servicesMan.png';
import Important from '../../Components/ServiceComponents/Important';
import importantAsset from '../../assets/import.png';
import WhyChooseUs from '../../Components/ServiceComponents/WhyChooseUst';
import { AiOutlineLike } from 'react-icons/ai';
import { MdDraw, MdOutlineDesignServices, MdOutlineGroups, MdOutlineSupportAgent, MdOutlineVideoCameraFront } from 'react-icons/md';
import { GiClockwork } from 'react-icons/gi';
import { LiaMoneyBillAltSolid } from 'react-icons/lia';
import Portfolio from '../../Components/ServiceComponents/Portfolio';
import portfolioImg from '../../assets/Ourportfolio.png';
import portfolioImg2 from '../../assets/Our portfolio2.png';
import portfolioImg3 from '../../assets/Our portfolio3.png';
import ExtraContent from '../../Components/ServiceComponents/ExtraContent';
import extraImg from '../../assets/YE_Man.png';
import ServiceFeedback from '../../Components/ServiceComponents/ServiceFeedback';
import feedBackPerson1 from '../../assets/person.png';
import FAQ from '../../Components/ServiceComponents/FAQ';

const Graphics = () => {

    const IntroGraphicContent = {
        leftImg: graphic,
        firstContentRight :{
            slogan: " موشن جرافيك ومونتاج ",
            title: "يمكنك تحويل فكرتك أو اقتراحك إلى محتوى مرئي جذاب يثير اهتمام الجمهور. سواء كنت تعمل في مجالات التسويق أو التعليم أو الإعلانات، ستضفي هذه الخدمة لمسة احترافية وجودة عالية على عملك. من خلال استخدام الرسومات المتحركة والتأثيرات المذهلة، يمكنك تسليط الضوء على حدث أو مناسبة أو منتج بطرق مبتكرة تجذب انتباه المشاهدين. إذا كنت تبحث عن وسيلة مبتكرة لتوصيل رسالتك أو توضيح فكرتك، فإن خدمة الموشن جرافيك تمنحك القوة والإمكانات للتفاعل بشكل أعمق مع جمهورك."
        },
        rightImg: serviceMan,

        secondContentLeft: {
            slogan: 'كيف نعمل ؟',
            title: 'اطلع على رحله المشروع',
            desc: 'استكشف الخطوات التي نتبعها لتحويل فكرتك إلى مشروع ناجح نرافقك في كل مرحلة لضمان تحقيق رؤيتك بأفضل صورة'
        }
        
    }

    const ImportantGraphicContent ={
        head: "أهمية خدمة الموشن جرافيك والمونتاج" ,
        subTitle: "إدارة المتاجر الإلكترونية تضمن تنظيم العمليات، تحسين تجربة العملاء، وزيادة المبيعات.",

        items: [
            {
                title: "تعزيز التفاعل",
                subTitle: "يساعد الموشن جرافيك والمونتاج على توفير تجربة مرئية مثيرة للاهتمام تحفز المشاهدين على التفاعل مع المحتوى."
            },
            {
                title: "نقل المعلومات بشكل سلس",
                subTitle: "يساعد الموشن جرافيك والمونتاج على نقل الرسالة المطلوب توصيلها بطريقة سلسة وفعالة للجمهور المستهدف."
            },
            {
                title: "تعزيز الهوية البصرية",
                subTitle: "يساعد الموشن جرافيك والمونتاج في تعزيز الهوية البصرية للشركة من خلال استخدام الألوان والخطوط والرسوم البيانية المميزة مما يساعد على بناء صورة قوية ومميزة تساعدك في التميز عن منافسيك."
            },
            {
                title: "زيادة مشاركة المحتوى",
                subTitle: "يعتبر المحتوى المرئي بالتأثيرات البصرية الجذابة والمواد المبتكرة أكثر جاذبية وقابلية للمشاركة مقارنة بالنصوص والصور التقليدية مما يسهم في زيادة الانتشار والوصول إلى جمهور أكبر."
            },
            {
                title: "تحسين تجربة المستخدم",
                subTitle: "يعد الموشن جرافيك والمونتاج أداة قوية لتحسين تجربة المستخدم على المواقع الإلكترونية والتطبيقات من خلال إضافة عناصر حركية وتأثيرات بصرية مبتكرة تمكن من إثارة اهتمام المستخدم وتعزيز التفاعل."
            },
            {
                title: "سهولة تذكر العلامة التجارية",
                subTitle: "يعتبر المحتوى المرئي أكثر قابلية للتذكر مقارنة بالنصوص والصور التقليدية.ويتم استخدام العناصر المرئية والحركة لخلق تجربة مثيرة تبقى في ذهن المشاهدين لفترة طويلة مما يعزز فعالية الاتصال."
            },

        ]
    }

    const whyUsGraphicContent = {
        headTitle: 'لماذا عليك اختيارنا؟',
        subTitle: "العمل مع زاهي سيمكنك من تطوير حضورك الرقمي والاستفادة الكاملة من قوة   خدمة الموشن جرافيك في تحقيق أهدافك التسويقية .",

        items: [
            {
                text: "مؤسسة موثوقة",
                icon:<AiOutlineLike size={35} />
            },
            {
                text: "فريق من محترفي التصمصم",
                icon:<MdOutlineGroups size={35} />
            },
            {
                text: "تصاميم ابداعية",
                icon:<MdOutlineDesignServices size={35}  />
            },
            {
                text: "الالتزام بمواعيد التسليم",
                icon: <GiClockwork size={35} />
            },
            {
                text: "جودة فيديو عالية",
                icon: <MdOutlineVideoCameraFront size={35} />
            },
            {
                text: "احترافية اختيار الألوان و التنسيق",
                icon:<MdDraw size={35} />
            },
            {
                text: "أسعار تنافسية",
                icon:<LiaMoneyBillAltSolid size={35} />
            },
            {
                text: "دعم فني على مدار الساعة",
                icon:<MdOutlineSupportAgent size={35} />
            },
        ]
    }

    const PortfolioGraphicContent= {
        headTitle: "أعمالنا",
        subTitle: 'أبرز إنجازاتنا ومشاريعنا الجارية,نحول الأفكار إلى حقائق.',
        items: [
            portfolioImg,
            portfolioImg3,
            portfolioImg2,
            
        ]
    }

    const extraGraphicContent = {
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

    const feedbackGraphicContent = {
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

    const faqGraphicContent = [
        {
            title: "ما هي الفوائد الرئيسية لخدمات تصميم الموشن جرافيك ومونتاج الفيديو؟"
            ,
            answer:[
                {desc: "خدمة إدارة المتاجر الإلكترونية هي إدارة وتشغيل المتاجر الإلكترونية على الإنترنت وتتضمن جميع العمليات التي تشمل إدارة المنتجات، والمخزون، والعمليات المالية، ومتابعة الطلبات، والشحن والتوصيل، بالإضافة إلى خدمات الدعم والتسويق وتوفر خدمة إدارة المتاجر الإلكترونية من زاهي العديد من الفوائد لأصحاب الأعمال. ومن بين هذه الفوائد"}
            ]
        },
        {
            title: "هل يمكن تصميم موشن جرافيك لأغراض تسويقية وإعلانية؟",
            answer: [
                {desc: "نعم، نوفر لك في زاهي امكانية تصميم موشن جرافيك لأغراض تسويقية وإعلانية حيث يُستخدم التصميم المتحرك لإبراز منتجات وخدمات العلامة التجارية بطريقة مبتكرة ومناسبة و أيضًا يعد وسيلة فعالة لإيصال رسائل العلامة التجارية بشكل سريع وفعال سواء عبر التلفزيون أو الإنترنت أو وسائل التواصل الاجتماعي."}
            ]
        },

        {
            title: "كيف يمكن لخدمات تصميم الموشن جرافيك أن تساعد في تعزيز هوية العلامة التجارية؟ ",
            answer: [
                {details: "تساعد خدمات تصميم الموشن جرافيك في تعزيز هوية العلامة التجارية من خلال استخدام الألوان والأشكال والشعارات الخاصة بها. " },
                {desc:"يتم تصميم المشاهد بطريقة تعكس شخصية العلامة التجارية وقيمها، مما يخلق تفاعلاً عميقًا مع المستهلكين. يتيح للشركات توصيل رسائلها بطريقة مميزة وفريدة من نوعها، وبالتالي يسهم في بناء هوية قوية ولافتة للعلامة التجارية."}
            ]
        },

        {
            title: "ما هي البرامج والأدوات المستخدمة في عملية مونتاج الفيديو؟",
            answer:[
                {title: "تتضمن عملية مونتاج الفيديو استخدام العديد من البرامج والأدوات المهمة وهي :"},
                {details: "Adobe Premiere Pro :", desc: "من البرامج الشائعة في مونتاج الفيديو حيث يتيح إجراء التعديلات والقص والدمج بين المقاطع بسهولة."},
                {details: "Adobe After Effects :", desc: "يُستخدم لإضافة التأثيرات البصرية والحركات المتحركة. بالإضافة إلى ذلك، يُستخدم برنامج ."},
                {details: "Cinema 4D :", desc: "في إنشاء الأشكال الثلاثية الأبعاد والتصاميم المعقدة ."},
            ]
        },

        {
            title: "هل يمكن تصميم موشن جرافيك مخصص للأحداث والمناسبات الخاصة؟ ",
            answer: [
                {
                    desc: "نعم، نقدم لك في زاهي امكانية تصميم موشن جرافيك مخصص للأحداث والمناسبات الخاصة حيث يمكن استخدام الموشن جرافيك لتقديم دعوات وإعلانات لحفلات الزفاف والأعياد والمناسبات الخاصة ويمكن تنفيذ التصميم وفقًا لمتطلبات الحدث واحتياجات العميل،"
                }
            ]
        },

        {
            title: "هل يتم توفير خيارات لترجمة النصوص وإضافة تأثيرات صوتية في عملية المونتاج؟ ",
            answer: [
                {
                    desc: "نعم، يتم في زاهي توفير خيارات لترجمة النصوص وإضافة تأثيرات صوتية في عملية المونتاج ويُمكن ترجمة النصوص للغات مختلفة بواسطة المصممين للوصول إلى جمهور عالمي أكبر وزيادة فهم المحتوى."
                }
            ]
        },

        {
            title: "كيف يمكن لمقاطع الفيديو المصممة أن تساهم في زيادة تفاعل الجمهور على وسائل التواصل الاجتماعي؟ ",
            answer: [
                {details: "تساهم المقاطع المصممة في زيادة تفاعل الجمهور على وسائل التواصل الاجتماعي بطرق عديدة. فمثلاً :"},
                {title: "يساعد التصميم المتحرك في  :", desc: "جذب الانتباه والتفاعل بشكل أكبر حيث يرى الجمهور المقاطع المصممة كشيء مثير للاهتمام والمشاركة ."},
                {title: "تساعد إستراتيجيات التسويق عبر الفيديو والمشاركة المستهدفة في :", desc: "زيادة تفاعل الجمهور حيث يمكن تحقيق مشاركات وتعليقات وانتشار المقاطع بشكل واسع عبر المنصات الاجتماعية . "}
            ]
        },

        {
            title: "هل يمكن تصميم مقاطع فيديو قصيرة ومحتوى مخصص لتطبيقات الهاتف المحمول؟ ",
            answer: [
                {desc:" نعم، نوفر لك في زاهي امكانية تصميم مقاطع قصيرة مخصصة لتطبيقات الهاتف لجذب انتباه المستخدمين ونشر رسالة العلامة التجارية بشكل سريع وفعال."}
            ]
        },

        {
            title: "ما هي الخطوات الرئيسية في عملية تصميم الموشن جرافيك ومونتاج الفيديو؟ ",
            answer: [
                {details: "1-", desc: "التخطيط للفيديو بوضع الرؤية والأفكار والأهداف . "},
                {details: "2-", desc: "تجهيز العناصر المطلوبة مثل الصور والنصوص واللقطات المصورة ."},
                {details: "3-", desc: "تنفيذ تصميم المشاهد بشكل مفصل باستخدام البرامج والأدوات المناسبة . "},
                {details: "4-", desc: "دمج وترتيب المشاهد وإضافة التأثيرات والموسيقى أو التعليق الصوتي . "},
                {details: "5-", desc: "إخراج الفيديو بجودة عالية ."},
            ]
        }

    ]







  return (
    <div>
        <PageBanner head={' موشن جرافيك ومونتاج '} />

        <div className="px-48">
                <Intro
                    leftImg={IntroGraphicContent.leftImg}
                    firstContentRight={IntroGraphicContent.firstContentRight}
                    rightImg={IntroGraphicContent.rightImg}
                    secondContentLeft={IntroGraphicContent.secondContentLeft}
                />
            </div>

            <Important
                asset={importantAsset}
                headTitle={ImportantGraphicContent.head}
                subTitle={ImportantGraphicContent.subTitle}
                options={ImportantGraphicContent.items}
            />

            <div className="px-48 py-20">
                
                <WhyChooseUs
                headTitle={whyUsGraphicContent.headTitle}
                subTitle={whyUsGraphicContent.subTitle}
                items={whyUsGraphicContent.items}
            />

                <Portfolio
                    headTitle={PortfolioGraphicContent.headTitle}
                    subTitle={PortfolioGraphicContent.subTitle}
                    items={PortfolioGraphicContent.items}
                />

            </div>

            <ExtraContent
            slogan={extraGraphicContent.slogan}
            title={extraGraphicContent.title}
            desc={extraGraphicContent.desc}
            items={extraGraphicContent.items}
            leftImg={extraImg}
            />

            <ServiceFeedback
            title={feedbackGraphicContent.title}
            desc={feedbackGraphicContent.desc}
            items={feedbackGraphicContent.items}
            /> 

            <FAQ items={faqGraphicContent}/>





    </div>
  )
}

export default Graphics