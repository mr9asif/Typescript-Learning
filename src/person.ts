// src/person.ts

export class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  public getAge(): number {
    return this.age;
  }
}
