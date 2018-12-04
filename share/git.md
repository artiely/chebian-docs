# git 版本管理

[下载地址](http://git-scm.com)
## 配置 git 用户和邮箱

```sh
$ git config --global user.name "你的github用户名"
$ git config --global user.email "你的github邮箱"
# 不配置用户名和邮箱的话无法提交,因为git不知道你是谁
```

## 查看配置

```sh
$ git config --global user.name
$ git config --global user.email
```

## 查看所有配置

```
$ git config --list
```

# 工作流 
[参考](http://card.mugeda.com/campaigns/56d2c4a0a3664e3308000407/20160304090522/56d97729a3664e9c65000047/index.html)

## 工作区

通过 git add 添加到暂存区

```sh
  $ git add '文件名'
```

## 暂存区
特点:过渡的作用，避免误操作，保护工作区和历史区，分支处理;

通过 git commit 添加到历史区

```sh
  $ git commit -m"注释内容"
```

## 历史区

查看历史状态

```sh
  $ git log
```

修改时通过 git status 查看当前状态

```sh
7.git diff
```

不同区的代码比较

## 工作区和暂存区

```sh
$ git diff
```

## 暂存区和历史区

```sh
$ git diff --cached（--staged）
```

## 工作区和版本库

```sh
$ git diff master
```

## 撤销
撤销回 git add 的内容

```sh
git reset Head "文件名"
```

## 撤回文件
先从缓存区撤销,缓存区无内容，从历史区域撤销

```sh
$ git checkout "文件名"
#有的时候我们希望提交时合并到上一次的提交 git commit --amend
```

## 删除
删除暂存区和工作区
删除暂存区中的内容,并且保证工作区中的内容已经不存在

```sh
$ git rm "文件名"
```

若本地文件存在则不能删除，需要通过-f 参数删除

## 仅删除缓存区

```sh
$ git rm --cached "文件名"
```

## 恢复
 恢复某个版本文件

```sh
$ git checkout commit_id filename 某个文件
```

 通过版本 id 恢复

```sh
$ git reset --hard commit_id
```

 恢复未来
查看当时回滚时的版本

```sh
$ git reflog
```

 快速版本回退

```sh
$ git reset --hard HEAD^
$ git reset --hard HEAD~3
```

## 同步远程仓库 gitHub

注册账号
新建项目


添加远程仓库
```sh
$ git remote add origin "地址"
```
添加忽略文件
```sh
$ touch .gitignore
$ echo .DS_Store
$ echo node_modules
$ echo .idea
```
推送代码
```sh
$ git push origin master
```
查看
```sh
$ git remote 查看名字
$ git remote -v 查看地址
```
# 代码的合并
```sh
$ git fetch
```

拉取过来手动合并

```sh
$ git diff master origin/master
$ git merge origin/master
```

拉取并合并

```sh
git pull
```

# 分支

```sh
git branch
git branch 创建分支
git checkout a
git checkout -b c切换分支
#在master  git merge
git checkout b
git branch --merged 合并了哪些分支
git branch --no-merged 合并了哪些分支
git branch -d a 删除分支
git branch -D a 删除分支
```

14. tag 版本

```
git tag v1.0
```

# Git 无法检测到文件名大小写的更改

```sh
git config core.ignorecase false
# 关闭git忽略大小写配置，即可检测到大小写名称更改。
```

# sourcetreeapp  
[下载](https://www.sourcetreeapp.com/)
