require './app'

run Rack::URLMap.new('/' => Web.new,
                      '/api' => API.new)