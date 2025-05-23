// This file defines the User entity with its properties and types.
import { User } from '../entities/User';

export interface UserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}