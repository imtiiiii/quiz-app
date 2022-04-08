import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Question from './Question'
import UserChoice from './UserChoice'

export default class Option extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public question_id: number

	@column()
	public option: string
	@column()
	public is_correct: number


	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@belongsTo(() => Question, {
		foreignKey: "question_id"
	})
	public question: BelongsTo<typeof Question>
	@hasOne(() => UserChoice)
	public user_choice: HasOne<typeof UserChoice>



}
