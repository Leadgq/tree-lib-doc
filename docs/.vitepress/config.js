import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/tree-lib-doc/",
  title: "在线文档库",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/Leadgq/tree-lib" },
    ],
    nav: [
      {
        text: "树方法",
        link: "/guide/tree/tree",
        activeMatch: "/guide/tree/tree",
      },
      { text: "基础方法", link: "/guide/base/base" },
      { text: "数学方法", link: "/guide/math/math" },
      { text: "工具方法", link: "/guide/tools/tools" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "配套方法记录",
      copyright: "方法更新文档也会更新",
    },
  },
});
