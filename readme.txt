有时候我们的美工妹妹会用一些脑洞大开的工具，

从而产生出如 #333333 alpha 0.5 的颜色值

跟随美工妹妹的脑洞，设置字体的alpha值，
会让程序效率会降低，背景变化引起意想不到的问题，

此插件可以无损计算有透明度文字堆叠在白色背景上真实字体颜色

原理：
foreground * alpha + background * (1-alpha)


注意：计算的背景色永远为白色，即使用#FFFFFF来当做背景值