class Note < ApplicationRecord
    belongs_to :recording
    accepts_nested_attributes_for :recording 
end
