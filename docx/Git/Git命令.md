# Git命令

## 初始化本地仓库
```shell
git init
```
## 添加文件到暂存区
```shell
git add <文件名>
```
```shell
#全部文件
git add .
```
## 清除git暂存区(git add .)
```shell
git reset
```
## 显示当前分支
```shell
git branch
```
## 创建分支
```shell
git branch <分支名>
```
## 切换分支
```shell
git checkout <分支名>
```
## 合并分支
```shell
git merge <分支名>
```
## 删除分支
```shell
git branch -d <分支名>
```
## 创建提交
```shell
git commit -m "提交信息"
```

## 删除现有仓库
```shell
git remote rm origin
```

## 查看远程仓库
```shell
git remote -v
```


## 增加远程仓库
```shell
git remote add origin <远程仓库地址>
```
## 取消http、https代理
```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 推送到远程仓库
```shell
git push -u origin master
```
## 强行推送到远程仓库
```shell
git push -f origin master:master
```


## 关闭 Git 对 HTTP/HTTPS 连接的 SSL 验证
```shell
git config --global http.sslVerify false
```
