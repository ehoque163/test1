
module.exports = (app) => {
  console.log('Initializing the routes. ooh, YEAH!!!')
  app.use('/api/users', require('./users'))
};
