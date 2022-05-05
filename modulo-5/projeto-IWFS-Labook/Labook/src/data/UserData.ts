import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_user"

    insert = async (user: User) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Oops, there was an error in the database!")
            }
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Oops, there was an error in the database!")
            }
        }
    }
}
