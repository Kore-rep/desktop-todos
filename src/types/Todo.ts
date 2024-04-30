import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export class Todo {
  title: String;

  description: String;

  id: String;

  isComplete: boolean;

  constructor(title: String, desc: String) {
    this.description = desc;
    this.title = title;
    this.id = uuidv4();
    this.isComplete = false;
  }
}
