// ---------------------------------------------------------------
// 网站数据源 —— 加新网站只需要在这个数组里加一条，不用碰 index.html。
//
// 字段说明：
//   name : 站点名称
//   url  : 网址（建议带上 https://）
//   img  : 缩略图路径，相对于本文件所在的 docs/ 目录，例如 "img/bruno-simon.jpg"
//          放进 docs/img/ 目录，文件名和这里对上即可。
//          留空字符串 "" 或者图片还没传，会自动回退成渐变色块 + 首字母，不会报错。
//          建议尺寸见 docs/img/README.md（16:10，宽度 900-1200px）。
//   desc : 一句话描述，说清楚它牛在哪，建议 40 字以内
//   tags : 标签数组，用于顶部的分类筛选按钮
// ---------------------------------------------------------------
const SITES = [
  {
    name: "ITom Dev",
    url: "https://itomdev.com/",
    img: "img/itomdev.jpg",
    desc: "手绘风格的沉浸式 3D 开发者作品集，用 React Three Fiber + GSAP 打造了一条可以走进去的 WebGL 走廊。",
    tags: ["3D / WebGL", "作品集", "动效"]
  },
  {
    name: "Dustin Brett",
    url: "https://dustinbrett.com/",
    img: "img/dustinbrett.jpg",
    desc: "daedalOS —— 一个完整还原桌面操作系统交互的网页应用，窗口、文件系统、应用商店一应俱全。",
    tags: ["模拟 OS", "工程向", "交互"]
  },
  {
    name: "Floor796",
    url: "https://floor796.com/#wandering",
    img: "img/floor796.jpg",
    desc: "一幅永远在生长的像素画长卷，整栋建筑里塞满了可点击的动画彩蛋和流行文化梗，像素版《威利在哪里》。",
    tags: ["像素艺术", "彩蛋", "长期项目"]
  },
  {
    name: "Henry Heffernan",
    url: "https://henryheffernan.com/",
    img: "img/henryheffernan.jpg",
    desc: "90 年代怀旧桌面风格的作品集，用 React + Three.js 搭出一台可以点开窗口、拖拽图标的复古电脑。",
    tags: ["模拟 OS", "3D / WebGL", "作品集"]
  },
  {
    name: "Bruno Simon",
    url: "https://bruno-simon.com/",
    img: "img/bruno-simon.jpg",
    desc: "开着一辆 3D 小车在自己的作品集里到处飙车撞广告牌——创意编程圈公认的教科书级案例。",
    tags: ["3D / WebGL", "作品集", "游戏化"]
  }
];