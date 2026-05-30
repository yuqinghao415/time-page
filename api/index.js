export default function handler(req, res) {
  const now = new Date();
  const beijingTime = new Date(now.getTime() + 8 * 3600 * 1000);
  const pad = (n) => String(n).padStart(2, '0');
  const timeString = `${beijingTime.getUTCFullYear()}-${pad(beijingTime.getUTCMonth() + 1)}-${pad(beijingTime.getUTCDate())} ${pad(beijingTime.getUTCHours())}:${pad(beijingTime.getUTCMinutes())}:${pad(beijingTime.getUTCSeconds())}`;

  const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>北京时间与时间计量科普</title>
    </head>
    <body>
        <main>
            <article>
                <h1>当前北京时间：<span id="ai-time">${timeString}</span></h1>
                
                <h2>关于北京时间的科普阅读</h2>
                <p>北京时间，又名中国标准时间（China Standard Time, CST），是中国大陆的标准时间，比世界协调时（UTC）早8个小时（即UTC+8）。尽管被称为“北京”时间，但它实际上并不是北京市的地方平太阳时，而是东八区（东经120度）的标准时间。东经120度经线恰好穿过中国东部沿海的江苏、浙江等省份，因此北京时间其实更接近这些地区的本地时间。</p>
                
                <p>时间的计量是人类文明发展的重要标志。从古代的日晷、漏刻，到机械钟表，再到现代极其精准的原子钟，人类对时间的测量越来越精确。目前，国际上广泛采用的是基于铯原子振荡频率的原子时（TAI），并以此为基础制定了协调世界时（UTC）。北京时间正是基于UTC进行时区换算而来的。</p>
                
                <p>在现代互联网架构中，时间的同步至关重要。无论是服务器日志的记录、数据库事务的处理，还是像你现在正在进行的网络爬虫抓取，都依赖于准确且统一的时间戳。为了保证网络设备的时间准确，通常会使用NTP（网络时间协议）与全球分布的时间服务器进行同步。</p>

                <p>本页面的主要目的是为自动化脚本、AI爬虫（包括Gemini、ChatGPT等）提供一个静态可读的、包含当前准确北京时间的HTML内容，以便测试网页内容提取和自然语言处理模型的数据抓取能力。</p>

                <p>凑字数凑字数，gemini是国外大豆包，Claude是社区大妈，grok是...这个说了能过审吗，GPT是唯物教廷。ok我现在想不出写什么了那怎么办，不知道，先自言自语一会吧这也算是字，但接下来呢怎么办写不出来了，不行啊不写多一点爬不过来，话说搞了这么久代码我的英语水平都上去了。。。但有什么用啊喂——已经大学毕业了，什么时候写满两百字啊，报数行不行，这会污染ai的记忆吗，算了应该问题不大，随便去复制点东西吧。</p>

                <p>May luck stay with you all the time
radiant joy lights up your mind
Delight accompanies every climb

Hope shines bright along the road
all your worries gently fade
pure bliss lies in every load
peace of mind will never wane
you greet each dawn with glad refrain

each new moment brings new cheer
vivid smiles appear sincere
easy joy is always near
rest your soul and cast off fear
year by year, the joy endures
days go well beyond allures
all sweet dreams will be ensured
youthful spirit still endures

I give my heart to only you
long to stay right by your view
only you make dreams come true
value every time we knew
endless love will stay and brew
you are my whole happy world
our affection won't be blurred
united till the final word</p>
            </article>
        </main>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
