class Bullet < ApplicationRecord
  belongs_to :user
  has_many :events

  include PgSearch::Model
  pg_search_scope :search_by_content,
    against: [:content],
    using: {
      tsearch: { prefix: true }
    }
end
