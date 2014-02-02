configure :development do
  set :database, 'sqlite:///dev.db'
end

configure :production do
  #some other more robust db
end