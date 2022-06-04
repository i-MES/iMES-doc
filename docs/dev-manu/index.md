---
sidebar_position: 1
---

# iMES 开发手册

iMES: intelligent Manufacturing Execution System

## 模块分解

![](@site/static/img/design.spec/logic.view.svg)

- iMES-APP：运行在测试机或被测物上的跨平台的 APP，基于 Wails 框架，ts/go 开发。同时提供共用测试组件。
- iMES-SaaS：可以私有化部署的 SaaS 服务，基于 Midway 框架，ts 开发。
- iMES 不开发与被测产品紧密耦合的测试项，这部分功能由用户自己开发，并挂载到 iMES-APP 上。