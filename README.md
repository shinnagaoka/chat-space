# README

## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false|

- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

- has_many :users, through: :members
- has_many :messages
- has_many :members

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|string||
|image|string||
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

