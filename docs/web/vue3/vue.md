
# 邂逅Vue
> Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架(在项目中一点点来引入和使用Vue，而不一定需要全部使用Vue来开发整个项目)
## Vue3初体验

### 如何使用Vue
> Vue的本质，就是一个JavaScript的库:
- 方式一：在页面中通过CDN的方式来引入;
- 方式二：下载Vue的JavaScript文件，并且自己手动引入;
- 方式三：通过npm包管理工具安装使用它;
- 方式四：直接通过Vue CLI创建项目，并且使用它;

#### 通过CDN引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div id="app">
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
  <script>
    const body = {
      template: '<h2>Hello World</h2>'
    }

    const app = Vue.createApp(body);
    app.mount("#app")
  </script>

</body>
</html>
```

#### 下载并导入
+ 下载Vue的源码，可以直接打开CDN的链接：
+ 打开链接，复制其中所有的代码；
+ 创建一个新的文件，比如vue.js，将代码复制到其中；
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div id="app"></div>

  <script src="../js/vue.js"></script>
  <script>
    Vue.createApp({
      template: `<h2>你好啊, 张三</h2>`
    }).mount("#app");
  </script>
</body>
</html>
```

#### 计算器小案例
我们希望实现一个计数器的案例：
+ 点击+1，那么内容会显示数字+1;
+ 点击-1，那么内容会显示数字-1；

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div id="app">
  </div>

  <script src="../js/vue.js"></script>
  <script>
    Vue.createApp({
      template: `
        <div>
          <h2>{{message}}</h2>
          <h2>{{counter}}</h2>
          <button @click='jia'>+1</button>
          <button @click='jian'>-1</button>
        </div>
      `,
      data: function() {
        return {
          message: "计算器小案例",
          counter: 100
        }
      },
      // 定义各种各样的方法
      methods: {
        jia() {
          console.log("点击了+1");
          this.counter++;
        },
        jian() {
          console.log("点击了-1");
          this.counter--;
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
```

#### Vue属性

+ template属性
    > 表示的是Vue需要帮助我们渲染的模板信息
+ data属性
    > data属性是传入一个函数，并且该函数需要返回一个对象
    + 在Vue2.x的时候，也可以传入一个对象（虽然官方推荐是一个函数）
    + 在Vue3.x的时候，必须传入一个函数，否则就会直接在浏览器中报错.
    + data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理

+ methods属性
    > methods属性是一个对象，通常我们会在这个对象中定义很多的方法
    + 这些方法可以被绑定到template模板中
    + 在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性

## Vue3模板语法常见的指令

### 小技巧:如何快速生成vue代码

+ 复制自己需要生成代码片段的代码
+ https://snippet-generator.app/在该网站中生成代码片段
+ 在VSCode中配置代码片段

![](https://gitee.com/jijianming/imgs/raw/master/Snipaste_2021-12-03_23-37-06.png)

### Mustche双大括号语法

+ 我们希望把数据显示到模板（template）中,使用最多的语法是“Mustache”语法 (双大括号) 的文本插值

### v-text

用于更新元素的 textContent

![](https://gitee.com/jijianming/imgs/raw/master/20211203235939.png)

### v-html

默认情况下，如果我们展示的内容本身是html的，那么vue并不会对其进行特殊的解析。

+ 如果我们希望这个内容被Vue可以解析出来，那么可以使用v-html来展示

![](https://gitee.com/jijianming/imgs/raw/master/20211204000119.png)

### v-pre

v-pre用于跳过元素和它的子元素的编译过程，显示原始的Mustache标签

+ 跳过不需要编译的节点，加快编译的速度

![](https://gitee.com/jijianming/imgs/raw/master/20211204000226.png)

### v-bind的绑定属性

前面讲的一系列指令，主要是将值插入到模板内容中,除了内容需要动态来决定外，某些属性我们也希望动态来绑定.
+ 比如动态绑定a元素的href属性
+ 比如动态绑定img元素的src属性
绑定属性我们使用v-bind，缩写：":"

#### 绑定基本属性

+ v-bind用于绑定一个或多个属性值，或者向另一个组件传递props值，在开发中，有哪些属性需要动态进行绑定呢？
  + 比如图片的链接src
  + 网站的链接href
  + 动态绑定一些类、样式等等

  ![](https://gitee.com/jijianming/imgs/raw/master/20211204001829.png)

#### 绑定class介绍

+ 在开发中，有时候我们的元素class也是动态的。

  + 当数据为某个状态时，字体显示红色
  + 当数据另一个状态时，字体显示黑色

+ 绑定class有两种方式

  + 对象语法

    我们可以传给 :class (v-bind:class 的简写) 一个对象，以动态地切换 class
    ![](https://gitee.com/jijianming/imgs/raw/master/20211204004228.png)
  + 数组语法

    我们可以把一个数组传给 :class，以应用一个 class 列表
    ![](https://gitee.com/jijianming/imgs/raw/master/20211204004334.png)

#### 绑定style介绍

+ 利用v-bind:style来绑定一些CSS内联样式
  + 某些样式我们需要根据数据动态来决定
  + 某段文字的颜色，大小等等
+ 用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
+ 绑定class有两种方式
  + 对象语法

    ![](https://gitee.com/jijianming/imgs/raw/master/20211204005721.png)
  
  + 数组语法

    :style 的数组语法可以将多个样式对象应用到同一个元素上

    ![](https://gitee.com/jijianming/imgs/raw/master/20211204005811.png)

### v-on绑定事件

+ 前端开发中另外一个非常重要的特性就是交互
  + 监听用户发生的事件，比如点击、拖拽、键盘事件等等
  + 在Vue中如何监听事件呢？使用v-on指令
    + 缩写: "@"
    + 修饰符
      + .stop - 调用 event.stopPropagation()
      + .prevent - 调用 event.preventDefault()
      + .capture - 添加事件侦听器时使用 capture 模式
      + .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调
      + .{keyAlias} - 仅当事件是从特定键触发时才触发回调
      + .once - 只触发一次回调
      + .left - 只当点击鼠标左键时触发
      + .right - 只当点击鼠标右键时触发
      + .middle - 只当点击鼠标中键时触发
      + .passive - { passive: true } 模式添加侦听器
+ 使用v-on来监听一下点击的事件

  ![](https://gitee.com/jijianming/imgs/raw/master/20211204012010.png)
+ v-on:click可以写成@click，是它的语法糖写法

  ![](https://gitee.com/jijianming/imgs/raw/master/20211204012052.png)
+ 绑定其他的事件

  ![](https://gitee.com/jijianming/imgs/raw/master/20211204012223.png)
+ 绑定多个事件

  ![](https://gitee.com/jijianming/imgs/raw/master/20211204012257.png)
+ v-on参数传递

  + 通过methods中定义方法，以供@click调用时，需要注意参数问题

    + 如果该方法不需要额外参数，那么方法后的()可以不添加
      + 注意:如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去
    + 如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件
    ![](https://gitee.com/jijianming/imgs/raw/master/20211204013436.png)


## Vue3条件判断、列表渲染
> 在某些情况下，我们需要根据当前的条件决定某些元素或组件是否渲染，这个时候我们就需要进行条件判断
+ Vue提供了下面的指令来进行条件判断
  + v-if
  + v-else
  + v-else-if
  + v-show

+ v-if、v-else、v-else-if用于根据条件来渲染某一块的内容
  + 这些内容只有在条件为true时，才会被渲染出来
  + 这三个指令与JavaScript的条件语句if、else、else if类似
  ![](https://gitee.com/jijianming/imgs/raw/master/20211204105011.png)

+ v-if的渲染原理
  + v-if是惰性的,当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉,当条件为true时，才会真正渲染条件块中的内容

+ v-show

  + v-show和v-if的用法看起来是一致的，也是根据一个条件决定是否显示元素或者组件
  ![](https://gitee.com/jijianming/imgs/raw/master/20211204110607.png)

+ v-show和v-if的区别

  + 用法上的区别
    + v-show是不支持template
    + v-show不可以和v-else一起使用

  + 本质的区别
    + v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行切换
    + v-if当条件为false时，其对应的元素压根不会被渲染到DOM中
  
  + 开发中如何选择v-if或v-show
    + 如果我们的元素需要在显示和隐藏之间频繁的切换，那么使用v-show
    + 如果不会频繁的发生切换，那么使用v-if

+ v-for的基本使用

  + v-for的基本格式是 "item in 数组"
  + 遍历一个数组的时候会经常需要拿到数组的索引
    + 如果我们需要索引，可以使用格式： "(item, index) in 数组"
      ![](https://gitee.com/jijianming/imgs/raw/master/20211204113101.png)

    + 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的
      ![](https://gitee.com/jijianming/imgs/raw/master/20211204113132.png)

  + v-for也支持遍历对象，并且支持有一二三个参数。
    + 一个参数： "value in object"
    + 二个参数： "(value, key) in object"
    + 三个参数： "(value, key, index) in object"

## Vue3计算属性

+ 什么是计算属性？
  + 对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性。

+ 什么是侦听器？
  + 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中
  + 当数据变化时，template会自动进行更新来显示最新的数据
  + 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了
  + 例子(用户在input中输入一个问题,使用该问题去服务器查询答案)
    ![](https://gitee.com/jijianming/imgs/raw/master/20211206131010.png)
  + 默认情况下侦听器只会针对监听的数据本身的改变，对于内部的改变侦听不到，需要加上参数deep
    ![](https://gitee.com/jijianming/imgs/raw/master/20211206132140.png)

## Vue3-v-model

### v-model的基本使用

  + 在代码逻辑中获取到用户提交的数据，我们通常会使用v-model指令来完成
  + v-model指令可以在表单 input、textarea以及select元素上创建双向数据绑定
  + 它会根据控件类型自动选取正确的方法来更新元素
  + 尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件来更新数据，并在某种极端场景 下进行一些特殊处理

  ![](https://gitee.com/jijianming/imgs/raw/master/20211207193250.png)

### v-model的原理

  + 官方有说到，v-model的原理其实是背后有两个操作
    + v-bind绑定value属性的值
    + v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中

    ![](https://gitee.com/jijianming/imgs/raw/master/20211207193400.png)

### v-model修饰符

  + v-model修饰符-lazy
    + 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步
    + 如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为change事件，只有在提交时（比如回车）才会触发
    ![](https://gitee.com/jijianming/imgs/raw/master/20211207194948.png)
  
  + v-model修饰符-number
    + 将string类型转换成数字类型

    ![](https://gitee.com/jijianming/imgs/raw/master/20211207195110.png)

  + v-model修饰符-trim
    + 自动过滤用户输入的首尾空白字符，可以给v-model添加`trim`修饰符

    ![](https://gitee.com/jijianming/imgs/raw/master/20211207195201.png)

## Vue3组件化

  + 人面对复杂问题的处理方式
    + 任何一个人处理信息的逻辑能力都是有限的
    + 所以，当面对一个非常复杂的问题时，我们不太可能一次性搞定一大堆的内容
    + 但是，我们人有一种天生的能力，就是将问题进行拆解
    + 如果将一个复杂的问题，拆分成很多个可以处理的小问题，再将其放在整体当中，你会发现大的问题也会迎刃而解
### 认识组件化开发

  + 组件化也是类似的思想
    + 如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常 复杂，而且不利于后续的管理以及扩展
    + 但如果，我们讲一个页面拆分成一个个小的功能块，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了
    + 如果我们将一个个功能块拆分后，就可以像搭建积木一下来搭建我们的项目

### 组件化开发

  + 我们通过组件化的思想来思考整个应用程序
    + 我们将一个完整的页面分成很多个组件
    + 每个组件都用于实现页面的一个功能块
    + 而每一个组件又可以进行细分
    + 而组件本身又可以在多个地方进行复用
    + 组件化提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用
    + 任何的应用都会被抽象成一颗组件树

    ![](https://gitee.com/jijianming/imgs/raw/master/20211207200415.png)

### 注册组件的方式

  + 注册组件分为两种

    + 组件的名称
      + 在通过app.component注册一个组件的时候，第一个参数是组件的名称，定义组件名的方式有两种
        + 方式一：使用kebab-case（短横线分割符）

        ![](https://gitee.com/jijianming/imgs/raw/master/20211208125514.png)
        + 方式二：使用PascalCase（驼峰标识符）

        ![](https://gitee.com/jijianming/imgs/raw/master/20211208125541.png)

    + 全局组件:在任何其他的组件中都可以使用的组件
      + 全局组件需要使用我们全局创建的app来注册组件
      + 通过component方法传入组件名称、组件对象即可注册一个全局组件了
      + 之后，我们可以在App组件的template中直接使用这个全局组件

      ![](https://gitee.com/jijianming/imgs/raw/master/20211207230040.png)
      + 我们组件本身也可以有自己的代码逻辑

      ![](https://gitee.com/jijianming/imgs/raw/master/20211207230551.png)

    + 局部组件:只有注册的组件中才能使用的组件
      + 局部注册是在我们需要使用到的组件中，通过components属性选项来进行注册
      + 比如之前的App组件中，我们有data、computed、methods等选项了，事实上还可以有一个components选项
      + 该components选项对应的是一个对象，对象中的键值对是 组件的名称: 组件对象

      ![](https://gitee.com/jijianming/imgs/raw/master/20211208125732.png)


## Vue cli 脚手架
+ 真实开发中，我们通常会使用脚手架来创建一个项目，Vue的项目我们使用的就是Vue的脚手架
+ 脚手架其实是建筑工程中的一个概念，在我们软件工程中也会将一些帮助我们搭建项目的工具称之为脚手架
### Vue Cli 安装和使用
+ 全局安装安装
  + npm install @vue/cli -g
+ 升级
  + npm update @vue/cli -g
+ 通过Vue的命令来创建项目
  + vue create 项目的名称
  + 创建项目过程

    ![](https://gitee.com/jijianming/imgs/raw/master/20211223132257.png)

  + 项目的目录结构

    ![](https://gitee.com/jijianming/imgs/raw/master/20211223132424.png)

## Vue3组件化开发
  > 组件化的核心思想应该是对组件进行拆分，拆分成一个个小的组件

### 组件的拆分
+ 我们可以按照如下的方式进行拆分

  ![](https://gitee.com/jijianming/imgs/raw/master/20220104190452.png)

+ 按照如上的拆分方式后，我们开发对应的逻辑只需要去对应的组件编写就可

### 组件的通信
+ 父组件传递给子组件：通过props属性
  + 方式一：字符串数组，数组中的字符串就是attribute的名称

    ![](https://gitee.com/jijianming/imgs/raw/master/20220104192437.png)

  + 方式二：对象类型，对象类型我们可以在指定attribute名称的同时，指定它需要传递的类型、是否是必须的、 默认值等等

    ![](https://gitee.com/jijianming/imgs/raw/master/20220104192508.png)

  + Prop 的大小写命名(camelCase vs kebab-case)
    + HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符
    + 使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短 横线分隔命名) 命名

      ![](https://gitee.com/jijianming/imgs/raw/master/20220104193009.png)
+ 子组件传递给父组件：通过$emit触发事件
  + 子组件中定义好在某些情况下触发的事件名称
  + 在父组件中以v-on的方式传入要监听的事件名称，并且绑定到对应的方法中
  + 在子组件中发生某个事件的时候，根据事件名称触发对应的事件

  + ![](https://gitee.com/jijianming/imgs/raw/master/20220104193219.png)

+ ![](https://gitee.com/jijianming/imgs/raw/master/20220104191248.png)



### 非组件的通信
> 在开发中，我们构建了组件树之后，除了父子组件之间的通信之外，还会有非父子组件之间的通信,非父子组件通信有以下两种方式
+ Provide/Inject
  > 有一些深度嵌套的组件,子组件想要获取父组件的部分内容,在这种情况下,如果我们仍然将props沿着组件链逐级传递下去,就会非常的麻烦.
  > 对于这种情况下，我们可以使用Provide和Inject无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者
  > 父组件有一个 provide 选项来提供数据,子组件有一个 inject 选项来开始使用这些数据

  ![](https://gitee.com/jijianming/imgs/raw/master/20220108163108.png)
  + 处理响应式数据,需要用到vue3中个computed

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108163444.png)

+ Mitt全局事件总线
 > Vue3从实例中移除了 $on、$off 和 $once 方法，所以我们如果希望继续使用全局事件总线，要通过第三方的库:mitt

  + 安装
    > npm install mitt
  + 封装成一个工具eventbus.js

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108163818.png)
  + 监听事件

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108164003.png)
  + 触发事件

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108164045.png)
  + 取消事件

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108164147.png)


## 插槽Slot

### 认识插槽Slot
+ 在开发中，我们会经常封装一个个可复用的组件
  + 我们会通过props传递给组件一些数据，让组件来进行展示
  + 但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的div、span等等这些元素
  + 比如某种情况下我们使用组件，希望组件显示的是一个按钮，某种情况下我们使用组件希望显示的是一张图片
  + 我们应该让使用者可以决定某一块区域到底存放什么内容和元素
+ 举个栗子：假如我们定制一个通用的导航组件 - NavBar
  + 这个组件分成三块区域：左边-中间-右边，每块区域的内容是不固定
  + 左边区域可能显示一个菜单图标，也可能显示一个返回按钮，可能什么都不显示
  + 中间区域可能显示一个搜索框，也可能是一个列表，也可能是一个标题，等等
  + 右边可能是一个文字，也可能是一个图标，也可能什么都不显示
  ![](https://gitee.com/jijianming/imgs/raw/master/20220108164633.png)

### 如何使用插槽Slot？
+ 这个时候我们就可以来定义插槽slot：
  + 插槽的使用过程其实是抽取共性、预留不同
  + 我们会将共同的元素、内容依然在组件内进行封装
  + 同时会将不同的元素使用slot作为占位，让外部决定到底显示什么样的元素
+ 如何使用slot呢？
  > Vue中将\<slot\> 元素作为承载分发内容的出口
  > 在封装组件中，使用特殊的元素\<slot\>就可以为封装组件开启一个插槽
  > 该插槽插入什么内容取决于父组件如何使用
  + 基本使用
    + 我们一个组件MySlotCpn.vue：该组件中有一个插槽，我们可以在插槽中放入需要显示的内容
    + 我们在App.vue中使用它们：我们可以插入普通的内容、html元素、组件元素，都是可以的
    ![](https://gitee.com/jijianming/imgs/raw/master/20220108165304.png)
  + 插槽的默认内容
    > 有时候我们希望在使用插槽时，如果没有插入对应的内容，那么我们需要显示一个默认的内容

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108165442.png)
  + 多个插槽的效果
    > 如果一个组件中含有多个插槽，我们插入多个内容时是什么效果？

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108165623.png)
  
  + 具名插槽的使用
    > 具名插槽顾名思义就是给插槽起一个名字 \<slot\> 元素有一个特殊的 attribute：name,
    > 一个不带 name 的slot，会带有隐含的名字 default

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108165901.png)

  + 动态插槽名
    > 通过 v-slot:[dynamicSlotName]方式动态绑定一个名称

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108170142.png)

  + 具名插槽的缩写

    > 跟 v-on 和 v-bind 一样，v-slot 也有缩写,即把参数之前的所有内容 (v-slot:) 替换为字符 #

    ![](https://gitee.com/jijianming/imgs/raw/master/20220108170259.png)

### 渲染作用域
  > 在Vue中有渲染作用域的概念
  > 父级模板里的所有内容都是在父级作用域中编译的,子模板里的所有内容都是在子作用域中编译的

  + 案例
    ![](https://gitee.com/jijianming/imgs/raw/master/20220108170802.png)

    在我们的案例中ChildCpn自然是可以让问自己作用域中的title内容的，但是在App中，是访问不了ChildCpn中的内容的，因为它们是跨作用域的访问

#### 认识作用域插槽
  > 有时候我们希望插槽可以访问到子组件中的内容,
  
  + 案例
    ![](https://gitee.com/jijianming/imgs/raw/master/20220108172532.png)

#### 独占默认插槽的缩写
+ 我们的插槽是默认插槽default，那么在使用的时候 v-slot:default="slotProps"可以简写为vslot="slotProps"
  ![](https://gitee.com/jijianming/imgs/raw/master/20220108173322.png)
+ 如果我们的插槽只有默认插槽时，组件的标签可以被当做插槽的模板来使用，这样，我们就可以将 v-slot 直接用在组件上
  ![](https://gitee.com/jijianming/imgs/raw/master/20220108173741.png)

#### 默认插槽和具名插槽混合
+ 只要出现多个插槽，请始终为所有的插槽使用完整的基于 \<template\> 的语法
  ![](https://gitee.com/jijianming/imgs/raw/master/20220108173906.png)

## 动态组件
