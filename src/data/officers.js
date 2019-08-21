import _ from 'lodash'

const officers = [
    {
        "name": "John Thompson",
        "major": "CS - Info Internetworks & Intelligence",
        "image": "https://en.gravatar.com/userimage/47188646/0e2ad642b145658863ac4644ec26bc70.png?size=150",
        "description": "Full stack developer, entrepreneur and GT Web Dev Co-President.",
        "website": "https://halfpast.io/about",
        "github": "https://github.com/mubtAAhij",
        "linkedin": "https://www.linkedin.com/in/jthompson4004/",
        "twitter": "https://twitter.com/snarkjazzo",
        "stackoverflow": "https://stackoverflow.com/users/1905481/burrito411"
    },
    {
        "name": "Zach Panzarino",
        "major": "CS - Info Internetworks & Intelligence",
        "image": "https://avatars0.githubusercontent.com/u/7033952?s=150&v=4",
        "description": "Passionate CS major with an interest in full stack and co-president.",
        "website": "https://panz.io",
        "github": "https://github.com/panzarino",
        "linkedin": "https://www.linkedin.com/in/zachpanzarino/",
    },
    {
        "name": "Luke Nijhawan",
        "major": "Industrial Engineering - Analytics",
        "image": "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/54414072_2038281639574004_3160807338118479872_n.jpg?_nc_cat=109&_nc_oc=AQnQJgsgFURKLVhSNAoeiBTjFrfvgSiG51mKpE8kr0REyNPSV6CoYo2b3POUDlHdOF8&_nc_ht=scontent-mia3-1.xx&oh=f072a57a968b93bd96a2fb53f993e41d&oe=5DCCB208",
        "description": "Big data fanatic, soccer fan, Treasurer.",
        "twitter": "https://twitter.com/lukenijhawan",
        "linkedin": "https://www.linkedin.com/in/lukas-nijhawan-80b03714b/",
    },
    {
        "name": "Pramod Kotipalli",
        "graduate": "2019",
        "major": "CS - Theory & Intelligence",
        "image": "img/profiles/pramod.jpg",
        "description": "Passionate about empowering others with software and web technologies.",
        "website": "http://pramodk.net/",
        "github": "https://github.com/k-pramod",
        "linkedin": "https://www.linkedin.com/in/pramodkotipalli"
    },
    {
        "name": "Joshua Dwire",
        "graduate": "2018",
        "major": "CS - Info Internetworks & People",
        "image": "https://en.gravatar.com/userimage/54322375/ed938d34b0404f1c56b7ff1d56d6e36d.jpeg?size=150",
        "description": "Freelancer, entrepreneur, and software engineer who loves making a difference.",
        "website": "http://www.joshuadwire.com/",
        "github": "https://github.com/joshuadwire",
        "linkedin": "http://www.linkedin.com/in/jdwire",
        "twitter": "https://twitter.com/joshuadwire",
        "stackoverflow": "https://stackoverflow.com/users/1721527/joshua-dwire"
    },
    {
        "name": "Yuda Winata",
        "major": "CS - Systems/Architecture & Info Internetworks",
        "graduate": "2018",
        "image": "img/profiles/yuda.jpg",
        "description": "A cool, crazy web developer.",
        "github": "https://github.com/masteryoda123",
        "linkedin": "https://www.linkedin.com/in/yudawinata",
        "facebook": "https://www.facebook.com/yuda.a.winata"
    },
    {
        "name": "Clayton Kucera",
        "graduate": "2017",
        "major": "CS - Devices & People",
        "image": "img/profiles/clayton.jpg",
        "description": "Co-Communications Director and Technical Committee Member. He enjoys programming and helping his fellow gt-webdev members.",
        "github": "https://github.com/ckucera3"
    },
    {
        "name": "Saleh Hamadeh",
        "major": "CS - Devices & Mod/Sim",
        "graduate": "2016",
        "image": "img/profiles/saleh.png",
        "description": "Saleh is very social and enjoys having thoughtful conversations about philosophy, economics, and code.",
        "website": "http://www.shamadeh.com",
        "facebook": "https://www.facebook.com/salehhamadeh",
        "github": "https://github.com/salehhamadeh",
        "linkedin": "http://www.linkedin.com/pub/saleh-hamadeh/62/8b6/2a2",
        "twitter": "https://twitter.com/salehhamadeh"
    },
    {
        "name": "Zhiyuan \"Jerry\" Lin",
        "major": "CS - Info Internetworks & Intelligence",
        "graduate": "2016",
        "image": "img/profiles/jerry.png",
        "description": "Researcher, developer, thinker, doer. In general, Jerry is cool.",
        "website": "http://www.itsmrlin.com",
        "github": "https://github.com/ItsMrLin",
        "linkedin": "https://www.linkedin.com/in/zhiyuanlin",
        "twitter": "https://twitter.com/ItsMrLin"
    }
];

module.exports = officers;
