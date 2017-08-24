class Api::ArticlesController < ApplicationController
  before_action :require_user!

  def index
    @articles = Articles.all
  end

  def show
    @article = Articles.find(params[:id])
  end

  def create
    @article = Articles.new(articles_params)
    if @article.save
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  private

  def articles_params
    params.require(:article).permit(
      :title,
      :content,
      :date,
      :url,
      :image_url,
      :viewed,
      :user_id,
      :feed_id
    )
  end
end