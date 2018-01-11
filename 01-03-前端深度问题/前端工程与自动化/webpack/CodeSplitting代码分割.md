https://doc.webpack-china.org/guides/code-splitting

三种常用的代码分离方法
1.入口起点：使用entry选项手动分离代码
缺点：
不同的chunk会包含同一个重复的模块
不灵活，无法动态分割核心应用逻辑
2.防止重复：使用CommonsChunkPlugin去重和分离chunk（借助webpack运行时manifest）
相应的插件和loader
ExtractTextPlugin
bundle-loader 用来分割代码，懒加载分割后的代码
promise-loader 类似于bundle-loader
3.动态导入：通过模块的内联函数调用来分离代码(借助模块化运行时)


Webpack 大法之 Code Splitting
https://zhuanlan.zhihu.com/p/26710831
