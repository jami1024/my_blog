---
layout: Post
title: ansibleHost转换为json
subtitle: ansibleHost转换为json
author: jami1024
date: 2023-04-23
useHeaderImage: true
headerImage: /img/in-post/2021-12-25/header.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: false
tags:
  - 工作
  - 脚本
---

> 帮 DBA 大佬把数据库注册到 Consul 时,DBA 只提供了用于部署时的 ansible 主机文件,处理其他特别不方便,特意写了以下脚本转换为 json 格式

转换前内容

```ini
[primary]
192.168.1.1 mysql_port=3306 exporter_port=9124     mysql_host=192.168.1.2
[secondary]
192.168.1.1 mysql_port=3306 exporter_port=9129    mysql_host=192.168.1.3
```

转换后内容

```json
{
  "primary": [
    {
      "mysql_port": "3306",
      "exporter_port": "9124",
      "mysql_host": "192.168.1.2",
      "ip": "192.168.1.1"
    }
  ],
  "secondary": [
    {
      "mysql_port": "3306",
      "exporter_port": "9129",
      "mysql_host": "192.168.1.3",
      "ip": "192.168.1.1"
    }
  ]
}
```

脚本如下

```python
config = """[primary]
192.168.1.1 mysql_port=3306 exporter_port=9124     mysql_host=192.168.1.2
[secondary]
192.168.1.1 mysql_port=3306 exporter_port=9129    mysql_host=192.168.1.3"""

result = {}
for line in config.splitlines():
    line = line.strip()
    if not line or line.startswith("#"):
        continue
    if line.startswith("["):
        group = line[1:-1]
        result[group] = []
    else:
        parts = line.split()
        ip = parts[0]
        items = {}
        for item in parts[1:]:
            key, value = item.split("=")
            items[key] = value
        items["ip"] = ip
        result[group].append(items)
print(result)
```
