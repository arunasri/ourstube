class YoutubesController < ApplicationController

  def index
  end

  def videos
    render :json => { :videos => YOUTUBE_IDS }
  end

end
