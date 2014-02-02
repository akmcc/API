require 'sinatra'
require 'sinatra/activerecord'
require './environments'
require 'json'

class User < ActiveRecord::Base
end


class Web < Sinatra::Base
  get '/' do
    erb :index
  end
end

class API < Sinatra::Base
  get '/users' do
    User.all.to_json
  end

  get '/users/:id' do
    User.find(params[:id]).to_json
  end
end