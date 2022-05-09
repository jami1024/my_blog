# 初识TypeScript

官网：https://www.typescriptlang.org/
>TypeScript是拥有类型的JavaScript超集，它可以编译成普通、干净、完整的Javasc代码
整个项目的所有ts文件会被视为同一个作用域，所以变量名重复会报错
可以在ts文件末尾加导出，使文件变为独立的模块
练习版本为4.x

```typescript
export {}
```

TypeScript运行需要编译成JavaScript:

- tsc TypeScript Compiler
- babel

```shell
npm install typescript -g #若已安装会更新版本
tsc --version #查看安装的版本号
tsc xxx.ts  #将ts编译成js
```

TypeScript运行环境搭建：

- 通过webpack搭建一个ts的环境

  - 新建文件，在根目录运行命令

  ```shell
  npm init
  npm install webpack webpack-cli -D #本地安装
  ```

  - 修改package.json，增加build命令

  ```js
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  },
  ```

  - 安装支持ts运行的loader

  ```shell
  npm install ts-loader -D
  ```

  - 运行命令，生成tsconfig.json

  ```shell
  tsc --init
  ```

  - 安装webpack-dev-server,以搭建本地服务

  ```shell
  npm install webpack-dev-server -D
  ```

  - 安装html-webpack-plugin,将根目录的index.html作为模板

  ```shell
  npm install html-webpack-plugin -D
  ```

  - 在根目录下新建文件webpack.config.js

  ```js
  const path = require("path");
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    entry: "./src/main.ts",
    output: {
      path:path.resolve(__dirname, "./dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".ts", ".js", ".cjs", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      })
    ]
  }
  ```

  - 启动本地服务

  ```shell
  npm run serve
  ```

  

- 安装ts-node库直接运行ts后缀文件

  ```shell
  npm install ts-node -g
  npm install tslib @types/node -g #ts-node依赖这两个包
  ts-node xxx.ts #然后可以直接运行ts后缀文件
  ```


### 数据类型

#### 变量的声明

TypeScript中定义变量需要指定标识符的类型

声明了类型后typescript就会进行类型检测，声明的类型可以称之为类型注解

```typescript
var/let/const 标识符: 数据类型 = 复制;
//string(小写)：表示typescript中的字符串类型
//String(大写)：表示JavaScript中的字符串包装类的类型 其它类型中相同，ts中用小写
```

类型推断/类型推导

```typescript
let str = "hello world";
//定义变量时没有写类型注解，
//默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
//默认情况下，如果可以推导出标识符的类型，一般不加类型注解
```

#### number类型

ts与js一样，不区分整数类型(int)和浮点型(double)，统一称为number类型

```typescript
let num: number = 0b111; //二进制
let num: number = 0o456; //八进制
let num: number = 0xacf; //十六进制
```

#### boolean类型

```typescript
let flag: boolean = true;
flag = false;
flag = 20 > 30;
```

#### string类型

```typescript
let message: string = "ysj";
```

#### Array类型

```typescript
//一个数组里面，最好存放的数据类型是相同的  定义数组时，指定里面放什么数据类型
const names: Array<string> = [];  //不推荐，react中jsx有冲突
const names2: string[] = []; //推荐写法

type Obj = { name: string; age: number };
const names: Obj[] = [ //数组包对象
  {
    name: "ysj",
    age: 18,
  },
];
```

#### object类型的使用

```typescript
const info = {
  name: "ysj",
  age: 18
}
```

#### null和undefined类型

```typescript
const n1: null = null; //null需要指定类型，不指定时会推导为any
let n2: undefined = undefined;
```

#### symbol类型

```typescript
const title1 = Symbol("title");
const title2 = Symbol("title");
const info2 = { //通过symbol让两个key同名
  [title1]: "程序员",
  [title2]: "老师"
}
```

#### any类型

无法确定一个变量是什么类型的时候，或变量的类型会发生改变的时候，可以使用any类型

