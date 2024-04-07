// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'm793764591-ca10239fd6501c564ff5f05c',
    'm793140970-e235b991d5b43db2ba9162d6',
    'm793178282-0267698cf34fbb718367bd10',
    'm792290745-cb3309a2db32fb9139dedd70',
    'm794038571-8ff07ec73747e9fc4a30df0f',
    'm792290608-d54ad29049b48aebb097388a',
    'm793141015-ebe14e069bd696b4773d9979',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取超过90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 导航栏菜单
  Navi: [
    {
      text: 'Server Status',
      url: 'https://z.f8.gs/'
    }
  ]
};
