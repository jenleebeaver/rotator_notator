class NoteSerializer < ActiveModel::Serializer
  attributes :id, :recording_id, :pitch

  belongs_to :recordings
end