最好不要使用

```typescript
let message: any = "abc";
message = 123;
```

#### unknown类型

用于描述类型不确定的变量

unknown类型只能赋值给any和unknown类型，any类型可以赋值给任意类型

```typescript
let result: unknown
```

#### void类型

用来指定一个函数是没有返回值的，那么它的返回值就是void类型

```typescript
function (num: number): void { //使用频率较低
  //函数如果没写任何类型，默认返回值的类型就是void
}
```

#### never类型

永远不会发生值的类型

```typescript
function foo(): never { //表示函数永远不会返回值
  	while(true) {}
}
function foo(): never { //抛出一个错误，没有返回值
  throw new Error();
}
```

#### tuple类型

元组类型：多种元素的组合，可以确定里面每个元素是什么类型

```typescript
const info: [string, number, number] = ["abc", 18, 1.88];
```

#### 函数的参数和返回值类型

```typescript
//给参数加上类型注解   给返回值加上类型注解
function sum(num1: number, num2: number): number { //在开发中，通常可以不写返回值的类型(自动推导)

}
```

#### 匿名函数的参数

```typescript
const names: string[] = ["shj", "ysj"];
names.forEach((item) => { //item可以不写类型注解，item来自数组，数组有类型
  //上下文中的函数，可以不加类型注解
})
```

#### 对象类型

```typescript
function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y);
}

printPoint({x:123, y:456});

function point2(point: {x: number, y: number, z?: number}){ //z为可选的number类型，调用函数时可以不传
  
}
```

#### 联合类型

```typescript
function printId(id: number|string) { //id可以是number或string类型
	//使用联合类型的值时需要进行类型判断 narrow:缩小
  switch(typeof id) {
    case 'string':;break;
  }
}
```

#### 可选类型和联合类型的关系

```typescript
function foo(message?: string){
  //一个参数为可选类型的时候，本质上类似于这个参数 类型|undefined 的联合类型
}
```

#### 类型别名

```typescript
type idType = string | number | boolean; //type用于定义类型别名
function printId(id: idType) {}
```

#### 类型断言

有时TypeScript无法获取具体的类型信息，就需要使用类型断言

通过类型断言将一个普遍的类型转换为一个具体类型

```typescript
const el = document.getElementById("ysj") as HTMLImageElement;

class Person {
}
class Student extends Person {
  studying() {
  }
}
function sayHello(p: Person) {
  (p as Student).studying();
}
const stu = new Student();
sayHello(stu);
```

#### 非空类型断言

在可能为空的值的后面加上一个!号

```typescript
function printMessage(message?: string) { //参数message为可选类型
  console.log(message!.length); //message后加叹号，表示message一定会有值，不用做非空类型判断
}
```

#### 可选链的使用

可选链是ES11(ES2020)增加的特性

可选链使用可选链接操作符?.

作用：当对象的属性不存在时，会短路，后面的代码全部不再执行，直接返回undefined，如果存在，才会继续执行

```typescript
type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number
  }
}
const info : Person = {
  name: 'ysj',
  friend: {
    name: "ysj2"
  }
}

//另外一个文件中
console.log(info.friend?.name); //info里面可能有friend,在friend后面加?.有值就取，没有值就不取
```

??和!!的作用

!!操作符：

- 将其他类型转换成boolean类型
- 作用类似于Boolean(遍历)的方式

```typescript
const message = 'Hello World';
// const flag = Boolean(message); //两者等价
const flag = !!message; //js特性
```

??操作符：

- ES11新特性
- 控制合并操作符(??)是一个逻辑操作符，当操作符左侧是null或undefined时，返回其右侧操作数，否则返回左侧操作数

```typescript
let message: string|null = null;
const content = message ?? "默认值"; //message有值就是用message的值，否则使用默认值
```

#### 字面量类型

字面量类型的值必须和类型保持一致

