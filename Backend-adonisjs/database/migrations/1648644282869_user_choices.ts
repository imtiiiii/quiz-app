import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserChoices extends BaseSchema {
  protected tableName = 'user_choices'

  public async up() {

    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("user_id").unsigned().references("id").inTable("users").
        onDelete("CASCADE").onUpdate("CASCADE");

      table.integer("question_id").unsigned().references("id").inTable("questions").
        onDelete("CASCADE").onUpdate("CASCADE");
      table.integer("solution_id").unsigned().references("id").inTable("options").
        onDelete("CASCADE").onUpdate("CASCADE");

      table.string("user_choice").notNullable();

      table.integer("test_no").notNullable();

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
