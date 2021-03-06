# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  rss_url     :string           not null
#  icon_url    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  url         :string           not null
#

class Feed < ApplicationRecord
  validates :title, :rss_url, :url, presence: true

  has_many :collected_feeds, inverse_of: :feed, dependent: :destroy
  has_many :collections, through: :collected_feeds, source: :collection

  has_many :articles, inverse_of: :feed, dependent: :destroy

  def self.update_all
    feed_id = Feed.pluck(:id)
    feed_id.each do |id|
      Feed.update_feed(id)
    end
  end

  def self.update_feed(feed_id)
    feed = Feed.find(feed_id)
    feed_data = Feedjira::Feed.fetch_and_parse(feed.rss_url)
    Article.create_articles(feed_data.entries, feed)
  end

  def icon(url)
    domain = /(https*:\/\/.+?\/)|(https*:\/\/.+)/.match(url).to_s
    "https://logo.clearbit.com/".concat(domain)
  end

end
