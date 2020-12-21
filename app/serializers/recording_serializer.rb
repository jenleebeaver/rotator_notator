class RecordingSerializer < ActiveModel::Serializer
  attributes :id, :title, :melody, :created_at

  has_many :notes
end
