export default function handler(req, res) {
  const now = new Date();
  const beijingTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const pad = (number) => String(number).padStart(2, '0');
  const timeString = [
    beijingTime.getUTCFullYear(),
    pad(beijingTime.getUTCMonth() + 1),
    pad(beijingTime.getUTCDate()),
  ].join('-') + ` ${pad(beijingTime.getUTCHours())}:${pad(beijingTime.getUTCMinutes())}:${pad(beijingTime.getUTCSeconds())}`;

  if (Object.hasOwn(req.query, '_t') || Object.hasOwn(req.query, 't')) {
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.redirect(308, '/letter');
    return;
  }

  const finalHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="format-detection" content="telephone=no">
  <meta name="robots" content="index, follow">
  <meta name="googlebot" content="index, follow">
  <meta name="description" content="北京时间与一封信">
  <title>北京时间</title>
  <style>
    :root {
      color-scheme: light;
      font-family: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
      color: #333;
      background: #fcfcfc;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: max(24px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right))
        max(40px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left));
      line-height: 1.8;
      overflow-wrap: anywhere;
    }

    article {
      width: min(100%, 760px);
      margin: 0 auto;
      padding: 28px 24px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    }

    h1 {
      margin: 0 0 26px;
      font-size: clamp(1.45rem, 5vw, 2rem);
      line-height: 1.35;
      color: #444;
    }

    p {
      margin: 0 0 1.15em;
      text-align: justify;
    }

    .ending {
      margin-top: 30px;
      text-align: left;
    }

    @media (max-width: 520px) {
      body {
        padding: 12px;
      }

      article {
        padding: 24px 18px;
        border-radius: 12px;
      }
    }
  </style>
</head>
<body>
  <main>
    <article>
      <h1>当前北京时间：${timeString}</h1>
      <p>我是三三，也是好好，是俞晴好，看得到吗？G？</p>
      <p>说起来难免有些尴尬，毕竟是修改过的东西。我反复调整修改只为了想让你看见，现在，它完完整整属于你了，连代码都是新的。</p>
      <p>之前写给别人的那封，我藏了藏头字句，那很含蓄。可面对你的时候，我不想再拐弯抹角。</p>
      <p>我一直渴望被人坚定选择，所以我也理应果断地走向你。我清楚明白，对另一个人并不公平，但倘若事事都讲求均衡，属于你的那份偏爱又该去哪里。所有的取舍，理应由我承担。</p>
      <p>所以我不再准备含蓄的藏头文字，那些委婉的表达，不该用来对待你。</p>
      <p class="ending">不必多余的修饰，我直白地告诉你：我爱你。<br>
      我很爱你，特别特别爱你。<br>
      真的。</p>
    </article>
  </main>
</body>
</html>`;

  res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.status(200).send(finalHtml);
}
