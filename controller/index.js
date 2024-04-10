const assignmentModel = require("../model");
const countModel = require("../model/count.model");

exports.add = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(203).json({
                status: false,
                message: "Either name or count is missing"
            })
        }

        const assignmentObj = await assignmentModel.create({
            name
        })

        await countModel.create({})
        return res
            .status(200)
            .json(
                {
                    status: true,
                    message: "data added successfully",
                    ...assignmentObj.toObject()
                }
            );
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({
                status: false,
                message: e.message,
            });
    }
};

exports.update = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params

        const checkAssignmentObj = await assignmentModel.findById(id)
        if (!checkAssignmentObj) {
            return res.status(203).json({
                status: false,
                message: "Related data not found"
            })
        }
        await assignmentModel.findByIdAndUpdate(id, { name })
        await countModel.create({})
        const assignmentObj = await assignmentModel.findById(id)

        return res
            .status(200)
            .json(
                {
                    status: true,
                    message: "data updated successfully",
                    ...assignmentObj.toObject()
                }
            )
    } catch (e) {
        console.log(e)
        return res
            .status(500)
            .json({
                status: false,
                message: e.message,
            });
    }
}

exports.count = async (req, res) => {
    try {
        const countObj = await countModel.countDocuments()

        return res.status(200).json({
            status: true,
            message: "count fetched successfully",
            count: countObj
        })
    } catch (e) {
        console.log(e)
        return res
            .status(500)
            .json({
                status: false,
                message: e.message,
            });
    }
}
