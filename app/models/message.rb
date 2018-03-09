class Message
  include ActiveModel::Model
  attr_accessor :name, :company, :email, :body
  validates :name, :email, :body, presence: true
end
