/*
 1.in type script it's check the type
 2. if we declire and assign a variable same time then ts auto check that and we can not resign a other type of valu ==>  let age=23; age="asif"  we can not do that.
 ---explicit type---
 3. but if we just declare then we can do that like let age;  age=23; age = "aj", it will work
 4. but it shouldn't be, so we can explicitly say, let age:number; then we can't reassign string here. like it will work array, object all of them => let a: string[] = []; or let a: (string | number) [] = [] // union

 ---dynamic type----
 1. we can use type as 'any' although our editor count it as any but we can also say that.
  2. like let a:any, now we can assign any type of value there. it work same for array and other.

  ----function-----
1. in function it also work like that we can say, it a func like , let myfunc : Function; so here in this variable we can only assign a function
2. in a function, if we tell what type will be our paramiter, then we have to pass arguement like that. but if i use  ? then it will be option not required
  const func= (a:string, b:string, c?:number) =>{
      clg(a, b, c);
  }
      func("asif", "ali")

    3. we can also create a function signature
     const add:(a:number, b:number)=>number // this will get 2 value, number then return number

 ------Aliases--------
1. when there we will be larger program, we need to declare type again and again, it will be a pera.
that's why we can declare it as modular shortly like short form then we can use.

type userType = {name:String, age:Number}  // in type script, String, Number those are capital cause in js those are smaller. but function is like Function. like oposite.

const sayHello = (user: userType)=>{
clg(user.name, user.age);
}



*/
export let a = 20;
//# sourceMappingURL=typeChecking.js.map