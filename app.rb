require 'sinatra'


class Web < Sinatra::Base
  get '/' do
    erb :index
  end
end

class API < Sinatra::Base
  get '/users' do
    # return all user info
  end

  get '/users/:id' do
    # return specific person info
  end
end