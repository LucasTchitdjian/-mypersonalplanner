class AddStatusToBullets < ActiveRecord::Migration[6.1]
  def change
    add_column :bullets, :status, :string
  end
end
