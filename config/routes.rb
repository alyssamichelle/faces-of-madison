Facesofmadison::Application.routes.draw do
  root to: 'pages#index'

  get 'gallery' => 'pages#gallery'
  get 'videos' => 'pages#videos'
end
