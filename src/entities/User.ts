import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public lastName: string;

  @Column()
  public nickname: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public bio: string;

  @CreateDateColumn()
  public created_at: Date;

  public constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
