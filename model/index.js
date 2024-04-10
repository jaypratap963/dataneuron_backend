const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
    {
        name: { type: String },
    },
    {
        timestamps: true,
    }
);

const assignmentModel = mongoose.model("assignment", assignmentSchema);

module.exports = assignmentModel;
