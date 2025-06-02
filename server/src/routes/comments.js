import express from 'express'
import db from '../data/db.js'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

// [GET] /comments/:postId - 특정 게시글의 댓글 조회
router.get('/:postId', (req, res) => {
  const { postId } = req.params
  const filtered = comments.filter((comment) => comment.postId === postId)
  res.json(filtered)
})

// [POST] /comments - 댓글 작성
router.post('/', async (req, res) => {
  const { postId, content } = req.body

  if (!postId || !content) {
    return res.status(400).json({ message: 'postId와 content는 필수입니다.' })
  }

  const newComment = {
    id: uuidv4(),
    postId,
    userId: req.user.id,
    content,
    createdAt: new Date().toISOString(),
  }

  await db.read()
  db.data.comments.push(newComment)
  await db.write()

  res.status(201).json(newComment)
})

export default router
