export default function handler(req, res) {
  // 直接基于标准时间计算东八区(+8小时)
  const now = new Date();
  const beijingTime = new Date(now.getTime() + 8 * 3600 * 1000);

  // 补零函数，统一处理个位数
  const pad = (n) => String(n).padStart(2, '0');

  // ⚠️ 唯一改动：使用 getUTC... 系列方法，强制提取数值，防止时区叠加
  const timeString = `${beijingTime.getUTCFullYear()}-${pad(beijingTime.getUTCMonth() + 1)}-${pad(beijingTime.getUTCDate())} ${pad(beijingTime.getUTCHours())}:${pad(beijingTime.getUTCMinutes())}:${pad(beijingTime.getUTCSeconds())}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><title>北京时间</title></head>
    <body>
        <h1>当前北京时间（爬虫可直接读取）</h1>
        <div class="time">${timeString}</div>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
