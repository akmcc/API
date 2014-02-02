require 'sinatra'
require 'sinatra/activerecord'
require './environments'

class User < ActiveRecord::Base
end


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