```typescript
const message: "hhh" = "hhh"; //hhh字符串也可以作为类型，称为字面量类型

// 字面量类型的意义就是必须结合联合类型
type Align = 'left'|'right'|'center'; //对齐方式
let align:Align  = 'left';
```

#### 类型缩小

缩小(Narrowing)：在给定的执行路径中，缩小比声明时更小的类型

类型保护(type guards)：编写类似  typeof padding === "number" 之类的代码

常见类型保护：

- typeof
- 平等缩小(如=== ， !\==，switch)
- instanceof
- in
- switch

```typescript
//typeof类型缩小
type idType = number|string;
function printID(id: idType) {
  if(typeof id === 'string') {
    console.log(id.toLowerCase());
  }
}

//平等的类型缩小(=== == != !== switch)
type Direction = "left"|"right"|"top"|"bottom";
function (direction: Direction) {
  // if(direction === "left") {

  // }
  switch(direction) {
    case "left" :
      console.log(direction);break;
  }
}

//instanceof， obj instanceof class,若obj对象是类class的实例，则返回true
type Time = string|Date;
function printTime(time : Time){
  if(time instanceof Date) {

  }
}

class Student{}
class Teacher{}
function work(p: Student|Teacher) {
  if(p instanceof Student){

  }
}

// in, a in b,若b对象拥有a属性返回true
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish|Dog) {
  if("swimming" in animal) {
    animal.swimming();
  }else {
    animal.running();
  }
}

const fish:Fish = {
  swimming() {
    console.log("swimming");
  }
}

walk(fish);
```

#### 任意属性

自定义类型时，希望一个接口允许有任意的属性签名。任意属性有两种定义方式：

- 属性签名是string类型
- 属性签名是number类型

**string任意类型属性**

```typescript
interface IString {
    [propName: string]: number; //IString类型的对象可以有任意属性名，
  	//string指对象的键都是字符串类型，number规定了属性值的类型
  	//propName 类似于函数的形参，是可以取其他名字的
}

const obj: IString = {
    a: 1,
    b: 3,
};
```

**number任意类型属性**

```typescript
interface INumber {
    [index: number]: string;//INumber类型的数组可以有任意的数字下标，数组成员的类型必须是string
}

const arr: INumber = ['suukii'];
```

**同时定义两种任意属性**

一个接口可以同时定义这两种任意属性，但是 number 类型的签名指定的值类型必须是 string 类型的签名指定的值类型的子集

```typescript
interface IDouble {
    [prop: string]: object;
    [index: number]: Function; //Function是object的子集
}
```

**同时定义任意属性和其它类型的属性**

注：一旦定义了任意属性，那么其他属性(确定属性、可选属性、只读属性等)的类型都必须是它的类型的子集

```typescript
interface Person {
    name: string;
    age?: number;
    [prop: string]: string | number; //当不是子集时可以使用联合类型使其它类型变成子集
}
//但是number 类型的任意属性签名不会影响其他 string 类型的属性签名
type Arg = {
    [index: number]: number;
    length: string;
};
```



### 函数类型

```typescript
//函数作为参数
function bar(fn: () => void) { //参数名为fn,参数类型为函数类型

}

//定义常量时，编写函数的类型
type AddFn = (num: number) => number;
const add: AddFn = (num1: number) => {
  return num1;
}

type returnFn = { //返回值里面有函数时
  echartInstance: echarts.EChartsType;
  setOptions: (options: echarts.EChartsOption) => void;
  updateSize: () => void
}
```

#### 可选类型

```typescript
//可选类型必须写在必选类型后面
function (x: number, y?: number) { //y -> number|undefined
  
}
```

#### 参数的默认值

```typescript
//一般函数参数顺序
//必传参数  有默认值的参数  可选参数 
function foo(x:number, y:number = 100) {
  return x + y;
}
```

#### 剩余参数

