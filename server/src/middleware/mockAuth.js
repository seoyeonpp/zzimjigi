// 간단한 사용자 정보 설정
import { v4 as uuidv4 } from 'uuid'

export const mockAuth = (req, res, next) => {
  // 실제 로그인은 아니고, 임시 유저 세팅
  const userId = req.headers['x-user-id'] || uuidv4()
  const nickname = req.headers['x-user-nickname'] || 'guest'

  req.user = { id: userId, nickname }
  next()
}
