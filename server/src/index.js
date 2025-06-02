import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { mockAuth } from './middleware/mockAuth.js'
import postRoutes from './routes/posts.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(mockAuth)

// 라우터 등록
app.use('/posts', postRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})
