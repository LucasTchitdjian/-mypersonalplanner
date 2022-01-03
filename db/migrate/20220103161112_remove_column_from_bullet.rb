class RemoveColumnFromBullet < ActiveRecord::Migration[6.1]
  def change
    remove_column :bullets, :person_id
  end
end
