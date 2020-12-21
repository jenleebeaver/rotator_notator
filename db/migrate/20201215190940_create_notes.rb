class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.integer :recording_id
      t.string :pitch

      t.timestamps
    end
  end
end
