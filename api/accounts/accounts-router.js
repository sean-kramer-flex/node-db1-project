const accountsModel = require('./accounts-model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const data = await accountsModel.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
