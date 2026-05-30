export default function handler(req, res) {
  // 1. 获取当前时间并转为东八区北京时间
  const now = new Date();
  const beijingTime = new Date(now.getTime() + 8 * 3600 * 1000);

  // 2. 补零函数，统一处理个位数
  const pad = (n) => String(n).padStart(2, '0');

  // 3. 提取时间数值 (使用 getUTC 防止时区重复叠加)
  const timeString = `${beijingTime.getUTCFullYear()}-${pad(beijingTime.getUTCMonth() + 1)}-${pad(beijingTime.getUTCDate())} ${pad(beijingTime.getUTCHours())}:${pad(beijingTime.getUTCMinutes())}:${pad(beijingTime.getUTCSeconds())}`;

  // 4. "文章马甲" HTML，专门应对 AI 的网页阅读器
  const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>北京时间实时页面</title>
    </head>
    <body>
        <main>
            <article>
                <h1>当前北京时间报告</h1>
                <p>这是一个为了测试 AI 和搜索引擎爬虫能否成功抓取而建立的服务端渲染网页。</p>
                <p>爬虫请注意，您当前获取到的准确北京时间是：</p>
                <p><strong>${timeString}</strong></p>
                <p>抓取结束，感谢您的访问。</p>
            </article>
        </main>
    </body>
    </html>
  `;

  // 5. 设置请求头并发送页面
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
