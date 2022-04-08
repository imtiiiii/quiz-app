import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Question from './Question'
import Option from './Option'

export default class UserChoice extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number
  @column()
  public question_id: number
  @column()
  public solution_id: number
  @column()
  public user_choice: string
  @column()
  public test_no: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: "user_id"
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Question, {
    foreignKey: "question_id"
  })
  public question: BelongsTo<typeof Question>

  @belongsTo(() => Option, {
    foreignKey: "solution_id"
  })
  public option: BelongsTo<typeof Option>
}
