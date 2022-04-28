// const fetch = (...args: any[]) =>
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   import('node-fetch').then(({ default: fetch }) => fetch(...args))
import * as fs from 'fs'
import { CircuitBuilder } from './CircuitBuilder'

const genres = [
  'PPC',
  'Web',
  'Crypto',
  'Binary',
  'Pwn',
  'Misc',
  'Shell',
  'Forensics',
  'OSINT'
] as const

export type Genre = typeof genres[number]

export interface ServerResponse {
  total: number
  genre: Record<Genre, number>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const serverMain = async () => {
  // TODO: fix url
  // const res = await fetch('https://localhost:3000/api/users')
  // const json = (await res.json()) as ServerResponse

  // implementation
  const result = CircuitBuilder.build(CircuitBuilder.dummyServerResponse)
  // TODO: !!generated in local!!
  const basepath = process.env.EXPORT_DIR ?? './'
  const filepath = `${basepath}/circuit.json`
  fs.mkdir(basepath, { recursive: true }, err => {
    if (err) throw err
  })
  fs.writeFile(filepath, result, err => {
    if (err) throw err
    console.log('successfully exported')
    return
  })
}

serverMain().catch(err => {
  console.log(err)
})
