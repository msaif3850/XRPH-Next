import {
    FaDiscord,
    FaInstagram,
    FaLinkedin,
    FaMedium,
    FaTelegram,
    FaTiktok,
    FaXTwitter,
    FaYoutube,
    FaWikipediaW
} from "react-icons/fa6";

const SocialLinks = [
    {key: 'Twitter', icon: FaXTwitter, link: 'https://twitter.com/xrphealthcare'},
    {key: 'Telegram', icon: FaTelegram, link: 'https://t.me/XRPHealthcare'},
    {key: 'Linkedin', icon: FaLinkedin, link: 'https://www.linkedin.com/company/xrphealthcare/'},
    {key: 'Discord', icon: FaDiscord, link: 'https://discord.gg/3ykhjxGMpG'},
    {key: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com/channel/UCqx47BZPPweSoSp0kRLEj0g'},
    {key: 'Medium', icon: FaMedium, link: 'https://medium.com/@XRPHealthcare'},
    {key: 'TikTok', icon: FaTiktok, link: 'https://www.tiktok.com/@xrphealthcare?is_from_webapp=1&sender_device=pc'},
    {key: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/xrphealthcare/'},
];
const NavLinks = [
    {key: 1, text: 'XRPH AI', link: 'https://xrph.ai/'},
    /*{key: 2, text: 'Roadmap', link: 'roadmap'},
    {key: 3, text: 'Magazine', link: 'https://xrphmagazine.ai/magazine/'},
    {key: 4, text: 'News', link: 'news'},
    {key: 5, text: 'Savings Card', link: 'XRPHSavingsCard'},*/
    /*{key: 6, text: 'Exchanges', link: 'buy-xrph'},*/
    {key: 7, text: 'Africa', link: 'africa'},
    {key: 8, text: 'Team', link: 'team'},
    {key: 9, text: 'Blog', link: 'https://xrphealthcare.ai/blog/'},
    /*{key: 10, text: 'FAQ', link: 'faq'},*/
    {key: 11, text: 'Contact', link: 'contact'},
    {key: 12, text: 'Apps', link: 'XRPH-Wallet'},
]
const FooterMenu1 = [
    /*{key: 1, text: 'Roadmap', link: 'roadmap', blank: false},
    {key: 2, text: 'Exchanges', link: 'buy-xrph', blank: false},*/
    {key: 3, text: 'Savings Card', link: 'XRPHSavingsCard', blank: false},
    {key: 4, text: 'Africa', link: 'africa', blank: false},
    {key: 5, text: 'Media', link: 'media-center', blank: false},
    /*{key: 6, text: 'News', link: 'news', blank: false},*/
    {key: 7, text: 'Blog', link: 'https://xrphealthcare.ai/blog/', blank: true},
    {key: 8, text: 'Team', link: 'team', blank: false},
    /*{key: 9, text: 'Magazine', link: 'https://xrphmagazine.ai/magazine/', blank: true},*/
]
const FooterMenu2 = [
    {key: 1, text: 'Contact', link: 'contact', blank: false},
    /*{key: 2, text: 'Linktree', link: 'https://linktr.ee/xrphealthcare', blank: true},*/
    {key: 3, text: ' Terms', link: 'terms-and-conditions', blank: false},
    /*{key: 4, text: 'FAQ', link: 'faq', blank: false},*/
    {key: 5, text: 'APP FAQ', link: 'app-faqs', blank: false},
    {key: 6, text: 'Privacy', link: 'privacy-policy', blank: false},
    /*{key: 7, text: 'Legal Opinion', link: 'docs/XRPH-Legal-opinion.pdf', blank: true},
    {key: 8, text: 'Disclaimer', link: 'docs/XRPH-disclaimer.pdf', blank: true},*/
    {key: 9, text: 'AI Chat Bot', link: 'https://xrph.ai/', blank: true},
]
const SheetMenu = [
    /*{key: 8, text: 'Disclaimer', link: 'docs/XRPH-disclaimer.pdf', blank: true},*/
    {key: 3, text: 'Terms', link: 'terms-and-conditions', blank: false},
    {key: 6, text: 'Privacy', link: 'privacy-policy', blank: false},
    /*{key: 7, text: 'Legal Opinion', link: 'docs/XRPH-Legal-opinion.pdf', blank: true},*/
]
const Exchanges = [
    {id: 1, name: 'LBANK', link: 'https://www.lbank.com/trade/xrph_usdt/', image: '/exchanges/lbank.png'},
    {
        id: 2,
        name: 'BitMart',
        link: 'https://www.bitmart.com/trade/en-US?symbol=XRPH_USDT&layout=basic',
        image: '/exchanges/bitmart.png'
    },
    {id: 3, name: 'BitTrue', link: 'https://www.bitrue.com/trade/xrph_usdt', image: '/exchanges/bitrue.png'},
    {id: 4, name: 'Coinstore', link: 'https://www.coinstore.com/#/spot/XRPHUSDT', image: '/exchanges/coinstore.png'},
    {
        id: 5,
        name: 'MEXC',
        link: 'https://www.mexc.com/exchange/XRPH_USDT?_from=search_spot_trade',
        image: '/exchanges/mexc.png'
    },
]

const DayOfDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    return `${day}`;
};
const MonthOfDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", {month: "short"});
    return `${month.toUpperCase()}`;
};

