const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  title: {
    type: String,
    required: [true, "Укажите заголовок статьи"]
  },
  percents: {
    type: Number,
    default: 0,
    required: [true, "Укажите дату публикации"]
  }
});

const SkillCategorySchema = new Schema({
  category: {
    type: String,
    required: [true, "Укажите заголовок статьи"]
  },
  skills: {
    type: Array,
    required: "",
    // default: [],
    children: [SkillSchema]
  }
});

// просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("skill", SkillCategorySchema);
