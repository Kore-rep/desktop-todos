import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export class Todo {
  title: string;

  description: string;

  id: string;

  isComplete: boolean;

  isImportant: boolean;

  constructor(title: string, desc: string) {
    this.description = desc;
    this.title = title;
    this.id = uuidv4();
    this.isComplete = false;
    this.isImportant = false;
  }

  public get isOutstanding() {
    return !this.isComplete;
  }
}
