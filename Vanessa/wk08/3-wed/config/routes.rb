Rails.application.routes.draw do

  resources :articles

  get '/api/comments',     to: 'api/comments#index'
  get '/api/articles/:id', to: 'api/articles#show'
  get '/api/stuff',        to: 'articles#stuff'

end
