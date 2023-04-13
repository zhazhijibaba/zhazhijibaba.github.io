---
layout: page
title: Programming Lesson 2 Euler's identity, pi and e
description: calculating pi and e in Euler's identity
---
欧拉恒等式（Euler's Identity）被称为世界上最美公式。  
<img src="https://camo.githubusercontent.com/8c5ef6305f4eae9b5385c99daae0e8f894d72936/68747470733a2f2f6c617465782e636f6465636f67732e636f6d2f7376672e6c617465783f5c4c617267652673706163653b655e7b695c70697d2b313d30">  
它最美的地方在于只用一个最简单方程式就链接了5个最基础的数学常数。  
下面我们就一起编程来计算圆周率和自然常数吧。

### 编程计算圆周率
<img src="https://github.com/zhazhijibaba/zhazhijibaba_programming_lessons/blob/master/programming_lesson2/mc_pi.gif?raw=true" width="250">  
如上图所示，如果我们随机的在一个正方形内取很多点，一部分点会落在圆内（红色）。如果正方形的边长是2，那么正方形的面积=2X2=4；圆的半径是1，根据圆形面积公式，圆形的面积=。由于红色点的个数比上所有点的个数=圆形的面积比上正方形的面积=/4，因此的数值是4倍的红色点的个数比上所有点的个数。  
<iframe src="https://trinket.io/embed/python/be790901b9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
  
**挑战一，改变程序中控制采样次数的参数N**  
请点击对话框顶端的:arrow_forward:按钮查看运行结果。  
在网上可以找到pi的精确数  
比如pi=3.1415926535897932384626433  
修改程序中的N的数值，比较N=10, N=1000, N=100000时得到的pi的计算值的误差。  
如果用更大的N，是否可以得到更加精确的pi值呢？  
手机用户请点击:pencil:对程序进行修改。  
      

### 编程计算自然常数
<img src="https://camo.githubusercontent.com/fb5a457c9ce4f4d2d92804c936b6cb4735a99029/68747470733a2f2f6c617465782e636f6465636f67732e636f6d2f7376672e6c617465783f5c4c617267652673706163653b653d5c667261637b317d7b30217d2b5c667261637b317d7b31217d2b5c667261637b317d7b32217d2b5c667261637b317d7b33217d2b5c667261637b317d7b34217d2b5c646f7473" width="250">   
  
<iframe src="https://trinket.io/embed/python/9d621cac46" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>  
  
**挑战二，改变程序中控制采样次数的参数N**  
请点击对话框顶端的:arrow_forward:按钮查看运行结果。  
在网上可以找到e的精确数值  
比如e=2.71828182845904523536028747135266249775724709369995  
修改程序中的N的数值，比较N=5, N=10, N=100时得到的e的计算值的误差。  
如果用更大的N，是否可以得到更加精确的e值呢？  
手机用户请点击:pencil:对程序进行修改。  

### 思考题  
  
**第一，可不可以对挑战一的代码进行优化，使其运行得更快，从而可以对更多的点进行采样从而得到更高的精度。**  
  
**第二，试着运用数学知识来计算圆周率（例如Nilakantha series），并且得到更多的位数（超过计算机数值存储的位数限制）。**   
  
**第三，对挑战二的代码进行优化，使其超过计算机数值存储的位数限制，从而得到小数点后更多位数的e（比如50位小数）。**  

#### 思考题答案请点击进入下面源代码链接
[查看下载所有python源代码](https://github.com/zhazhijibaba/zhazhijibaba_programming_lessons/tree/master/programming_lesson2)

#### [Go back to lesson list](../programming.html)
