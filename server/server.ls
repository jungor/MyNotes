require! {express, http, path,}

app = express!

app.get '/api/random', (req, res)!-> 
  res.render 'index.html'

# server.listen host-config.end-server.port

exports = module.exports = app
