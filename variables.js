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
const FooterMenu1 = [
    {key: 1, text: 'Roadmap', link: 'roadmap'},
    {key: 2, text: 'Exchanges', link: 'buy-xrph'},
    {key: 3, text: 'Savings Card', link: 'XRPHSavingsCard'},
    {key: 4, text: 'Africa', link: 'africa'},
    {key: 5, text: 'Media', link: 'media-center'},
    {key: 6, text: 'News', link: 'news'},
    {key: 7, text: 'Blog', link: 'https://xrphealthcare.ai/blog/'},
    {key: 8, text: 'Team', link: 'team'},
    {key: 9, text: 'Magazine', link: 'https://xrphmagazine.ai/magazine/'},
]
const FooterMenu2 = [
    {key: 1, text: 'Contact', link: 'contact'},
    {key: 2, text: 'Linktree', link: 'https://linktr.ee/xrphealthcare'},
    {key: 3, text: ' Terms', link: 'terms-and-conditions'},
    {key: 4, text: 'FAQ', link: 'faq'},
    {key: 5, text: 'APP FAQ', link: 'app-faqs'},
    {key: 6, text: 'Privacy', link: 'privacy-policy'},
    {key: 7, text: 'Legal Opinion', link: ''},
    {key: 8, text: 'Disclaimer', link: ''},
    {key: 9, text: 'AI Chat Bot', link: 'https://xrph.ai/'},
]
const Exchanges = [
    {
        id: 1,
        name: 'MEXC',
        link: 'https://www.mexc.com/exchange/XRPH_USDT?_from=search_spot_trade',
        image: '/exchanges/mexc.png'
    },
    {
        id: 2,
        name: 'BitMart',
        link: 'https://www.bitmart.com/trade/en-US?symbol=XRPH_USDT&layout=basic',
        image: '/exchanges/bitmart.png'
    },
    {id: 3, name: 'BitTrue', link: 'https://www.bitrue.com/trade/xrph_usdt', image: '/exchanges/bitrue.png'},
    {id: 4, name: 'LBANK', link: 'https://www.lbank.com/trade/xrph_usdt/', image: '/exchanges/lbank.png'},
    {id: 5, name: 'Coinstore', link: 'https://www.coinstore.com/#/spot/XRPHUSDT', image: '/exchanges/coinstore.png'},
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
        name: 'WHITNEY LYNN', role: 'Chairman',
        link: 'https://www.linkedin.com/in/whitney-lynn-97b40757/',

    },
    {
        id: 'dr-peter-waiswa', img: '/team/dr-peter-waiswa.jpg',
        name: 'Dr. Peter Waiswa', role: 'Healthcare Industry Expert',
        link: 'https://en.m.wikipedia.org/wiki/Peter_Kyobe_Waiswa',

    },
];


// variables.ts



export {SocialLinks, FooterMenu1, FooterMenu2, Exchanges, DayOfDate, MonthOfDate,TeamMembers};
