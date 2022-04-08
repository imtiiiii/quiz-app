import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class QuizResults extends BaseSchema {
  protected tableName = 'quiz_results'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id").unsigned().references("id").inTable("users").notNullable().onDelete("CASCADE").onUpdate("CASCADE")
      table.integer("marks").notNullable();
      table.integer("test_no").notNullable();
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
