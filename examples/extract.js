/**
 * 文本信息提取
 * @authors chandre (chandre21cn@gmail.com)
 * @date    2017-04-08 18:24:04
 * @version 1.0.0
 */

const Hanlp = require('../lib/index')
const path = require('path')
const HanLP = new Hanlp({
  properties: path.resolve(__dirname, '../hanlp.properties'),
})

var text = [
  '腾讯科技讯据外电报道美国电动车制造商特斯拉周日表示该公司第一季度电动车的交付总量同比增长69%，达到创纪录的2.5万辆，超出市场分析师此前的预期。',
  '特斯拉表示，该公司第一季度交付了1.345万辆轿车型Model S电动车，以及11,550辆SUV型Model X电动车，精确的交付量为2.5418万辆。特斯拉第一季度电动车交付量的提升，将有力的支撑公司此前制定的上半年交付5万辆电动车的目标。彭博社的统计数据显示，市场分析师此前平均预计，特斯拉第一季度电动车的交付总量为2.42万辆。',
  '投资公司Robert W. Baird & Co.分析师本·卡罗尔（Ben Kallo）就此表示，“市场目前把注意力都集中到了Model 3的量产问题，不过对特斯拉而言，第一季度电动车的交付量创出历史新高是一个非常好的消息。2.5万辆的交付量是我们能想到的最好数据，市场目前指望着Model 3推动特斯拉电动车销量的继续增长。”',
  '特斯拉此前曾表示，由于公司从去年10月底至12月初遇到制造方面的挑战，导致去年第四季度的电动车交付量未达市场预期。最终，大约2750辆电动车因为运输延迟或消费者未能实物提货，而未被计入到当季的交付量当中。特斯拉在周日的声明中还表示，大约有4650辆电动车在第一季度末转运给消费者，将被计入到第二季度的交付量当中。',
  '今年是特斯拉的关键一年，因为该公司首款量产、廉价版电动车Model 3将开始投产。受益于Model 3的市场前景和腾讯买入特斯拉5%股权的推动，特斯拉的股价在今年已累计上涨了30%。至本周五收盘时，特斯拉市值约为454亿美元，仅距年产数百万辆汽车的福特汽车相差8.7亿美元。',
  '作为美国最年轻的上市汽车制造商，特斯拉目前尚未向市场证明该公司有能力量产电动车。特斯拉首席执行官伊隆·马斯克（Elon Musk）曾表示，特斯拉明年要实现年产量50万辆的目标，不过这一雄心勃勃的计划将受制于该公司位于内华达州的超级电池工厂能否顺利投产。截至目前，特斯拉尚未给出今年全年的电动车出货量目标。',
  '特斯拉目前正在对产品线和价格结构进行调整，从而为今年7月量产Model 3进行准备。按照计划，特斯拉将从今年年底开始向美国市场销售Model 3。市场当前预计Model 3的起售价格将为3.5万美元左右。特斯拉在上月中旬决定停售售价为7.45万美元的低端版Model S轿车。4月16日之后，公司不再销售该款汽车。低端版Model S配备75kWh电池组，不过特斯拉用软件锁定电池，只提供60kWh的续航能力。特斯拉用户如果购买该汽车，可以通过升级软件解锁电池，让75kWh完全发挥作用，不过软件需要花钱购买。为什么停售该款汽车？原因是大多数客户最终会选择升级到75kWh，特斯拉想精简产品线。',
  '特斯拉目前公布的数据只是初步数据，可能会在该公司今年5月发布财报时出现略微变化。特斯拉会每个季度发布全球销售数据，而不是像传统汽车制造商那样每月发布一次汽车销售数据。交付数据只包括已转交给消费者、且所有文书工作都是正确的电动车。',
]

// [Keyword 关键词提取]
console.log(
  '\n============================= 关键词提取 ============================='
)
var words = HanLP.Keyword(text.join(''), 3)
console.log(words)

// [Phrase 短语提取]
console.log(
  '\n============================= 短语提取 ============================='
)
var words = HanLP.Phrase(text.join(''), 2)
console.log(words)

// [Summary 提取文章摘要]
console.log(
  '\n============================= 提取文章摘要 ============================='
)
var words = HanLP.Summary(text.join(''), 3)
console.log(words)

// [ Suggester 文本推荐(句子级别，从一系列句子中挑出与输入句子最相似的那一个)]
console.log(
  '\n============================= 文本推荐 ============================='
)
var words = HanLP.Suggester(text, ['价格', '业绩'], 1)
console.log(words)
