
module.exports = app => {
  // app.use('/api', require('./base.routes'))
  app.use('/api', require('./auth.routes'))
  app.use('/api/profile', require('./profile.routes'))
  app.use('/api/room', require('./room.routes'))
  app.use('/api/library', require('./library.routes'))
  app.use('/api/menu', require('./menu.routes'))
  app.use('/api/laundry', require('./laundry.routes'))
  app.use('/api/wallet', require('./wallet.routes'))
}