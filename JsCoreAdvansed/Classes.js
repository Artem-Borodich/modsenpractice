class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    Info() {
      console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`);
    }
  }
  const person1 = new Person("Алексей", 30, "Россия");
  const person2 = new Person("Мария", 25, "Украина");
  person1.Info();
  person2.Info();
  