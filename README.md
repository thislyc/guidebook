# guidebook
个人接单 ps：甲方不要了 截图在doc 费用非常少 甲方无理取闹改这改那简直无语 直接开源

大概说明一下 

列表页面：每次小程序启动都会先去看缓存里面有没有数据 如果没有第一次才回去请求接口 如果有，第一次就不会请求接口而是直接拿缓存中的数据，然后提示用户去下拉刷新重新获取新的数据 （甲方要在用户没有网络的情况下依然可以良好的体验小程序 简直是无语）

详情页面：有吸顶，文字折叠等实现 也是可以参考一下的
<a href="https://gitee.com/thislyc/guidebook">gitee加速仓库</a>

<p align="center">
  <img src="https://img.shields.io/github/license/balancemymoney/balance-open.svg?style=flat-square"/>
</p>

![首页](./doc/1.png)

![首页](./doc/2.png)

![首页](./doc/3.png)

![首页](./doc/4.png)

![首页](./doc/5.mp4)


## 接口文档

地址：/api/v1/trips/{id}.json

参数：无

请求方式：POST

响应内容：

|字段|值类型|允许为空|说明|
|-|-|-|-|
|id|整型|否|路书ID|
|pictures|数组|否|封面图片|
|pictures_count|整型|否|相册图片数量|
|title|字符串|否|路书标题|
|themes|数组|否|路书主题标签|
|visits_count|整型|否|访问数|
|days|整型|否|天数|
|distance|整型|否|行驶里程|
|destinations|数组|否|目的地|
|unit_price|字符串|否|参考费用|
|routes|数组|否|行程|
|introduce|哈希|否|介绍|
|budget|哈希|否|预算|

