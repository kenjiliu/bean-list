// 豆單資料庫
const coffees = [
    { id: 1, name: "約克之星 - 祕魯 庫斯科", process: "水洗", roast: "中焙", note: "榛果 巧克力 奶油 焦糖 酸質柔和", bean: 280, drip: 250, new: false },
    { id: 2, name: "黃波旁 - 巴西 星河莊園", process: "日曬", roast: "中焙", note: "黑莓 柑橘 蜂蜜 黑糖 熱帶水果 巧克力", bean: 280, drip: 250, new: false },
    { id: 3, name: "格拉諾德 - 瓜地馬拉 薇薇特南果 格拉諾德", process: "水洗", roast: "中焙", note: "柑橘 橘子 奶油 堅果 蘋果甜感", bean: 280, drip: 250, new: false },
    { id: 4, name: "吉查羅利 PB - 肯亞 恩布 吉查羅利", process: "水洗", roast: "中淺焙", note: "紅莓 柑橙 水果汁 香草 奶油", bean: 330, drip: 300, new: false },
    { id: 5, name: "馬拉威 藝妓 - 馬拉威 秘蘇庫 藝妓", process: "水洗", roast: "中淺焙", note: "花香 甜桃 水梨 蜜柚 口感優雅滑順", bean: 330, drip: 300, new: false },
    { id: 6, name: "安娜索拉 - 衣索比亞 谷吉 安娜索拉 G1", process: "水洗", roast: "中淺焙", note: "檸檬 花香 桃子 黑糖 尾韻厚實", bean: 330, drip: 300, new: false },
    { id: 7, name: "香水茉莉 - 衣索比亞 谷吉 烏拉嘎 G1", process: "水洗", roast: "中淺焙", note: "茉莉花 香水檸檬 佛手柑 白桃", bean: 330, drip: 300, new: false },
    { id: 8, name: "芭蕾 - 衣索比亞 西達馬 柏娜 蘇莉亞 G1", process: "日曬", roast: "中淺焙", note: "草莓 水蜜桃 佛手柑 芒果乾", bean: 330, drip: 300, new: false },
    { id: 9, name: "卡拉莫- 衣索比亞 西達馬 卡拉莫 74158 G1", process: "日曬", roast: "淺焙", note: "草莓 藍莓果醬 葡萄 佛手柑", bean: 350, drip: 320, new: false },
    { id: 10, name: "風信子 - 衣索比亞 谷吉 烏拉嘎 風信子 G1", process: "水洗", roast: "淺焙", note: "檸檬皮 柑橘 梅子 白花 奶油 茶感 酸質平衡 風味明亮", bean: 350, drip: 320, new: true },
    { id: 11, name: "花見牡丹 - 衣索比亞 古吉 罕貝拉 G1", process: "日曬", roast: "中淺焙", note: "花香 甜桃 黑醋栗 枇耙 荔枝 蜂漿 尾韻花果香", bean: 380, drip: 350, new: true },
    { id: 12, name: "莫札特 - 哥斯大黎加 卡內特 音樂家系列 莫札特", process: "葡萄乾蜜處理", roast: "淺焙", note: "花香 莓果 水果酒 葡萄 甜瓜 蜂蜜 熟果酸甜感 濃郁香氣", bean: 380, drip: 350, new: true },
];