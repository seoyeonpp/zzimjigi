import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { existsSync } from 'fs'

const adapter = new JSONFile('./src/data/db.json')
const defaultData = { posts: [], comments: [], votes: [], users: [] }
const db = new Low(adapter, defaultData)

await db.read()

// 파일이 없거나, db.data가 초기값일 때만 write
if (!existsSync('./src/data/db.json') || db.data === defaultData) {
  await db.write()
}

export default db
