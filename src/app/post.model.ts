export class Post {
  public timestamp = Date.now();
  constructor(public title: string, public username: string, public comment: string, public image: string) {};
}