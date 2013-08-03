Facesofmadison::Application.routes.draw do
  root to: 'pages#index'

  get 'gallery' => 'pages#gallery'
end
