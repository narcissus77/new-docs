
# 关于电池的指令

TOOD：补充截图

## 玩家指令

- `/coins detail` 查询自己的电池变动明细（可查剩余电池），可以点击翻页
![](./picture/coins2.jpg)
- `/coins query` 查询自己的剩余电池，以及平均玩家电池数量，自己在排行榜上的排名
![](./picture/coins3.jpg)
- `/coins top` 查询电池排行榜
![](./picture/coins4.jpg)
- `/coins buy <商品名称>` 用电池购买指定的商品（服务器出售）
![](./picture/coins1.jpg)
- ~~`/coins confirm` 确认操作（不用，可以在聊天栏点击确认）~~

- ~~`/coins cancel` 取消操作（不用，可以在聊天栏点击取消）~~

## 管理员指令

- `/coins reward <玩家名或UUID> <电池> <备注>...` 给指定玩家发电池奖励

- `/coins punish <玩家名或UUID> <电池> <理由>...` 扣除指定玩家电池作为罚款

- `/coins reload` 重载配置文件