const TeamMembers = [
    {
        id: 'whitney-lynn', img: '/team/whitney-lynn.jpg',
        name: 'WHITNEY LYNN', role: 'Chairman', icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/whitney-lynn-97b40757/',
        description: (<>Retired 1st Lieutenant Whitney Lynn, a veteran of the US Army Medical Service Corps and a
            seven-time Ironman Triathlon finisher, <span className="font-sans">(2.4-</span>mile swim, 112<span
                className="font-sans">-</span>mile bike, 26.2<span className="font-sans">-</span>mile run<span
                className="font-sans">)</span> brings over <span className="font-sans">4</span>5 years of
            experience in M<span className="font-sans">&</span>A, business development, startups, investment, and
            leadership. With a proven track record of
            achieving measurable results across global operations in multiple industries, Whitney is a highly
            accomplished CEO, entrepreneur, startup mentor, business advisor, and executive turnaround consultant.
            <br/><br/>As a Vice President Software Mergers and Acquisitions at Corum Group Ltd, Whitney was part of the
            team that
            has created over 10 billion USD in wealth and conducted over <span className="font-sans">4</span>00 M<span
                className="font-sans">&</span>A
            transactions with over <span className="font-sans">$4</span> Billion US
            Dollars in transactions in more than 13 countries during the past 35 years. In this capacity, he provided
            strategic M<span className="font-sans">&</span>A and transactional assistance and guidance to help companies
            grow. Whitney also served as
            President of RWBC Holding, where he provided support to a family<span className="font-sans">-</span>owned
            company, helping to manage its
            growth.
            <br/><br/>During his tenure as Interim President <span className="font-sans">&</span> CEO of the 300 million
            USD Borland International, Whitney
            executed a strategic plan to gain profitability by downsizing headcount and implementing aggressive
            cost<span className="font-sans">-</span>saving
            initiatives. He also revamped the marketing strategy, completed the successful acquisition of Open
            Environment Corporation, where he was Fractional Chief Operating Officer, and drove the successful
            integration of OEC employees and subsidiaries with new leadership and culture worldwide.
            <br/><br/>As President <span className="font-sans">&</span> Chief Operating Officer of Colorbus, Inc.,
            Whitney led the worldwide consolidation,
            integration, and restructuring of the combined companies with 180 employees and worldwide revenue of <span
                className="font-sans">$4</span>5M.
            He reduced expenses and headcount to maximize efficiency and revenue contribution per employee,
            significantly improving quality, on<span className="font-sans">-</span>time delivery, and customer
            satisfaction.
            <br/><br/>He also was the Founder, Executive Vice President and Chief Operating Officer at lncat Systems
            Software USA
            Inc which was successfully sold after only two years to Adaptec Inc for a total value of <span
                className="font-sans">$</span>26
            US Million
            Dollars and the President <span className="font-sans">&</span> CEO of Meridian Data Inc.
            <br/><br/>With a talent for building and nurturing strong, trust<span className="font-sans">-</span>based
            relationships, Whitney advises,
            coaches, and
            mentor’s leaders to accelerate growth and profitability while positioning companies for takeover,
            negotiating mergers or acquisitions, and leading restructuring efforts once acquired.
            <br/><br/>Whitney has founded and grown several highly profitablesmaller software, systems, and storage
            companies,
            turning around companies from unprofitable defined market segments to revenue generation by developing
            targeted products, increasing customer base, and market share. He has also built major key account
            relationships and channels of distribution.
            <br/><br/>As a business owner, Whitney purchased the Ironman bike shop in Kona Hawaii, and a high<span
                className="font-sans">-</span>end
            Triathlon
            Specific Bike Store in San Diego, CA. He increased margins and sales by reducing operational expenses,
            managed operations, budgeting, finance, P<span className="font-sans">&</span>L, recruiting and training
            staff, and inventory management.
            Whitney also grew the business with aggressive sponsor programs and triathlete endorsements.
            <br/><br/> He is a Member of the Eliances, Newchip Accelerator, where he has worked with and mentored
            ideation, early stage and start<span className="font-sans">-</span>up companies in various capacities
            guiding them towards acquiring investors
            and creation of unique product launch strategies with the most effective channels of distribution. He has
            increased margins and sales through the elimination of redundant operations, managed operations, budgeting,
            finance, P<span className="font-sans">&</span>L, recruiting and training staff, inventory management with
            great sponsorship networks.
            <br/><br/>He graduated from the University of Arizona with a Bachelor’s Degree in Accounting and General
            Business.</>)
    },
    {
        id: 'dr-peter-waiswa', img: '/team/dr-peter-waiswa.jpg',
        name: 'Dr. Peter Waiswa', role: 'Healthcare Industry Expert', icon: FaWikipediaW,
        link: 'https://en.m.wikipedia.org/wiki/Peter_Kyobe_Waiswa',
        description: (<>Dr. Peter Waiswa, Ass. Prof, possessed with over 20<span className="font-sans">+</span> years in
            the health sector, is an Associate
            Professor of Health Policy <span className="font-sans">&</span> Health Systems at Makerere University School
            of Public Health and College of
            Health Sciences, the prominent and leading medical school in Uganda and also a visiting Researcher at
            Karolinska Institutet, Sweden. He was instrumental in the lobbying of support from several international
            bodies, including the United Nations Children Fund <span className="font-sans">(</span>UNICEF<span
                className="font-sans">)</span>, United
            States Agency for International Development <span className="font-sans">(</span>USAID<span
                className="font-sans">)</span> and World Health
            Organisation <span className="font-sans">(</span>WHO<span className="font-sans">)</span> after setting up
            of the Iganga<span className="font-sans">/</span>Mayuge Health and Demographic Surveillance Site <span
                className="font-sans">(</span>DSS<span
                className="font-sans">)</span> whose data collected showed that the number of babies and mothers dying
            shortly after birth was overwhelming.
            <br/><br/>He is a Ugandan medical doctor trained in Public Health having graduated with a joint PhD and
            later a Post<span className="font-sans">-</span>Doctoral fellowship from Makerere University, Uganda and the
            Karolinska Institutet, Sweden. Prior to joining academia, he worked as a district medical officer with
            Ministry of Health for 8 years in
            Uganda and founded the INDEPTH Network Maternal and new<span className="font-sans">-</span>born Research
            Group in Accra, Ghana and the Makerere University Maternal, new<span className="font-sans">-</span>born and
            Child Health Centre of Excellence in
            Uganda. He is widely published in health systems and policy, implementation research, and evaluation with a
            special focus on maternal,
            new<span className="font-sans">-</span>born and child health. He is well sought after and regularly engages
            in policy debates, advocacy and planning at local, national, Africa and at the global level for the World
            Health Organisation, UNICEF, and a myriad of other global multilaterals.
            <br/><br/>He attended Naigobya and Iganga Town Council primary schools and then went to Budini Secondary
            School for O ‘level and Jinja College for A ‘level and then studied human medicine at Mbarara University of
            Science and Technology where he attained his Bachelor of Surgery in Medicine, thereafter, working as a
            doctor in rural Iganga, before enrolling for a Master’s in International Public Health and International
            Health at the Hebrew University, Israel.
            <br/><br/>After completing internship in 1999 at Mulago Hospital, the young doctor shunned a good<span
                className="font-sans">-</span>paying job
            in Kampala city with one of the country’s leading Non – Governmental Organisations and settled for a posting
            in rural Iganga district. As his, “major interest was to get to work in an area with locals yearning for
            better healthcare,” In this, he has mobilised communities, talked to people and volunteered with numerous
            rural<span className="font-sans">-</span>based NGOs with an emphasis on the fourth millennium development
            goal <span className="font-sans">(MDG4)</span>
            that focuses on child
            survival, and has ably reduced the under<span className="font-sans">-</span>five child mortality rate
            significantly, before the year 2015. Due
            to his selfless work with expectant mothers, and traditional birth attendants <span
                className="font-sans">(</span>TBAs<span
                className="font-sans">)</span>,
            TBAs have become more
            trustworthy in Busoga region because of their friendly approach to mothers. They now stay within the
            community and get to know the people well. His conviction is focused on urging fellow health workers to
            borrow a leaf from them and reach out to the locals since he is certain this could save more lives based on
            his broad experience.</>)
    },
    /*{
        id: 'keith-errey', img: '/team/keith-errey.webp',
        name: 'Keith Errey', role: 'Chief Technology Officer', icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/keith-errey-698a2428/',
        description: (<>With an illustrious career marked by leadership in healthcare innovation and a proven track
            record of success, Keith brings invaluable expertise to the XRP Healthcare team. Keith Errey is widely
            recognized for his pivotal role in establishing and leading Isansys, a world<span
                className="font-sans">-</span>leading medtech, medical
            device, and digital healthcare company. The company, under his guidance, has been at the forefront of
            revolutionizing remote patient monitoring through its groundbreaking Patient Status Engine <span
                className="font-sans">(</span>PSE<span className="font-sans">)</span>. This innovative platform employs
            wearable sensors and wireless
            communication to continuously collect vital signs and physiological data, enabling real<span
                className="font-sans">-</span>time monitoring across diverse
            patient populations.
            <br/><br/>Isansys has collaborated with healthcare institutions, and organisations, and supported many
            clinical research trials, most notably its collaboration with the NHS <span className="font-sans">(</span>National
            Health Service<span className="font-sans">)</span> to deploy the PSE into hospital and home care settings.
            These partnerships aim to improve patient care, enable early intervention, and enhance healthcare
            efficiency.
            <br/><br/>Keith has over 25 years of experience in the technology industry, including founding and leading
            Toumaz UK Ltd. and Oxford Synergetics Ltd. Keith used his skills to develop Toumaz from a two person
            start<span className="font-sans">-</span>up into a publicly traded company on the AIM stock exchange. Keith
            Errey has a Master of Science in Atomic<span className="font-sans">/</span>Molecular Physics from the
            University of Oxford and a Bachelor of Science in Physics from UNSW.
            Isansys<span className="font-sans">&#39;</span> commitment to excellence has garnered prestigious awards,
            including being named the <span className="font-sans">&#39;</span>Best
            Medtech Company<span className="font-sans">&#39;</span> in the UK Medtech 50 and receiving the <span
                className="font-sans">&#39;</span>Best Established Medtech
            Company<span className="font-sans">&#39;</span> accolade
            at the 2021 UK IT Industry Awards. These recognitions underscore Isansys<span
                className="font-sans">&#39;</span> dedication to improving
            patient outcomes and enhancing healthcare efficiency on a global scale.</>)
    },
    {
        id: 'edoardo-farina', img: '/team/edoardo-farina.jpg',
        name: 'Edoardo Farina', role: 'Head of Social Adoption', icon: FaXTwitter,
        link: 'https://twitter.com/edward_farina?s=21&t=pecngyU4yqi-gZnWb2W7cg',
        description: (<>Edoardo Farina is a die–hard XRP enthusiast and a valued member of the community. Cofounder of
            The Alpha Husky Club, ❲a prominent NFT Project On The XRP Ledger❳, and a trainee lawyer, Edoardo has deep
            insights into the technical issues surrounding the blockchain ecosystem. Here he has been a focal point and
            a point of reference for various blockchain communities, with hundreds of thousands of users. Moreover, he
            has been involved in conducting numerous presentations for large audiences and possesses a considerable
            social media following.</>)
    },*/
    {
        id: 'laban-roomes',
        img: '/team/laban-roomes.jpg',
        name: 'Laban Roomes',
        role: (<>COO <span className="font-sans">&</span> Co<span className="font-sans">-</span>founder</>),
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/laban-roomes-7508457',
        description: (<>Laban Roomes is a serial entrepreneur who Co<span className="font-sans">-</span>founded XRP
            Healthcare with his son Kain Roomes – The first Pharma and Healthcare platform to be built on the XRP
            Ledger.
            <br/><br/>Having had success investing in a medicinal cannabis company <span className="font-sans">(</span>Marigold
            Projects Jamaica<span className="font-sans">)</span> of which
            <span className="font-sans">49%</span> was then sold to the Canadian public company giant Aphria for
            USD<span className="font-sans">$</span>80 million. Laban started investing in
            Bitcoin in 2018, and since then has made several other investments into Blockchain technology companies such
            as XRP, Zilliqa, Centric and XCAD.
            <br/><br/>Laban designed and manufactured an innovative portable plating device and in October of 2007,
            Laban pitched his gold<span className="font-sans">-</span>plating technology – and market traction – live on
            the hit BBC T.V investment
            pitching programme ‘Dragon’s Den’ and successfully acquired funding, as well as new guidance from
            multi<span className="font-sans">-</span>millionaire Dragon James Caan. After 3 years Laban purchased all
            his shares back from James Caan
            whilst remaining business allies to follow a new vision for the business. Since then, Laban has attended and
            supplied luxury gifts in person to the Oscars, created luxury ranges of iPods and iPhones for a host of
            celebrities including Elton John the Beckhams, Floyd Money Mayweather, Usain Bolt, Mark Wahlberg, Clint
            Eastwood and Will Smith, to mention just a few, not to mention creating an opportunity for hundreds of
            individuals worldwide to work from home using his portable gold plating technology. The company has also
            launched initiatives and campaigns to raise money by donating a percentage of the company’s luxury gift
            sales to raise much<span className="font-sans">-</span>needed cash for several high<span
                className="font-sans">-</span>profile charities including the Elton John Aids Foundation
            <span className="font-sans">(</span>EJAF<span className="font-sans">)</span>, The Teenage Cancer TRUST and
            SOS Children’s Villages.
            <br/><br/>Laban has also gone on to win the Great British Entrepreneur and the coveted Lloyds TSB – FSB
            Entrepreneur of the year award and now spends his time in Jamaica, Miami, and Dubai where he has business
            interests.</>)
    },
    {
        id: 'kain-roomes', img: '/team/kain-roomes.webp',
        name: 'Kain Roomes', role: 'CEO', icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/kainroomes',
        description: (<>Kain Roomes, CEO <span className="font-sans">&</span> Co<span className="font-sans">-</span>founder
            of XRP Healthcare, has a unique background that combines athletic drive, business acumen, and a pioneering
            vision in blockchain healthcare. Originally set for a professional soccer career, Kain’s path took an
            unexpected turn when he suddenly lost passion for the game, leading him to fitness modelling, where he
            represented major brands like Nike and Sports Direct.
            <br/><br/>In 2018, he made a bold move into cryptocurrency by acting on advice from his father Laban Roomes
            which resulted in them both selling their luxury Rolex Submariner watches to fund an initial Bitcoin
            investment, later diversifying into altcoins like Zilliqa and XRP. Kains’ strategic choices turned a £7,500
            investment into over £2,000,000, marking him as a notable figure in the crypto space.
            <br/><br/>In September 2022, Kain co<span className="font-sans">-</span>founded XRP Healthcare with his
            father, Laban Roomes, launching the first pharma and healthcare platform on the XRP Ledger. Under his
            leadership, the company grew from zero to a valuation of <span className="font-sans">$194</span> million
            within three months.
            <br/><br/>Recently, XRP Healthcare has expanded into mergers and acquisitions in East Africa, positioning
            itself to make a meaningful impact on the region<span className="font-sans">&#39;</span>s healthcare
            accessibility.
            <br/><br/>Kain’s journey is a testament to resilience, vision and the foresight to take calculated
            risks<span className="font-sans">-</span>transforming challenges into opportunities and building XRP
            Healthcare into a leading force in the healthcare industry.</>)
    },
];


export {SocialLinks,NavLinks, FooterMenu1, FooterMenu2, Exchanges, DayOfDate, MonthOfDate, TeamMembers, SheetMenu};
