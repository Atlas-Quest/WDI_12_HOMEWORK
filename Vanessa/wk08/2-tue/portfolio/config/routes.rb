Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    get '/about', to: 'pages#about'

    get '/', to: 'pages#home'

    get '/blog', to: 'pages#blog'

    get '/work', to: 'pages#work'

    get '/contact', to: 'pages#contact'

end
