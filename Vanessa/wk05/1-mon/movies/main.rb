require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

# def run_sql(sql)
#   conn = PG.connect(dbname: '')
#   result = conn.exec(sql)
#   conn.close
#   result
# end

get '/' do
  erb :index
end

get '/result' do
  HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&t=JAWS')
  movie_search = params[:JAWS].to_f
end
