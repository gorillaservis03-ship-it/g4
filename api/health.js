export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    env: {
      DATAOVOZIDLECH_API_KEY: Boolean(process.env.DATAOVOZIDLECH_API_KEY),
      RSV_API_KEY: Boolean(process.env.RSV_API_KEY)
    },
    ts: new Date().toISOString()
  })
}
