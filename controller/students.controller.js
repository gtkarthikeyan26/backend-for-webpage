const InvalidParamException = require('../exceptions/invalid.param.exception')
const InvalidRequestException = require('../exceptions/invalid-request')

// Add student
const create = (request, response, next) => {
	return new Promise(async (resolve, reject) => {
		//response.header('Access-Control-Allow-Origin', 'http://localhost:3000') // '*' for any domain, replace with specific domain if needed
		try {
			const studentData = {
				student_id: request.body.studentId,
				name: request.body.name,
				class: request.body.class,
				teacher_id: request.body.teacherId,
			}

			const sData = await db.student.findOne({
				where: {
					student_id: request.body.studentId,
				},
			})
			if (sData) {
				throw new InvalidRequestException('student already exists')
			}
			const studentDataPayload = await db.student.create(studentData)
			resolve(
				response.json({
					success: true,
					message: 'student added successfully',
					result: studentDataPayload,
				})
			)
		} catch (error) {
			next(error)
		}
	})
}

module.exports = { create }
