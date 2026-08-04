const SITES = [
  {
    name: "ITom Dev",
    url: "https://itomdev.com/",
    img: "img/itomdev.com.jpg",
    desc: "手绘风格的沉浸式 3D 开发者作品集，用 React Three Fiber + GSAP 打造了一条可以走进去的 WebGL 走廊。",
    tags: ["3D / WebGL", "作品集"]
  },
  {
    name: "Dustin Brett",
    url: "https://dustinbrett.com/",
    img: "img/dustinbrett.com.jpg",
    desc: "daedalOS —— 一个完整还原桌面操作系统交互的网页应用，窗口、文件系统、应用商店一应俱全。",
    tags: ["复古 / 模拟", "作品集"]
  },
  {
    name: "Floor796",
    url: "https://floor796.com/#wandering",
    img: "img/floor796.com.jpg",
    desc: "一幅永远在生长的像素画长卷，整栋建筑里塞满了可点击的动画彩蛋和流行文化梗，像素版《威利在哪里》。",
    tags: ["像素艺术"]
  },
  {
    name: "Henry Heffernan",
    url: "https://henryheffernan.com/",
    img: "img/henryheffernan.com.jpg",
    desc: "90 年代怀旧桌面风格的作品集，用 React + Three.js 搭出一台可以点开窗口、拖拽图标的复古电脑。",
    tags: ["复古 / 模拟", "作品集"]
  },
  {
    name: "Bruno Simon",
    url: "https://bruno-simon.com/",
    img: "img/bruno-simon.com.jpg",
    desc: "开着一辆 3D 小车在自己的作品集里到处飙车撞广告牌——创意编程圈公认的教科书级案例。",
    tags: ["3D / WebGL", "作品集"]
  },
  {
    name: "Akari",
    url: "https://akari.lusion.co/",
    img: "img/akari.lusion.co.jpg",
    desc: "Lusion 工作室的 2D 光线追踪实验，用跳泛洪算法在浏览器里实时算光影，还藏了几个用光子玩的小游戏。",
    tags: ["3D / WebGL"]
  },
  {
    name: "ToyFight",
    url: "https://toyfight.co/",
    img: "img/toyfight.co.jpg",
    desc: "英国曼彻斯特创意机构官网，用两位创始人的裸体玩具公仔开场，作品页做出致敬埃舍尔的旋转透视效果。",
    tags: ["机构官网", "动效"]
  },
  {
    name: "Locomotive",
    url: "https://locomotive.ca/",
    img: "img/locomotive.ca.jpg",
    desc: "加拿大蒙特利尔数字设计机构，七次拿下 Awwwards 年度机构，官网本身就是一份工艺范本。",
    tags: ["机构官网"]
  },
  {
    name: "OFF+BRAND",
    url: "https://itsoffbrand.com/",
    img: "img/itsoffbrand.com.jpg",
    desc: "苏格兰起家的品牌 / WebGL 工作室，操刀过 Webflow 官网改版，擅长把 3D 动效融进品牌叙事。",
    tags: ["机构官网", "3D / WebGL"]
  },
  {
    name: "Immersive Garden",
    url: "https://immersive-g.com/",
    img: "img/immersive-g.com.jpg",
    desc: "巴黎数字制作工作室，拿下过 27 次 FWA、16 次 Awwwards，用 Three.js 讲每一个案例故事。",
    tags: ["机构官网", "3D / WebGL"]
  },
  {
    name: "Metalab",
    url: "https://www.metalab.com/",
    img: "img/metalab.com.jpg",
    desc: "加拿大产品设计机构，Slack、Coinbase 等产品界面背后的操刀者，官网体现了顶级产品团队的克制审美。",
    tags: ["机构官网"]
  },
  {
    name: "Redis Agency",
    url: "https://redis.agency/",
    img: "img/redis.agency.jpg",
    desc: "专注 Webflow 开发的设计机构，官网用克制的 3D 元素和反常规滚动讲故事，拿过 Awwwards SOTD。",
    tags: ["机构官网", "动效"]
  },
  {
    name: "Playground",
    url: "https://www.playground.it/",
    img: "img/www.playground.it.jpg",
    desc: "米兰数字机构，12 年经验专注大品牌互动项目，官网本身也是一份精心打磨的作品。",
    tags: ["机构官网", "3D / WebGL"]
  },
  {
    name: "GSAP",
    url: "https://gsap.com/",
    img: "img/gsap.com.jpg",
    desc: "前端动效标准库 GreenSock 的官网，被 Webflow 收购后现已完全免费，首页本身就是一份动效能力说明书。",
    tags: ["工具 / 组件库"]
  },
  {
    name: "Overrrides",
    url: "https://overrrides.com/",
    img: "img/overrrides.com.jpg",
    desc: "Framer 代码组件库的落地页，页面里塞满了可以直接把玩的迷你交互 demo。",
    tags: ["工具 / 组件库"]
  },
  {
    name: "Messenger",
    url: "https://messenger.abeto.co/",
    img: "img/messenger.abeto.co.jpg",
    desc: "abeto 工作室出品的免费浏览器游戏，在一颗小到能看见地平线弧度的星球上送快递，还有轻量级多人联机。",
    tags: ["小游戏"]
  },
  {
    name: "ECHO-OS",
    url: "https://echoecho.space/",
    img: "img/echoecho.space.jpg",
    desc: "个人作品集做成一台 Windows XP 风格的桌面系统，还得靠拼字母解谜才能一步步解锁简历内容。",
    tags: ["复古 / 模拟", "作品集"]
  },
  {
    name: "Jesse's Ramen",
    url: "https://www.jesse-zhou.com/",
    img: "img/jesse-zhou.com.jpg",
    desc: "把个人作品集做成一家可以走进去逛的 3D 拉面店，Three.js 手搓，拿过 Awwwards 荣誉提名。",
    tags: ["3D / WebGL", "作品集"]
  },
  {
    name: "Charlie Dean",
    url: "https://charliedean.com/",
    img: "img/charliedean.com.jpg",
    desc: "英国开发者的个人网站，用带实时时钟的桌面图标界面呈现作品集、联系方式和一个叫 E-Charlie 的小应用。",
    tags: ["复古 / 模拟", "作品集"]
  }
];