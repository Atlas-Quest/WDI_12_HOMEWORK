class PagesController < ApplicationController
  def about
    render :about
  end
  def home
    render :home
  end
  def blog
    render :blog
  end
  def work
    render :work
  end
  def contact
    render :contact
  end
end
