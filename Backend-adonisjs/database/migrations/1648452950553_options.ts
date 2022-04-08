import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Options extends BaseSchema {
  protected tableName = 'options'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer("question_id").unsigned().references("id").inTable("questions")
        .notNullable().onDelete("CASCADE").onUpdate("CASCADE")

      table.string("option").notNullable();
      table.integer("is_correct").defaultTo(0);
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
