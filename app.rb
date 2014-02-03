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

  post '/users' do
    user = User.new
    user.name = params[:name]
    user.email = params[:email]
    user.phone = params[:phone]
    user.occupation = params[:occupation]
    user.age = params[:age].to_i
    user.save
  end

  put '/users/:id' do
    user = User.find(params[:id])
    user.name = params[:name]
    user.email = params[:email]
    user.phone = params[:phone]
    user.occupation = params[:occupation]
    user.age = params[:age]
    user.save
  end

  delete '/users/:id' do
    user = User.find(params[:id])
    user.delete
  end

end 