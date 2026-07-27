export default function handler(req, res) {
  const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Google-CloudVertexBot
Allow: /

User-agent: Google-Extended
Allow: /
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
  res.status(200).send(robots);
}