```typescript
function sum(...nums: number[]) {
  let total = 0;
  for(let num of nums) {
    total += num;
  }
  return total;
}
sum(20, 30, 40);
```

#### 可推导的this类型

```typescript
//this的不明确类型
type ThisType = { name: string };
function eating(this: ThisType, str: string) { //第一个参数传this,其他参数放到this后面
  console.log(this.name + " eating " + str);
}

const info = {
  name: "ysj",
  eating: eating,
};

//隐式绑定
info.eating("hhhh");

//显式绑定
eating.call({ name: "kobe" }, "hhh");
eating.apply({ name: "james" }, ["hhh"]);

export {}
```

#### 函数的重载

函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载

其他语言

```java
function add(num1, num2){// 具体实现}
function add(num1, num2, num3){//具体实现}
```

TS

```typescript
function add(num1: number, num2: number): number; //不写具体实现
function add(num1: string, num2: string): string; //重载函数
function add(num1: any, num2: any){ //具体实现
  if(typeof num1 === "string") {
    return num1.length + num2.length;
  }
  return num1 + num2;
}
const result = add(20, 30);
const result2 = add("aaa", "bbb");
//在函数的重载中，实现函数是不能直接被调用的
```

### 类

#### 类的定义

```typescript
class Person { //ts中要求类的属性必须有默认值
  name: string = ""; //定义属性的时候直接初始化
  age: number = 0;
  eating() {
    console.log(this.name + " eating");
  }
}

const p = new Person();

class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) { //别人在new一个对象的时候会自动调用此函数，要求别人new的时候传参
    this.name = name;
    this.age = age;
  }
}
const p2 = new Person2("ysj", 18);
```

#### 类的继承

```typescript
class Person { //将老师和学生重复的属性抽到Person里面,让学生类和老师类再继承Person
  name: string = "";
  age: number = 0;
  eating() {
    console.log("eating");
  }
}
class Student extends Person {
  sno: number = 0;
  
  studying() {
    console.log("studying");
  }
}

class Teacher extends Person {
  title: string = "";

  teaching() {
    console.log("teaching");
  }
}

const stu = new Student();
stu.name = "ysj";
stu.age = 18;
console.log(stu.name);
console.log(stu.sno);
```

类的继承2

```typescript
class Person {
  name: string;
  age: number;
  constructor(name:string, age: number) {
    this.name = name;
    this.age =age;
  }
  eating() {
    console.log("eating");
  }
}
class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
    super(name, age); //通过super调用父类的构造器
    this.sno = sno;
  }

  eating() { //子类对父类方法进行重写(overwrite)
    super.eating(); //执行父类方法
    console.log("student eating")
  }

  studying() {
    console.log("studying");
  }
}

const stu = new Student("ysj", 18, 2017);
console.log(stu.name);
console.log(stu.sno);
```

#### 多态

多态：在某一个方法里面，看似相同的类型，在真正执行方法的时候，表现出来的形态是不一样的
多态前提：父类引用指向子类对象(继承或接口)
多态目的：为了写出更加具备通用性的代码

```typescript
class Animal {
  action() {
    console.log("animal running");
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running!!!");
  }
}
class Fish extends Animal {
  action() {
    console.log("fish swimming!!!");
  }
}

function makeActions(animal: Animal[]) {
  animal.forEach(item => {
    item.action(); //执行的重写之后的方法
  });
}

makeActions([new Dog(), new Fish()])
```

#### 类的成员修饰符

ts中，类的属性和方法支持三种修饰符：public、private、protected

- public修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
- private修饰的是仅在同一类中可见、私有的属性或方法
- protected修饰的是仅在类自身及子类中可见、受保护的属性或方法

```typescript
class Person {
  public name: string; //默认修饰符
  private age: number; //仅在当前类(Person)中能访问
  protected height: number; //在类内部和子类中可以访问
}
```

#### 只读属性readonly

