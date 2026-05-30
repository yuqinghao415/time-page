export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    message: "接口通了！",
    serverTime: new Date().toISOString()
  });
}
