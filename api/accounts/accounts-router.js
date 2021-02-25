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

router.get('/:id', async (req, res, next) => {
  try {
const account = await accountsModel.getById(req.params.id)
res.json(account)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
const [id] = await accountsModel.create({
  name: req.body.name,
  budget: req.body.budget,
})

const newAccount = await accountsModel.getById(id)

res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
await accountsModel.updateById(req.params.id, {
  name: req.body.name,
  budget: req.body.budget,
})

const updatedAccount = await accountsModel.getById(req.params.id)

res.json(updatedAccount)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
await accountsModel.deleteById(req.params.id)

res.status(201).json({
  message: "account deleted"
})
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
