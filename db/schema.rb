# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_20_103552) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.bigint "furniture_option_id"
    t.bigint "user_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["furniture_option_id"], name: "index_carts_on_furniture_option_id"
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "furniture_options", force: :cascade do |t|
    t.text "capacity"
    t.text "color"
    t.text "material"
    t.text "kuan"
    t.bigint "furniture_id"
    t.text "image"
    t.float "price"
    t.float "width"
    t.float "height"
    t.float "length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["furniture_id"], name: "index_furniture_options_on_furniture_id"
  end

  create_table "furnitures", force: :cascade do |t|
    t.text "name"
    t.float "price"
    t.text "category"
    t.text "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "furnitures_main_categories", force: :cascade do |t|
    t.bigint "furniture_id"
    t.bigint "main_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["furniture_id"], name: "index_furnitures_main_categories_on_furniture_id"
    t.index ["main_category_id"], name: "index_furnitures_main_categories_on_main_category_id"
  end

  create_table "furnitures_orders", force: :cascade do |t|
    t.bigint "order_id"
    t.bigint "furniture_option_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["furniture_option_id"], name: "index_furnitures_orders_on_furniture_option_id"
    t.index ["order_id"], name: "index_furnitures_orders_on_order_id"
  end

  create_table "main_categories", force: :cascade do |t|
    t.text "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "user_id"
    t.float "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
