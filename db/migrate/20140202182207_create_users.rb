class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :occupation
      t.integer :age
    end
  end

  def down
    drop_table :users
  end
end
