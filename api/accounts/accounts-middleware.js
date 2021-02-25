const accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = () => { return (req, res, next) => {
  accounts.getById(req.params.id)
  .then((account) => {
    if (account) {
      next()
    } else {
      res.status(404).json({
        message: "account not found"
      })
    }
  })
}

}
