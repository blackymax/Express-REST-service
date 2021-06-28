import { getRepository } from 'typeorm'
import { env } from '../common/config'
import { User } from '../entity/user.model'

export const createAdmin = async (): Promise<void> => {
    const admin: User = getRepository(User).create({ login: env.ADMIN_LOGIN, password: env.ADMIN_PASSWORD })
    await getRepository(User).save(admin)
}