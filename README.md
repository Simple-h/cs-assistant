# CS助手 - 磨损与模板价格查询

## 简介
该脚本为CS:GO玩家提供磨损值价格查询与模板价格查询功能，帮助用户更方便地查看当前皮肤交易历史与同模板交易历史。**本项目仅供学习和研究使用，禁止用于商业用途，以避免侵权问题。**

## 功能
- **磨损值查询**：用户可以输入磨损值，查询对应皮肤的交易历史。
- **模板价格查询**：用户可以根据皮肤模板查询相关价格信息。
- **内置排行榜**：提供 `t1` 和 `t2` 特殊模板排行榜，帮助用户快速了解热门模板。
- **支持多个网站**：该脚本支持在多个网站上运行，包括：
  - [悠悠](https://www.youpin898.com)
  - [BUFF](https://buff.163.com)

## 安装
1. 确保您已安装 [Tampermonkey](https://www.tampermonkey.net/) 或其他用户脚本管理器。
2. 创建一个新的用户脚本，并将以下代码粘贴到脚本编辑器中：

   ```javascript
   // ==UserScript==
   // @name         CS助手 - 磨损与模板价格查询
   // @namespace    https://github.com/your-github-username/cs-assistant
   // @version      1.0.0.13
   // @description  该脚本为CS:GO玩家提供磨损值价格查询与模板价格查询功能，帮助用户更方便地查看当前皮肤交易历史与同模板交易历史。
   // @author       Jack Mr
   // @match        *://www.youpin898.com/*
   // @match        *://buff.163.com/*
   // @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
   // @grant        none
   // @license      MIT
   // @downloadURL https://update.greasyfork.org/scripts/524378/CS%E5%8A%A9%E6%89%8B%20-%20%E7%A3%A8%E6%8D%9F%E4%B8%8E%E6%A8%A1%E6%9D%BF%E4%BB%B7%E6%A0%BC%E6%9F%A5%E8%AF%A2.user.js
   // @updateURL https://update.greasyfork.org/scripts/524378/CS%E5%8A%A9%E6%89%8B%20-%20%E7%A3%A8%E6%8D%9F%E4%B8%8E%E6%A8%A1%E6%9D%BF%E4%BB%B7%E6%A0%BC%E6%9F%A5%E8%AF%A2.meta.js
   // ==/UserScript==
   ```

3. 保存并启用脚本。

## 使用方法
- 在支持的网站上，您将看到"查看历史价格"和"按模板查询价格"按钮。
- 点击按钮后，弹出窗口将显示相关的交易历史和价格信息。
- 使用内置的 `t1` 和 `t2` 特殊模板排行榜，快速查看热门模板。

## 贡献
欢迎任何形式的贡献！如果您发现任何问题或有改进建议，请提交问题或拉取请求。

## 许可证
该项目采用 MIT 许可证，详细信息请查看 [LICENSE](LICENSE) 文件。