```typescript
class Person {
  readonly name: string = "123"; //可以在constructor里面赋值，赋值之后就不可以再修改
  readonly friend?: Person; //属性本身不能进行修改，但若为对象类型，则可修改对象中的属性
  constructor(name: string, friend?: Person) {
    this.name = name;
  }
}

const p = new Person("ysj", new Person("kobe"));
```

#### getters/setters

```typescript
class Person {
  private _name: string; //私有属性一般用下划线开头
  constructor(name: string) {
    this._name = name;
  }
  //访问器 getter/setter
  set name(newName) { //调用： p.name
    this._name = newName;
  }
  get name() {
    return this._name;
  }
}

const p = new Person("ysj");
p.name = "ysj2";
console.log(p.name);
```

#### 静态成员

```typescript
class Person {
  static time: string = "20:00";
  static sport() {
    console.log("做运动");
  }
}
console.log(Person.time); //静态属性可通过类直接访问，而不用new一个对象再访问
Person.sport();
```

#### 抽象类abstract

父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法，可以定义为抽象方法

- 抽象方法必须存在于抽象类中
- 抽象类不能被实例化(不能通过new创建)
- 抽象方法必须被子类实现，否则该子类必须也是一个抽象类

```typescript
function makeArea(shape: Shape) {
  return shape.getArea();
}

abstract class Shape { //抽象类不能被实例化
  abstract getArea(): number; //抽象方法必须在抽象类里面，且必须被子类实现
}

class Rectangle extends Shape{
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width; 
    this.height = height;
  }
  getArea() { //抽象类被子类实现
    return this.width * this.height;
  }
}

const ce = new Rectangle(3, 4);
console.log(makeArea(ce));
```

#### 类的类型

```typescript
class Person {
  name: string = "123";
  eating() {
    console.log("eating")
  }
}

const p1: Person = { //类本身可以作为类型注解的类型
  name: "ysj",
  eating() {
    console.log("p1 eating");
  }
}
```

### 接口

规范：定义接口名字的时候，名字前面加个大写的 I

#### 声明对象类型

```typescript
//接口方式来声明对象类型 interface
interface InfoType2 {
  name: string,
  age?: number, //可选属性
  readonly height: number //只读属性
}
const info2: InfoType2 = {
  name: "ysj2",
  age: 19,
  height: 1.80
}
```

#### 索引类型

```typescript
//通过interface定义索引类型
interface Index { //要求key为number类型  value为string类型
  [index: number]: string
}

const frontLanguage: Index = {
  0: "HTML",
  1: "CSS",
  2: "JS",
  3: "Vue"
}
```

#### 函数类型

```typescript
interface Fn{
  (n1: number, n2: number): number //函数类型
}
```

#### 接口继承

```typescript
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

interface IAction extends ISwim, IFly { //继承多个接口
	//实现两个接口组合的方式：定义一个新的接口，继承自原来的的接口
}

const action: IAction = {
  swimming() {
  },
  flying() {
  }
}
```

#### 交叉类型

```typescript
//另一种组合类型的方式：交叉类型
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly;
const obj1: MyType1 = {
  swimming(){ //ISwim和IFly接口的方法有其中一个就行
  }
}

type MyType2 = ISwim & IFly; //使用交叉类型将两个对象类型结合在一起
const obj2: MyType2 = {
  swimming(){ //ISwim和IFly接口的方法必须都有才行 
  },
  flying(){
  }
}
```

#### 接口的实现

```typescript
interface ISwim {
  swimming: () => void
}
interface IEat {
  eating: () => void
}

class Animal {
}

//继承只能实现单继承
//实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish Swimming");
  }
  eating() {
    console.log("Fish Eating");
  }
}

class Person implements ISwim {
  swimming() {
  }
}
//编写一些公共的API：可以面向接口进行编程(前提：让类实现对应的接口)
function swimAction(swimable: ISwim) {
  	swimAction.swimming(); //实现了这个接口的类对应的对象都有此方法
}

//1.所有实现了接口的类对应的对象，都是可以传入
swimAction(new Person()); //传入Person对象
swimAction(new Fish()); //传入Fish对象
```

