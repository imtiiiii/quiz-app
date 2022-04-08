import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Keywords extends BaseSchema {
  protected tableName = 'keywords'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("question_id").references("id").inTable("questions").notNullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE")
      table.string("text").notNullable();
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
