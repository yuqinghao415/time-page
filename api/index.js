// 适配 Vercel 的标准格式
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: "success",
    message: "接口部署成功！",
    time: new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai"
    })
  }));
};
