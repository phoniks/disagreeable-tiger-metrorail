const repl = require('repl')
const db = require('./')

const r = repl.start()

r.context.db = db
