const QRCode = require('qrcode')

// Change this to the org you want the QR code to point to
const org = 'orgB' // or 'orgA'

// Payload to encode in the QR code
const payload = {
  org,
  sessionId: 'abc123' // optional - just for demo
}

// Encode as a query string
const encodedData = encodeURIComponent(JSON.stringify(payload))

// Create the full URL
const scanUrl = `http://localhost:3000/scan?data=${encodedData}`

// Generate QR code as terminal output and save to file
QRCode.toString(scanUrl, { type: 'terminal' }, function (err, url) {
  if (err) return console.error('Error generating QR', err)
  console.log('\nScan this QR code:')
  console.log(url)
  console.log('\nLink:', scanUrl)
})

// Save as an image file
QRCode.toFile(`qr-${org}.png`, scanUrl, function (err) {
  if (err) throw err
  console.log(`\nSaved QR code image to qr-${org}.png`)
})
