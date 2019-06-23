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
第4行是引入画图工具turtle, 第7行是让海龟向前走100个像素，第9行是让海龟向左转90度，第11行是让海龟再向前走100个像素  
你的挑战是，给这个程序加上几行代码，重复画直角的过程数次，画出一个正方形。  
注意，你加入的代码要从12行开始写起。手机用户请点击:pencil:对程序进行修改。  

#### 挑战 1 答案
以下是挑战1的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。
<iframe src="https://trinket.io/embed/python/d35a31bb10" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 2 画一个完美五角星
既然我们学会了画正方形，那么我们可不可以调整折线的角度，来画一个完美的五角星呢？
<iframe src="https://trinket.io/embed/python/2ff1835bab" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
你的挑战是，请补全上面的程序，画出一个完整的五角星。  
提示，五角星的每个角是36度，所以在每个角处，海龟要转向180-36=144度。  
注意，你加入的代码要从14行开始写起。手机用户请点击:pencil:对程序进行修改。点击上面对话框顶端的:arrow_forward:按钮进行测试。 
  
#### 挑战 2 答案
以下是挑战2的答案，请点击下面对话框顶端的:arrow_forward:按钮查看运行结果。
<iframe src="https://trinket.io/embed/python/7b3a5900ce" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 3 让海龟爬到指定位置
函数就是把一些可以重复利用的东西放在一起，并一起使用。  
函数可以重复利用。用了函数，就不用每次都重复写相同的东西了。  
在下面的程序中，找到“def initial():", 并补全“initial()”函数，让海龟爬到屏幕的下方中央的位置。    
需要补全的部分是：
```python
    # 向左转90度
    
    # 向后退100个像素
    
```
在空白处，先加入代码”left(90)“向左转90度。然后加入代码”backward(100)“后退100。  
点击下面对话框顶端的:arrow_forward:按钮进行测试。  
手机用户请点击:pencil:对程序进行修改。
<iframe src="https://trinket.io/embed/python/0c7966eece" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
#### 挑战 3 答案
请点击下面对话框顶端的:arrow_forward:按钮进看答案。
<iframe src="https://trinket.io/embed/python/1480402d5b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
### 挑战 4 画一个Y字形的树杈
在下面的程序中，找到“def drawTree():", 并补全“drawTree()”函数，画一个Y字形的树杈。需要补全的部分是  
```python
    # 调整右侧树干的角度，向右40度
    
    # 然后再画右边的树枝,长60
    
    # 退回主树干
    
```
<iframe src="https://trinket.io/embed/python/89cc28a8fd" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
#### 挑战 4 答案
请点击下面对话框顶端的:arrow_forward:按钮进看答案。
<iframe src="https://trinket.io/embed/python/7be668702c" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑战 5 画一个有5层树杈的树
在下面的程序中，找到“def drawTree():", 并补全“drawTree()”函数，画一个5级树杈的树。  
需要补全的部分是：
```python
    # 再画右边的下一层的树枝
    
```
在空白处，先加入代码”right(40)“向右转40度。再加入代码”drawTree(level - 1)”画下一层树枝。
<iframe src="https://trinket.io/embed/python/5ea3a3bbb1" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
#### 挑战 5 答案
请点击下面对话框顶端的:arrow_forward:按钮进看答案。
<iframe src="https://trinket.io/embed/python/3016dbd1b3" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑战 6 设计一颗自己的树
修改下面代码的参数，画出不同类型的树。你能画出一颗你最喜欢的树吗？  
参数包括：树枝的角度，树干的长度，树枝的级数等。  
需要修改的部分是：
```python
# 树干的层数
level = 5
# 树干的长度
length = 15
# 每层树干的长度比例
ratio = 0.8
# 左侧树枝的角度
theta1 = 20
# 右侧树枝的角度
theta2 = 20
```
请修改level, length, ratio, theta1, theta2的数值。
请点击下面对话框顶端的:arrow_forward:按钮进看答案。
<iframe src="https://trinket.io/embed/python/11c78675fd" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


#### [Go back to lesson list](programming.html)
