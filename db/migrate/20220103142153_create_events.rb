class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.date :day_start
      t.date :day_end
      t.time :hour_start
      t.time :hour_end
      t.references :bullet, null: false, foreign_key: true
      t.boolean :done

      t.timestamps
    end
  end
end
