import { v4 as uuidV4 } from 'uuid';

export class User {
  public id?: string;
  public name: string;
  public lastName: string;
  public nickname: string;
  public email: string;
  public password: string;
  public bio: string;
  public created_at: Date;

  public constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
