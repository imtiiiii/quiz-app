import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Keyword extends BaseModel {
    @column({ isPrimary: true })
    public id: number
    @column()
    public question_id: number

    @column({ isPrimary: true })
    public text: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
