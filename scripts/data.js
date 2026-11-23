// 豆單資料庫
const coffees = [
    { id: 1, name: "約克之星 - 祕魯 庫斯科", process: "水洗", roast: "中焙", note: "榛果 巧克力 奶油 焦糖 酸質柔和", bean: 280, drip: 250, new: false },
    { id: 2, name: "黃波旁 - 巴西 星河莊園", process: "日曬", roast: "中焙", note: "黑莓 柑橘 蜂蜜 黑糖 熱帶水果 巧克力", bean: 280, drip: 250, new: false },
    { id: 3, name: "格拉諾德 - 瓜地馬拉 薇薇特南果 格拉諾德", process: "水洗", roast: "中焙", note: "柑橘 橘子 奶油 堅果 蘋果甜感", bean: 280, drip: 250, new: false },
    { id: 4, name: "吉查羅利 PB - 肯亞 恩布 吉查羅利", process: "水洗", roast: "中淺焙", note: "紅莓 柑橙 水果汁 香草 奶油", bean: 330, drip: 300, new: false },
    { id: 5, name: "卡菲婭 藝妓 - 衣索比亞 卡法 卡菲婭 藝妓 G1", process: "水洗", roast: "淺焙", note: "檸檬 白柚 花茶香 東方美人茶 紅糖 蜜糖 酸質細緻 口感明亮", bean: 380, drip: 350, new: true },
    { id: 6, name: "龐貝 - 衣索比亞 西達馬 班莎 龐貝 日曬 G1", process: "日曬", roast: "淺焙", note: "檸檬 丁香 棕色香料 雪松 烏龍茶 層次豐富紮實", bean: 380, drip: 350, new: true },
    { id: 7, name: "露娜 藝伎 - 衣索比亞 卡法 露娜 藝伎 G1", process: "水洗", roast: "淺焙", note: "野薑花香 柑橘 黃檸檬 佛手柑 覆盆子 百花蜜甜感", bean: 380, drip: 350, new: true },
    { id: 8, name: "露娜 藝伎 日曬 - 衣索比亞 卡法 露娜 藝伎 日曬 G1", process: "日曬", roast: "淺焙", note: "芒果乾 白桃 葡萄乾 野莓 茉莉花 蜂蜜 柑橘 白糖甜感", bean: 380, drip: 350, new: true },
    { id: 9, name: "芭蕾 - 衣索比亞 西達馬 柏娜 蘇莉亞 G1", process: "日曬", roast: "中淺焙", note: "草莓 水蜜桃 佛手柑 芒果乾", bean: 330, drip: 300, new: false },
    { id: 10, name: "風信子 - 衣索比亞 谷吉 烏拉嘎 風信子 G1", process: "水洗", roast: "淺焙", note: "檸檬皮 柑橘 梅子 白花 奶油 茶感 酸質平衡 風味明亮", bean: 350, drip: 320, new: false },
    { id: 11, name: "花見牡丹 - 衣索比亞 古吉 罕貝拉 G1", process: "日曬", roast: "中淺焙", note: "花香 甜桃 黑醋栗 枇耙 荔枝 蜂漿 尾韻花果香", bean: 380, drip: 350, new: false },
    { id: 12, name: "莫札特 - 哥斯大黎加 卡內特 音樂家系列 莫札特", process: "葡萄乾蜜處理", roast: "淺焙", note: "花香 莓果 水果酒 葡萄 甜瓜 蜂蜜 熟果酸甜感 濃郁香氣", bean: 380, drip: 350, new: false },
];
