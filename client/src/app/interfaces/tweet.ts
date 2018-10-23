import {User} from './user'

export interface Tweet {
    id: string;
    idString: string;
    text: string;
    user: User
    createdAt: Date
}