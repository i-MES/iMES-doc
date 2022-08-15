---
title: 原理与开发
sidebar_position: 40
---

## 模块分解

![](@site/static/img/design.spec/logic.view.svg)

- iMES-APP：运行在测试机或被测物上的跨平台的 APP，基于 Wails 框架，ts/go 开发。同时提供共用测试组件。
- iMES-SaaS：可以私有化部署的 SaaS 服务，基于 Midway 框架，ts 开发。
- iMES 不开发与被测产品紧密耦合的测试项，这部分功能由用户自己开发，并挂载到 iMES-APP 上。

## config 数据

根据用途分 2 种

1. settings: 控制程序运行的配置数据，清空对 app 运行会有一定、甚至深刻影响
2. cache: 缓存类，用户可以随时清空，对 app 运行没有影响

根据用户分 2 种

1. app data：iMES-app 使用的数据
2. user data: 用户生成、使用的数据

|          | app data                  | user data                                              |
| -------- | ------------------------- | ------------------------------------------------------ |
| Settings | 随 app 自带，用户不能修改 | 用户修改的 Setting，主要包括 app 中 setting 页面中内容 |
| Cache    | APP 运行态生成的缓存数据  | 用户生成、使用的数据，如：testgroup、log...            |
