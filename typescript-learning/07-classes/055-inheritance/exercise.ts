

export abstract class Animal {
  constructor(protected name: string) {}
  abstract speak(): string;
}
export class Dog {
  // TODO: extend Animal, inherit its constructor, override speak
}
