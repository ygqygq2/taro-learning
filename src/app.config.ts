export default defineAppConfig({
  pages: ["pages/index/index", "pages/order/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "诗和远方",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7f8389",
    selectedColor: "#5495e6",
    borderStyle: "black",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/images/index-unselected.png",
        selectedIconPath: "assets/images/index-selected.png",
        text: "首页",
      },
      {
        pagePath: "pages/order/index",
        iconPath: "assets/images/order-unselected.png",
        selectedIconPath: "assets/images/order-selected.png",
        text: "我的订单",
      },
    ],
  },
});
