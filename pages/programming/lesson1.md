---
layout: page
title: Programming Lesson 1 Tree Drawing
description: programming turtorials for beginners
---

### 挑战 1 画一个正方形
首先给大家一个具体例子。下面这个程序会画出一个直角。  
点击下面对话框顶端的:arrow_forward:按钮，程序会在电脑屏幕上自动画出一个直角。    
<iframe src="https://trinket.io/embed/python/136dee2cf8" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
以上这个程序一共有11行代码。  
其中以井字符号”#“开头的行（第1、2、3、6、8、10行），是榨汁机的评论，并不是程序的有效代码，计算机并不会执行，所以不起任何作用。  
有效代码只有4行  
第4行是引入画图工具turtle，画画的箭头就是海龟, 第7行是让海龟向前走100个像素，第9行是让海龟向左转90度，第11行是让海龟再向前走100个像素  
**你的挑战是，给这个程序加上几行代码：重复画直角的过程（第9行和第11行）数次，画出一个正方形。**  
**注意，你加入的代码要从12行开始写起，每行代码的左端要和前后行对齐。**  
手机用户请点击:pencil:对程序进行修改。  

#### 挑战 1 答案
以下是挑战1的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。    
<iframe src="https://trinket.io/embed/python/d35a31bb10" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 2 画一个完美五角星
既然我们学会了画正方形，那么我们可不可以调整折线的角度，来画一个完美的五角星呢？  
<iframe src="https://trinket.io/embed/python/2ff1835bab" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
**你的挑战是，给这个程序加上几行代码：重复11行和13行数次，画出一个完整的五角星。**  
海龟向左转144度是因为，五角星的每个角是36度，所以在每个角处，因此，海龟要转向180-36=144度。  
**注意，你加入的代码要从14行开始写起。每行代码的左端要和前后行对齐。**  
手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。 
  
#### 挑战 2 答案
以下是挑战2的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。  
<iframe src="https://trinket.io/embed/python/7b3a5900ce" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 3 让海龟爬到指定位置
我们可以把一些可以重复利用的并屡试不爽的代码放在一起，我们称这段代码为一个“套路”。  
例如下面程序中，第9行到第17行，就是一个套路，我们用“def initial()”表示我们要创造一个名字叫“initial"的新套路（第9行）。然后把套路的具体过程放在其下方，并且套路里面的代码（第10行到第17行）的左端要比套路定义行（第9行）往右平移一段距离，以区分套路以外的代码。  
<iframe src="https://trinket.io/embed/python/0c7966eece" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
**你的挑战是，补全套路”initial"（第9行到第17行），让海龟爬到屏幕的下方中央的位置。**  
**你要做的是：在第13行输入代码”left(90)“。在第15行输入代码”backward(100)“。**  
**注意，每行代码的左端要和前后行对齐。**  
手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。  
  
#### 挑战 3 答案
以下是挑战3的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。  
<iframe src="https://trinket.io/embed/python/1480402d5b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 4 画一个Y字形的树杈
接下来我们就要正式开始画树了，树虽然有很多的枝杈，但是所有的枝杈都是由Y字形的树杈构成的。  
因此我们要先创造一个画Y字形树杈的基本套路，在下面程序的第8行，我们定义了这个套路并取名叫“drawTree”。第9行到第29行，我们描述了这个套路的具体内容，先画出主干，再画左侧树枝，最后画右侧树枝。  
<iframe src="https://trinket.io/embed/python/89cc28a8fd" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
**你的挑战是，补全套路“drawTree”（第8行到第29行），画出一个Y字形的树杈。**   
**你要做的是：在第20行输入代码”right(40)“， 在第22行输入代码”forward(60)“， 在第24行输入代码”backward(60)“。**  
**注意，每行代码的左端要和前后行对齐。**  
手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。  
  
#### 挑战 4 答案
以下是挑战4的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。  
<iframe src="https://trinket.io/embed/python/7be668702c" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑战 5 画一个有5层树杈的树
有了挑战4中画Y字形树杈套路”drawTree“，我们就可以不断的重复利用”drawTree“，画出更复杂更真实的树了。  
下面程序中第8行到第26行，就是更加成熟完整的”drawTree“套路。  
<iframe src="https://trinket.io/embed/python/5ea3a3bbb1" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
**你的挑战是，补全新套路“drawTree”（第8行到第26行），画出一个有5层树杈的树。**  
**你要做的是：在第21行输入代码”right(40)“， 在第22行输入代码”drawTree(level - 1)“。**  
**注意，每行代码的左端要和前后行对齐。**  
手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。
  
#### 挑战 5 答案
以下是挑战5的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。  
<iframe src="https://trinket.io/embed/python/3016dbd1b3" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑战 6 设计一颗自己的树
挑战5中，我们成功的画出了，有5层树杈的更复杂的树。为了画出更多变化的树，我们在程序中加了更多的变量，包括：树枝的级数，树枝的角度，树干的长度等。  
我们修改下面程序中的第47行到第55行，就可以设定树的各种变量，从而画出各种不同的树。  
<iframe src="https://trinket.io/embed/python/bdc74ba293" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
**你的挑战是，修改变量设定（第47行到第55行），画出一个你最喜欢的树。**  
**你要做的是，修改level, ratio, theta1, theta2，length的数值。**  
比如，level可以从5改为6或者7， ratio值可以从1.0改成0.8或1.1， theta1和theta2的值可以从20和20改成10和60或40和40，等等。
注意，手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。  

[查看下载所有python源代码](https://github.com/zhazhijibaba/zhazhijibaba_programming_lessons/tree/master/programming_lesson1)

#### [Go back to lesson list](../programming.html)