#### interface和type区别

- 定义非对象类型，通常使用type
- 定义对象类型
  - interface可以重复的对某个接口来定义属性和方法
  - 而type定义的是别名，别名是不能重复的

定义接口如果名称相同，会将所有属性进行合并

```typescript
interface IFoo {
  name: string
}
interface IFoo {
  age: number
}
const foo:IFoo = {
  name: "ysj",
  age: 18
}
//可以定义新接口，用来给内置对象增加属性
// interface Winidow {
//   name: string
// }
```

官网推荐尽可能使用interface，也可根据自己爱好选择

#### 字面量赋值

```typescript
interface IPerson {
  name: string
}
const info = {
  name: "ysj",
  address: "重庆市"
}
//info引用直接赋值给IPerson类型的数据时
//ts会做一个擦除(freshness)操作，在进行类型检测时，将多余的属性擦除，擦除后若满足IPerson类型，ts就认为可以赋值
const p: IPerson = info;

// const p1: IPerson = { //直接赋值会报错，无法通过ts的类型检测
//   name: "ysj",
//   address: "重庆市"
// }
```

### 枚举类型

枚举类型为ts特有特性之一：

- 枚举就是将一组可能出现的值，一个个列举出来，定义在一个类型中(枚举类型)
- 枚举允许开发者定义一组命名常量，常量可以是字符串、数字类型

```typescript
enum Direction { //一般枚举类型都大写
  LEFT, // 默认有值，从0开始，即可以写为  LEFT = 0, RIGHT = 1, TOP = 2, BOTTOM = 3
  RIGHT, //也可以自定类型的值，若只改第一个的值，后面的值会依次递增(第一个为100，第二个就是101)
  TOP, //还可以赋值为字符串
  BOTTOM
}

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log("向左转");
      break;
    case Direction.RIGHT:
      console.log("向右转");
      break;
    case Direction.TOP:
      console.log("向右转");
      break;
    case Direction.BOTTOM:
      console.log("向右转");
      break;
    default:
      const foo: never = direction; //少穷举一个此行代码就会报错(因为任何值都不能赋值给never)
      break;
  }
}

turnDirection(Direction.LEFT); //代码阅读性强，看参数就知道是向左转
```

### 泛型

泛型：将函数的类型进行参数化，让外界决定参数类型

```typescript
//类型的参数化

//在定义函数时，不决定参数的类型
//而是让调用者以参数的形式告知此处函数的参数应该为何种类型
function sum<Type>(num: Type): Type { //Type首字母一般大写(规范)，常简写为T
  return num;
}

//调用方式一：明确传入参数类型
sum<number>(20); //传入number类型
sum<{name: string}>({name: "ysj"}); //传入对象类型
sum<any[]>(["ysj1", "ysj2"]); //传入数组类型
//调用方式二：类型推导
sum(5); //会推导为字面量类型,最好明确指定类型
```

**泛型接收类型参数**

```typescript
function foo<T, E>(arg1: T, arg2: E) {
}

foo<number, string>(50, "ysj");
```

开发中常用名称简写：

- T：Type缩写，类型
- K、V：key和value的缩写，键值对
- E：Element缩写，元素
- O：Object缩写，对象

**泛型接口**

```typescript
interface IPerson<S = string, N = number> { //默认类型
  name: S,
  age: N
}
const p: IPerson<string, number> = { //若无默认类型，此处不传类型也不会进行类型推导，会报错
  name: 'ysj',
  age: 18
 }
```

**泛型类**

