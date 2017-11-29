# README

## usersテーブル
|Column|Type|Option|
|------|----|------|
|id|integer||
|name|varchar（255）|null: false, unique: true, index: true|
|email|varchar(255)|null: false|
|encrypted_password|varchar(255)||
|reset_password_token|varchar(255)||
|remember_created_at|datetime||
|sign_in_count|integer||
|current_sign_in_at|datetime||
|last_sign_in_at|datetime||
|current_sign_in_ip|varchar(255)||
|last_sign_in_ip|varchar(255)||
|created_at|datetime||
|updated_at|datetime||

- has_many :groups, through: :members
- has_many :messages

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|id|integer||
|name|varchar|null: false, unique: true|
|created_at|datetime||
|updated_at|datetime||

- has_many :users, through: :members
- has_many :messages

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|id|integer||
|body|text||
|image|text||
|created|datetime||
|updated|datetime||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


- belongs_to :user
- belongs_to :group


## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


