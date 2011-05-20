class YoutubesController < ApplicationController
  def index
  end
  def videos
    render :json => { :videos => ["QZYS8xoBYhM", "kBfdQYpF1NA", "Qy_bQSKysYw"] }
  end
end