```
{
    "trip": {
        "id": 1,
        "pictures": [],
        "pictures_count": 0,
        "title": "稻城亚丁色达7天6晚",
        "themes": [
            "越野"
        ],
        "visits_count": 0,
        "days": 7,
        "distance": "2139 公里",
        "destinations": [
            "香格里拉镇",
            "色达县",
            "稻城县",
            "新都桥镇",
            "古尔沟镇"
        ],
        "unit_price": "266 元/人",
        "routes": [
            {
                "day": 1,
                "departure": "成都市",
                "arrival": "新都桥镇",
                "distance": "375 公里",
                "duration": "6 小时 23 分钟",
                "waypoints": [
                    {
                        "time": "08:00",
                        "name": "东站西广场",
                        "category": "普通",
                        "longitude": "104.1369249337",
                        "latitude": "30.630461077926",
                        "distance": "375 公里",
                        "duration": "6 小时 23 分钟",
                        "nearby": []
                    },
                    {
                        "time": "11:45",
                        "name": "泸定桥",
                        "category": "景点",
                        "longitude": "102.23244406725",
                        "latitude": "29.911798461849",
                        "distance": "249 公里",
                        "duration": "3 小时 36 分钟",
                        "nearby": []
                    },
                    {
                        "time": "14:45",
                        "name": "折多山观雪台",
                        "category": "景点",
                        "longitude": "101.80599067684",
                        "latitude": "30.071830768815",
                        "distance": "84 公里",
                        "duration": "1 小时 51 分钟",
                        "nearby": []
                    },
                    {
                        "time": "16:45",
                        "name": "摄影天堂大酒店",
                        "category": "住宿",
                        "longitude": "101.48414208528",
                        "latitude": "30.051581645379",
                        "distance": "43 公里",
                        "duration": "55 分钟",
                        "nearby": []
                    }
                ]
            },
            {
                "day": 2,
                "departure": "新都桥镇",
                "arrival": "香格里拉镇",
                "distance": "415 公里",
                "duration": "7 小时 32 分钟",
                "waypoints": [
                    {
                        "time": "08:00",
                        "name": "摄影天堂大酒店",
                        "category": "住宿",
                        "longitude": "101.48414208528",
                        "latitude": "30.051581645379",
                        "distance": "415 公里",
                        "duration": "7 小时 32 分钟",
                        "nearby": []
                    },
                    {
                        "time": "10:00",
                        "name": "天路十八弯观景台",
                        "category": "景点",
                        "longitude": "100.87479545448",
                        "latitude": "29.996981705988",
                        "distance": "88 公里",
                        "duration": "1 小时 49 分钟",
                        "nearby": []
                    },
                    {
                        "time": "11:00",
                        "name": "熊宗卡观景台",
                        "category": "景点",
                        "longitude": "100.8158851673",
                        "latitude": "30.030262802725",
                        "distance": "12 公里",
                        "duration": "17 分钟",
                        "nearby": []
                    },
                    {
                        "time": "12:15",
                        "name": "卡子拉山观景台",
                        "category": "景点",
                        "longitude": "100.64929065823",
                        "latitude": "30.14456395856",
                        "distance": "38 公里",
                        "duration": "42 分钟",
                        "nearby": []
                    },
                    {
                        "time": "15:30",
                        "name": "海子山景区",
                        "category": "景点",
                        "longitude": "100.17486992966",
                        "latitude": "29.423680054428",
                        "distance": "145 公里",
                        "duration": "2 小时 31 分钟",
                        "nearby": []
                    },
                    {
                        "time": "17:30",
                        "name": "尊胜塔林",
                        "category": "景点",
                        "longitude": "100.29819278386",
                        "latitude": "29.046920416349",
                        "distance": "58 公里",
                        "duration": "51 分钟",
                        "nearby": []
                    },
                    {
                        "time": "19:30",
                        "name": "时代亚丁大酒店",
                        "category": "住宿",
                        "longitude": "100.35008182218",
                        "latitude": "28.564159355833",
                        "distance": "76 公里",
                        "duration": "1 小时 20 分钟",
                        "nearby": []
                    }
                ]
            },
            {
                "day": 3,
                "departure": "香格里拉镇",
                "arrival": "香格里拉镇",
                "distance": "14 公里",
                "duration": "30 分钟",
                "waypoints": [
                    {
                        "time": "08:00",
                        "name": "时代亚丁大酒店",
                        "category": "住宿",
                        "longitude": "100.35008182218",
                        "latitude": "28.564159355833",
                        "distance": "14 公里",
                        "duration": "30 分钟",
                        "nearby": []
                    },
                    {
                        "time": "08:15",
                        "name": "稻城亚丁景区",
                        "category": "景点",
                        "longitude": "100.31640582352",
                        "latitude": "28.536535329196",
                        "distance": "7 公里",
                        "duration": "14 分钟",
                        "nearby": []
                    },
                    {
                        "time": "16:45",
                        "name": "时代亚丁大酒店",
                        "category": "住宿",
                        "longitude": "100.35008182218",
                        "latitude": "28.564159355833",
                        "distance": "8 公里",
                        "duration": "15 分钟",
                        "nearby": []
                    }
                ]
            },
            {
                "day": 4,
                "departure": "香格里拉镇",
                "arrival": "稻城县",
                "distance": "87 公里",
                "duration": "1 小时 47 分钟",
                "waypoints": [
                    {
                        "time": "08:00",
                        "name": "时代亚丁大酒店",
                        "category": "住宿",
                        "longitude": "100.35008182218",
                        "latitude": "28.564159355833",
                        "distance": "87 公里",
                        "duration": "1 小时 47 分钟",
                        "nearby": []
                    },
                    {
                        "time": "08:15",
                        "name": "稻城亚丁景区",
                        "category": "景点",
                        "longitude": "100.31640582352",
                        "latitude": "28.536535329196",
                        "distance": "7 公里",
                        "duration": "14 分钟",
                        "nearby": []
                    },
                    {
                        "time": "15:00",
                        "name": "圣地映像酒店",
                        "category": "住宿",
                        "longitude": "100.29364529274",
                        "latitude": "29.035151070809",
                        "distance": "80 公里",
                        "duration": "1 小时 32 分钟",
                        "nearby": []
                    }
                ]
            },
            {
                "day": 5,
                "departure": "稻城县",
                "arrival": "色达县",
                "distance": "595 公里",
                "duration": "11 小时 6 分钟",
                "waypoints": [
                    {
                        "time": "07:00",
                        "name": "圣地映像酒店",
                        "category": "住宿",
                        "longitude": "100.29364529274",
                        "latitude": "29.035151070809",
                        "distance": "595 公里",
                        "duration": "11 小时 6 分钟",
                        "nearby": []
                    },
                    {
                        "time": "12:15",
                        "name": "措卡湖",
                        "category": "景点",
                        "longitude": "100.13317609899",
                        "latitude": "30.732276444822",
                        "distance": "278 公里",
                        "duration": "5 小时 11 分钟",
                        "nearby": []
                    },
                    {
                        "time": "19:00",
                        "name": "喇荣五明佛学院",
                        "category": "景点",
                        "longitude": "100.4524762177",
                        "latitude": "32.134901106378",
                        "distance": "298 公里",
                        "duration": "5 小时 33 分钟",
                        "nearby": [
                            {
                                "id": 15,
                                "name": "色达天葬台",
                                "address": "",
                                "description": "当地人为死者举行天葬的地方，亲临现场感受那份虔诚。建议戴上口罩和雨衣。",
                                "longitude": "100.44940210339",
                                "latitude": "32.141351224192",
                                "category": "景点",
                                "extras": [],
                                "destiantion": "色达县",
                                "pictures": [],
                                "pictures_count": 0
                            }
                        ]
                    },
                    {
                        "time": "21:30",
                        "name": "色曲河大酒店",
                        "category": "住宿",
                        "longitude": "100.34514405389",
                        "latitude": "32.262950277839",
                        "distance": "19 公里",
                        "duration": "21 分钟",
                        "nearby": []
                    }
                ]
            },
            {
                "day": 6,
                "departure": "色达县",
                "arrival": "古尔沟镇",
                "distance": "379 公里",
                "duration": "6 小时 16 分钟",
                "waypoints": [
                    {
                        "time": "09:00",
                        "name": "色曲河大酒店",
                        "category": "住宿",
                        "longitude": "100.34514405389",
                        "latitude": "32.262950277839",
                        "distance": "379 公里",
                        "duration": "6 小时 16 分钟",
                        "nearby": []
                    },
                    {
                        "time": "09:15",
                        "name": "药王山野生旱獭生息园",
                        "category": "景点",
                        "longitude": "100.41875485158",
                        "latitude": "32.181938361595",
                        "distance": "12 公里",
                        "duration": "12 分钟",
                        "nearby": []
                    },
                    {
                        "time": "11:30",
                        "name": "色达天葬台",
                        "category": "景点",
                        "longitude": "100.44940210339",
                        "latitude": "32.141351224192",
                        "distance": "8 公里",
                        "duration": "11 分钟",
                        "nearby": [
                            {
                                "id": 12,
                                "name": "喇荣五明佛学院",
                                "address": "",
                                "description": "全世界最大的佛学院，可以观赏数万僧红顶房密布山坡的奇观。在这成片的红色房子间，感受那份震撼，感受僧人的那份虔诚。",
                                "longitude": "100.4524762177",
                                "latitude": "32.134901106378",
                                "category": "景点",
                                "extras": [],
                                "destiantion": "洛若镇",
                                "pictures": [],
                                "pictures_count": 0
                            }
                        ]
                    },
                    {
                        "time": "19:30",
                        "name": "源泉酒店",
                        "category": "住宿",
                        "longitude": "102.97843350159",
                        "latitude": "31.496271275582",
                        "distance": "360 公里",
                        "duration": "5 小时 52 分钟",
                        "nearby": [
                            {
                                "id": 58,
                                "name": "华美达温泉度假酒店",
                                "address": "",
                                "description": "",
                                "longitude": "102.99423689124",
                                "latitude": "31.51983081356",
                                "category": "住宿",
                                "extras": [],
                                "destiantion": "古尔沟镇",
                                "pictures": [],
                                "pictures_count": 0
                            }
                        ]
                    }
                ]
            },
            {
                "day": 7,
                "departure": "古尔沟镇",
                "arrival": "成都市",
                "distance": "276 公里",
                "duration": "4 小时 20 分钟",
                "waypoints": [
                    {
                        "time": "08:00",
                        "name": "源泉酒店",
                        "category": "住宿",
                        "longitude": "102.97843350159",
                        "latitude": "31.496271275582",
                        "distance": "276 公里",
                        "duration": "4 小时 20 分钟",
                        "nearby": [
                            {
                                "id": 58,
                                "name": "华美达温泉度假酒店",
                                "address": "",
                                "description": "",
                                "longitude": "102.99423689124",
                                "latitude": "31.51983081356",
                                "category": "住宿",
                                "extras": [],
                                "destiantion": "古尔沟镇",
                                "pictures": [],
                                "pictures_count": 0
                            }
                        ]
                    },
                    {
                        "time": "08:30",
                        "name": "毕棚沟景区",
                        "category": "景点",
                        "longitude": "102.99205406317",
                        "latitude": "31.416205804996",
                        "distance": "25 公里",
                        "duration": "28 分钟",
                        "nearby": []
                    },
                    {
                        "time": "15:15",
                        "name": "映秀震中遗址",
                        "category": "景点",
                        "longitude": "103.48732989415",
                        "latitude": "31.054477422784",
                        "distance": "131 公里",
                        "duration": "1 小时 43 分钟",
                        "nearby": []
                    },
                    {
                        "time": "19:30",
                        "name": "东站西广场",
                        "category": "普通",
                        "longitude": "104.1369249337",
                        "latitude": "30.630461077926",
                        "distance": "122 公里",
                        "duration": "2 小时 9 分钟",
                        "nearby": []
                    }
                ]
            }
        ],
        "introduce": {
            "description": "川西大环线，走进蓝色星球上最后一片净土稻城亚丁，探访色达网红红顶木屋，观礼天葬，趣逗土拨鼠。",
            "extras": [
                {
                    "title": "最佳旅行时间",
                    "content": "9-10月"
                }
            ],
            "daily": [
                {
                    "day": 1,
                    "places": [
                        {
                            "id": 2,
                            "name": "泸定桥",
                            "address": "",
                            "description": "康熙御笔题写\"泸定桥\"，并立御碑于桥头，两岸桥头堡为木结构古建筑，风貌独特系国内独有。中国工农红军在长征途中“飞夺泸定桥”，使之成为重要的历史纪念地。",
                            "longitude": "102.23244406725",
                            "latitude": "29.911798461849",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "泸定县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 3,
                            "name": "折多山观雪台",
                            "address": "",
                            "description": "海拔 4298 米，被誉为“康巴第一关”，藏民在这里修了白塔、挂了很多经幡，与四周的雪山美景相得益彰。",
                            "longitude": "101.80599067684",
                            "latitude": "30.071830768815",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "康定市",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 4,
                            "name": "摄影天堂大酒店",
                            "address": "",
                            "description": "",
                            "longitude": "101.48414208528",
                            "latitude": "30.051581645379",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "新都桥镇",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 2,
                    "places": [
                        {
                            "id": 5,
                            "name": "天路十八弯观景台",
                            "address": "",
                            "description": "站在位于半山腰的观景台俯瞰，曲折的胳膊肘弯，有一种震撼的曲线美！",
                            "longitude": "100.87479545448",
                            "latitude": "29.996981705988",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "雅江县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 6,
                            "name": "熊宗卡观景台",
                            "address": "",
                            "description": "位于国道 318 线上的一个观景台。海拔高度 4281 米，这里是观看四周山脉、草原的最佳地点。",
                            "longitude": "100.8158851673",
                            "latitude": "30.030262802725",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "理塘县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 33,
                            "name": "卡子拉山观景台",
                            "address": "",
                            "description": "位于理塘县和雅江县的分界处，海拔 4718 米，被誉为“云中牧场”的卡子拉山非常平缓，高山草甸常常笼罩在云雾之中，吸引许多游客驻足游玩。",
                            "longitude": "100.64929065823",
                            "latitude": "30.14456395856",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "理塘县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 7,
                            "name": "海子山景区",
                            "address": "",
                            "description": "位于稻城县北部高原区，面积 3287 平方公里，平均海拔 4500 米，是青藏高原最大的古冰体遗址，被称“稻城古冰帽”。大大小小的砾石构成的石河、石海以及形态各异的冰蚀湖，构成海子山最独特的景观。",
                            "longitude": "100.17486992966",
                            "latitude": "29.423680054428",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "稻城县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 8,
                            "name": "尊胜塔林",
                            "address": "",
                            "description": "康南地区唯一的公园，也是世界唯一的以白塔为主题公园。",
                            "longitude": "100.29819278386",
                            "latitude": "29.046920416349",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "稻城县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 9,
                            "name": "时代亚丁大酒店",
                            "address": "",
                            "description": "",
                            "longitude": "100.35008182218",
                            "latitude": "28.564159355833",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "香格里拉镇",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 3,
                    "places": [
                        {
                            "id": 10,
                            "name": "稻城亚丁景区",
                            "address": "",
                            "description": "主要由“仙乃日、央迈勇、夏诺多吉”三座神山和周围的河流、湖泊和高山草甸组成。摄影爱好者的天堂，被誉为“水蓝色星球上的最后一片净土”。",
                            "longitude": "100.31640582352",
                            "latitude": "28.536535329196",
                            "category": "景点",
                            "extras": [
                                {
                                    "title": "电话",
                                    "content": "0836-6790661"
                                },
                                {
                                    "title": "时长",
                                    "content": "5-8小时"
                                }
                            ],
                            "destiantion": "香格里拉镇",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 9,
                            "name": "时代亚丁大酒店",
                            "address": "",
                            "description": "",
                            "longitude": "100.35008182218",
                            "latitude": "28.564159355833",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "香格里拉镇",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 4,
                    "places": [
                        {
                            "id": 10,
                            "name": "稻城亚丁景区",
                            "address": "",
                            "description": "主要由“仙乃日、央迈勇、夏诺多吉”三座神山和周围的河流、湖泊和高山草甸组成。摄影爱好者的天堂，被誉为“水蓝色星球上的最后一片净土”。",
                            "longitude": "100.31640582352",
                            "latitude": "28.536535329196",
                            "category": "景点",
                            "extras": [
                                {
                                    "title": "电话",
                                    "content": "0836-6790661"
                                },
                                {
                                    "title": "时长",
                                    "content": "5-8小时"
                                }
                            ],
                            "destiantion": "香格里拉镇",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 11,
                            "name": "圣地映像酒店",
                            "address": "",
                            "description": "",
                            "longitude": "100.29364529274",
                            "latitude": "29.035151070809",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "稻城县",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 5,
                    "places": [
                        {
                            "id": 19,
                            "name": "措卡湖",
                            "address": "",
                            "description": "当地称措卡海子，又称赞多措那玛，藏语意为乱石丛中的黑色海水，是一个淡水湖泊。因湖畔的数百年历史的措卡寺而得名，群山环绕中，湖虽不大，但是湖光山色与措卡寺相依相伴，湖里的鱼儿因为经常被僧人喂食，所以特别亲近人类。",
                            "longitude": "100.13317609899",
                            "latitude": "30.732276444822",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "新龙县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 12,
                            "name": "喇荣五明佛学院",
                            "address": "",
                            "description": "全世界最大的佛学院，可以观赏数万僧红顶房密布山坡的奇观。在这成片的红色房子间，感受那份震撼，感受僧人的那份虔诚。",
                            "longitude": "100.4524762177",
                            "latitude": "32.134901106378",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "洛若镇",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 13,
                            "name": "色曲河大酒店",
                            "address": "",
                            "description": "",
                            "longitude": "100.34514405389",
                            "latitude": "32.262950277839",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "色达县",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 6,
                    "places": [
                        {
                            "id": 14,
                            "name": "药王山野生旱獭生息园",
                            "address": "",
                            "description": "土拨鼠被色达当地藏民奉为“来自远古的精灵”，想要邂逅憨态可掬的远方精灵，最好的办法就是带点它们喜欢吃的去喂食。在玩耍过程中，请尽量保持一定距离，据科学分析，土拨鼠自身携带病菌。",
                            "longitude": "100.41875485158",
                            "latitude": "32.181938361595",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "色达县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 15,
                            "name": "色达天葬台",
                            "address": "",
                            "description": "当地人为死者举行天葬的地方，亲临现场感受那份虔诚。建议戴上口罩和雨衣。",
                            "longitude": "100.44940210339",
                            "latitude": "32.141351224192",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "色达县",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 16,
                            "name": "源泉酒店",
                            "address": "",
                            "description": "",
                            "longitude": "102.97843350159",
                            "latitude": "31.496271275582",
                            "category": "住宿",
                            "extras": [],
                            "destiantion": "古尔沟镇",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                },
                {
                    "day": 7,
                    "places": [
                        {
                            "id": 17,
                            "name": "毕棚沟景区",
                            "address": "",
                            "description": "被比作四姑娘山的美丽背影。这是个五彩斑斓的世界，浓绿的树，深红的叶，青青的湖，湛蓝的天，纯白的雪；这是个多姿多彩世界，险峻奇峰，一道冰川，人间寺庙。",
                            "longitude": "102.99205406317",
                            "latitude": "31.416205804996",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "朴头镇",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 18,
                            "name": "映秀震中遗址",
                            "address": "",
                            "description": "主要包括介绍地震的纪念馆和旋口中学地震遗址，遗迹只是经过对原来摧毁建筑的加固支撑，大多数情景都最大限度保留了原始状态。",
                            "longitude": "103.48732989415",
                            "latitude": "31.054477422784",
                            "category": "景点",
                            "extras": [],
                            "destiantion": "映秀镇",
                            "pictures": [],
                            "pictures_count": 0
                        },
                        {
                            "id": 1,
                            "name": "东站西广场",
                            "address": "",
                            "description": "",
                            "longitude": "104.1369249337",
                            "latitude": "30.630461077926",
                            "category": "普通",
                            "extras": [],
                            "destiantion": "成都市",
                            "pictures": [],
                            "pictures_count": 0
                        }
                    ]
                }
            ]
        },
        "budget": {
            "daily": [
                {
                    "day": 1,
                    "total_amount": 0,
                    "details": []
                },
                {
                    "day": 2,
                    "total_amount": 0,
                    "details": []
                },
                {
                    "day": 3,
                    "total_amount": 266,
                    "details": [
                        [
                            {
                                "id": 1,
                                "full_name": "稻城亚丁景区 / 景区门票",
                                "amount": 146,
                                "category": "门票"
                            },
                            {
                                "id": 2,
                                "full_name": "稻城亚丁景区 / 观光车票",
                                "amount": 120,
                                "category": "门票"
                            }
                        ]
                    ]
                },
                {
                    "day": 4,
                    "total_amount": 0,
                    "details": []
                },
                {
                    "day": 5,
                    "total_amount": 0,
                    "details": []
                },
                {
                    "day": 6,
                    "total_amount": 0,
                    "details": []
                },
                {
                    "day": 7,
                    "total_amount": 0,
                    "details": []
                }
            ],
            "other": {
                "total_amount": 0,
                "details": []
            }
        }
    }
}
```

