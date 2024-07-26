# GitHub部署
1. 没有GitHub的注册一个账户，在GitHub上新建一个自己的仓库，起一个仓库名称，直接创建
![An image](/VitePress/6.png)  
2. 在项目中的<code>.vitepress/config.mjs</code>中配置<code>base</code>
````js
export default defineConfig({
    base:'/demo/',//demo为仓库名
})
````
3. 在项目根目录打开终端输入以下命令初始化git仓库
````
git init
````
4. 设置一下提交的用户名称和邮箱
````
git config --global user.name "your name"
````
````
git config --global user.email "your email"
````
5. 提交的文件，.为当前目录全部文件提交，.可以替换为文件名
````
git add .
````
6. 创建第一次提交
````
git commit -m "first commit"
````
7. 添加远程仓库地址到本地  
- 删除现有仓库
````
git remote rm origin
````
::: warning 注意
之前有添加过仓库的，与现在仓库不同的需要执行<code>删除现有仓库</code>
:::
- 添加自己的远程仓库  

![An image](/VitePress/7.png)
````
git remote add origin https://github.com/mrike3/demo.git
````
8. 关闭 Git 对 HTTP/HTTPS 连接的 SSL 验证
````
git config --global http.sslVerify false
````
9. 推送项目到github
````
git push -u origin master
````
::: warning 提交出现这种情况
To https://github.com/mrike3/demo.git
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/mrike3/demo.git'  
hint: Updates were rejected because the remote contains work that you do not  
hint: have locally. This is usually caused by another repository pushing to  
hint: the same ref. If you want to integrate the remote changes, use  
hint: 'git pull' before pushing again.  
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
:::
可以使用强行提交
````
git push -f origin master:master
````
10. 打开 Git 对 HTTP/HTTPS 连接的 SSL 验证
````
git config --global http.sslVerify true
````