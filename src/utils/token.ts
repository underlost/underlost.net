import crypto from 'crypto'

export function generateToken(email: string, expiry: number, secretKey: string): string {
  const payload = `${email}:${expiry}`
  const hash = crypto.createHmac(`sha256`, secretKey).update(payload).digest(`hex`)

  return `${hash}.${Buffer.from(payload).toString(`base64`)}`
}
