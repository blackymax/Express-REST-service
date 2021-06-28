import { getRepository } from 'typeorm'
import { User } from '../entity/user.model'

export const createAdmin = async (): Promise<void> => {
    const root: User = getRepository(User).create({ login: 'admin', password: 'admin' })
    await getRepository(User).save(root)
}