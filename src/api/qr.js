import axios from 'axios'

async function getQRCodeFromURL(url) {
  return await axios.get(
    'https://api.qrserver.com/v1/create-qr-code',
    {
      params: {
        size: '150x150',
        data: url,
        responseType: 'arraybuffer'
      }
    }
  )
}

export { getQRCodeFromURL }