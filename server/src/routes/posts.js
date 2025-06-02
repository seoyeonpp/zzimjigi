// 게시글 라우터
import express from 'express'
import db from '../data/db.js'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

// [GET] /posts - 모든 게시글 조회
router.get('/', (req, res) => {
  res.json(posts)
})

// [POST] /posts - 게시글 작성
router.post('/', async (req, res) => {
  const { title, description, imageUrl, category } = req.body
  if (!title || !description) {
    return res.status(400).json({ message: '제목과 내용은 필수입니다.' })
  }

  const newPost = {
    id: uuidv4(),
    userId: req.user.id,
    title,
    description,
    imageUrl,
    category,
    createdAt: new Date().toISOString(),
  }

  await db.read()
  db.data.posts.push(newPost)
  await db.write()

  res.status(201).json(newPost)
})

export default router
