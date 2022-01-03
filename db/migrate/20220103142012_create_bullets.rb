class CreateBullets < ActiveRecord::Migration[6.1]
  def change
    create_table :bullets do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.string :links
      t.references :person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
