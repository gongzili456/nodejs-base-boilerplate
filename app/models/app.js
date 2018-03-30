export default (sequelize, DataTypes) => {
  const model = sequelize.define(
    'App',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      key: DataTypes.STRING,
      secret: DataTypes.STRING,
      name: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'apps',
      scopes: {
        actived: {
          where: {
            is_deleted: false,
          },
        },
      },
    },
  )

  model.associate = function associate(models) {
    // model.belongsTo(models.User, { foreignKey: 'created_by' })
  }

  return model
}
