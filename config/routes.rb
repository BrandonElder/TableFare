Rails.application.routes.draw do
  
  root 'pages#home'

  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'faqs', to: 'pages#faqs'
  get 'contact-me', to: 'messages#contact', as: 'new_message'
  post 'contact-me', to: 'messages#create', as: 'create_message'

end
