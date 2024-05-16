const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define(
        'student',
        {
            student_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            class: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            teacher_id: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'students',
        }
    );
    return student;
}