查看tag下的文件
想看之前某个标签状态下的文件，可以这样操作：
1.git tag 查看当前分支下的标签
2.git checkout v0.21 此时会指向打v0.21标签时的代码状态，（但现在处于一个空的分支上）
3. cat test.txt 查看某个文件