地址：/api/v1/trips.json

参数：

|字段|值类型|默认值|允许为空|说明|
|-|-|-|-|-|
|departure_id|整型|3|是|出发地ID|
|place_keyword|字符串| |是|目的地关键词|
|theme_id|整型| |是|主题ID|
|day|整型| |是|行程天数|
|page|整型| |是|当前页数|
|page_size|整型| |是|每页显示记录数量|
|only_trip|布尔类型|false|是|仅输出路书列表|

请求方式：POST

响应内容：

```
{
    "info": {
        "startLocation": [
            {
                "id": 3,
                "name": "成都市"
            }
        ],
        "fenlei": [
            {
                "name": "行程天数",
                "key": "day",
                "chirdTabCur": 0,
                "chird": [
                    {
                        "id": 0,
                        "name": "不限"
                    },
                    {
                        "id": 3,
                        "name": "3天"
                    },
                    {
                        "id": 4,
                        "name": "4天"
                    },
                    {
                        "id": 5,
                        "name": "5天"
                    },
                    {
                        "id": 6,
                        "name": "6天"
                    },
                    {
                        "id": 7,
                        "name": "7天"
                    },
                    {
                        "id": 10,
                        "name": "10天"
                    }
                ]
            },
            {
                "name": "主题",
                "key": "theme_id",
                "chirdTabCur": 0,
                "chird": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 2,
                        "name": "世界遗产"
                    },
                    {
                        "id": 1,
                        "name": "越野"
                    },
                    {
                        "id": 3,
                        "name": "温泉"
                    }
                ]
            }
        ]
    },
    "list": [
        {
            "id": 8,
            "title": "四姑娘山毕棚沟华美达温泉3天2晚",
            "start": "成都市",
            "end": "四姑娘山镇",
            "day": 3,
            "km": 770,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 7,
            "title": "九寨沟黄龙四姑娘山卧龙镰刀坝6天5晚",
            "start": "成都市",
            "end": "漳扎镇",
            "day": 6,
            "km": 1267,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 6,
            "title": "川藏线稻城亚丁海螺沟10天9晚",
            "start": "成都市",
            "end": "拉萨市",
            "day": 10,
            "km": 2860,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 5,
            "title": "九寨沟黄龙都江堰3天2晚",
            "start": "成都市",
            "end": "漳扎镇",
            "day": 3,
            "km": 908,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 4,
            "title": "稻城亚丁墨石公园5天4晚",
            "start": "成都市",
            "end": "香格里拉镇",
            "day": 5,
            "km": 1689,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 3,
            "title": "九寨沟黄龙都江堰达古冰川4天3晚",
            "start": "成都市",
            "end": "漳扎镇",
            "day": 4,
            "km": 1112,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 2,
            "title": "九寨沟黄龙四姑娘山卧龙4天3晚",
            "start": "成都市",
            "end": "漳扎镇",
            "day": 4,
            "km": 1167,
            "view": 0,
            "imageNum": 0,
            "images": []
        },
        {
            "id": 1,
            "title": "稻城亚丁色达7天6晚",
            "start": "成都市",
            "end": "香格里拉镇",
            "day": 7,
            "km": 2139,
            "view": 0,
            "imageNum": 0,
            "images": []
        }
    ]
}
```

