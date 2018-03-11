class SubscribersController < ApplicationController

  def index
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.save
      cookies[:saved_lead] = true
      redirect_to root_path, notice: "Thank you for subscribing to our newsletter!"
    else
      redirect_to root_path, notic: "We're sorry...something went wrong."
    end
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:name, :email)
  end
end
