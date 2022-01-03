class AddColumnToBullet < ActiveRecord::Migration[6.1]
  def change
    add_column :bullets, :person, :string
  end
end
