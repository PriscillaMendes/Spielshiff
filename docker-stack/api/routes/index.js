import express from 'express'
const router = express.Router()

/* GET página inicial */
router.get('/', async (req, res, next) => {
  try {

    // renderiza a view index
    res.render('index')

  } catch (error) {
    console.error(error)
  }
})

export default router