```typescript
class Point<T> {
  x: T;
  y: T;
  z: T;
  constructor(x: T, y: T, z: T,) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
const p = new Point(5, 2, 3); //没有明确指定时会有类型推导
const p2 = new Point<number>(5, 2, 3);
const p3: Point<number> = new Point(5, 2, 3);
```

**泛型的类型约束**

```typescript
interface ILength {
  length: number
}
function getLength<T extends ILength>(arg: T) { //要求传进来的属性必须具有length属性，且会返回一个number
}
```

### 模块化开发

TS支持两种方式控制作用域

- 模块化：每个文件可以是一个独立的模块，支持ES Module、CommonJS
- 命名空间：通过namespace来声明一个命名空间

```typescript
export namespace time { //命名空间里面的数据要想在外部拿到，必须要export
  //通过 time.format("dd"); 获取
  export function format(time: string) {
    return '2222-05-20';
  }
  export function foo(){}
  export const name = "ysj"
}
export namespace price { //要想在其它模块使用，则需要导出命名空间
  export function format(price: number) {
    return "99.99元"
  }
}
  
//main.ts
import {time, price} from './utils/format';

console.log(time.format("dd"));
console.log(price.format(99));
```

**类型查找**

typeacritp文件： .d.ts文件

- 用来做类型的声明(declare)。仅仅用来做类型检测，告知ts我们有哪些类型

ts会在以下查找类型声明

- 内置类型声明

  - ts自带的，帮助我们内置了js运行时的一些标准化API的声明文件
  - 如Math、Date、Window、Document等

- 外部定义类型声明(三方库)

  - 在自己库中进行类型声明（编写.d.ts文件），比如axios
  - 通过社区的一个公有库DefinitelyTyped存放类型声明文件
    - 该库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
    - 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
    - 比如我们安装react的类型声明： npm i @types/lodash --save-dev(或-D，开发时)

- 自己定义类型声明

  - 在任意路径下新建***.d.ts文件

    ```typescript
    declare module 'lodash'{ //给lodash声明模块
      export function join(arr: any[]): void 
    }
    // 声明变量/函数/类
    declare let name: string
    declare functionfoo(): void
    declare class Preson {
      name: string;
      age: string;
      constructor(name: string, age: number)
    }
    //声明文件
    declare module '*.jpg'; //将以.jpg结尾的文件当成一个模块
    import aImg  from './img/a/jpg'; //再在其它文件通过impor引入图片文件时就不会再报错了
      
    //声明命令空间
    declare namsespace $ { //如果引用Jquery
      export function ajax(settings: any): any
    }
    ```

### tsconfig.json

https://www.typescriptlang.org/tsconfig

ts的配置文件

```json
{
  "compilerOptions": { //编译选项
    "target": "esnext", //目标代码(ts -> js(es5/6/7))
    "module": "esnext", //目标代码需要使用的模块化方案 esnext:es6+ umd:支持多种模块化
    "strict": true, //打开一些严格的检查
    "jsx": "preserve", //是否对jsx进行某种处理 preserve：保留
    "importHelpers": true, //辅助的导入功能
    "moduleResolution": "node", //按照node的方式去解析模块
    "skipLibCheck": true, //跳过对一些库的类型检测
    "esModuleInterop": true, //是否允许esmodule与commonjs混合使用
    "allowSyntheticDefaultImports": true, //是否允许esmodule与commonjs混合使用
    "sourceMap": true, //是否生成映射文件
    "baseUrl": ".", //文件路径在解析时基本的url(基于当前文件)
    "types": ["webpack-env"],  //指定具体要解析使用的类型(不传时类型来自于target)
    "paths": { //编译阶段路径解析(类似于webpack中的alias)
      "@/*": ["src/*"],
      "components/*": ["src/components/*"], //路径别名配置components报错时可加上此配置选项
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"] //指定在项目中可以使用哪些库里面的类型
  },
  //当前有哪些ts代码是需要经过编译解析的
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"],
  "exclude": ["node_modules"] //排除哪些东西
}
```

