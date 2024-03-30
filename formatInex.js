const inputString = `[7] 徐少军;李宗哲;梅杰;王志坚. 基于Springboot+Vue框架的质量检验监督管理系统研发[J]. 纺织标准与质量，2024-02-25, 26-30.
[8] 邱泽楷;赵楷迪;邓子林;刘向阳;张颖婷. 优果汇生鲜农电商后台管理系统设计与实现[J]. 福建电脑，2024-02-05, 30-30.
[9] 贾文琦;滕建;贾萨尔·阿依肯. 基于微信小程序的课程表系统[J]. 电脑编程技巧与维护，2024-01-18, 12-14.
[10] 石雨昕;关家兴;邹博华;王夏阳;秦乐. 基于SpringBoot微服务架构设计与实现实验室开放课题管理系统[J]. 实验室检测，2024-01-10, 14-17.
[11] 任喜伟;杜丰怡;李兆允;侯佳蕾. 高校大类分流系统的实现与应用[J]. 计算机技术与发展，2024-01-10, 6-6.
[12] 白茹鑫. 基于SpringBoot+SSM框架的企业安全培训管理系统设计与实现[J]. 现代信息科技，2024-01-10, 23-28.
[13] 朱敏;李鑫;朱海静;张博洋. 基于微服务架构的健身管理平台的设计与实现[J]. 电脑知识与技术，2024-01-05, 23-23.
[14] 郭金文. 蔬菜大棚温度可视化控制系统的设计与实现[J]. 现代计算机，2023-12-25, 24-30.
[15] 吴伶琳. 基于SpringBoot的客户关系管理系统设计与实现[J]. 无线互联科技，2023-12-25, 19-21.
[16] 唐媛媛;王晓楠;李京培;刘莉茵;李群. 基于SpringBoot的病原生物学在线智能化实验考试系统建设探索[J]. 赤峰学院学报(自然科学版)，2023-12-25, 12-14.
[17] 翟祥栩;陈谦民;陈宗玉. 基于SpringBoot的农业大数据一站式分析预测平台的设计与实现[J]. 现代信息科技，2023-12-21, 13-20.
[18] 魏连秋;张义红;张建光;马倩;邢春燕. 基于AMQP的分布式系统消息可靠传输方案的设计与实现[J]. 数字通信世界，2023-12-20, 30-30.
[19] 武际斌;段良华;金永亮. 基于Vue+SpringBoot的课程思政素材库的设计与实现[J]. 2023年思想政治教育论坛论文集，2023-12-16, 18-23.
[20] 曲锦旭. 基于SpringBoot的农作物受灾分析系统的设计与实现[J]. 农业工程技术，2023-12-15, 25-30.
[21] 吴昊;张丹. 基于SpringBoot框架的大学生网上兼职系统设计与实现[J]. 电脑知识与技术，2023-12-15, 26-30.
[22] 姜一波. 基于SpringBoot+Vue的在线考试系统设计与实现[J]. 无线互联科技，2023-12-10, 13-15.
[23] 付兵杰;夏金梧;丁凡桠;李书;范萌. 基于SpringBoot和Cesium的边坡声发射监测系统研究[J]. 地理空间信息，2023-11-28, 29-30.
[24] 黄娟. 基于SpringBoot和Vue.js的医院数据提取管理平台的设计与实现[J]. 信息与电脑(理论版)，2023-11-25, 23-27.
[25] 洪保刘. 基于大数据+SpringBoot技术的全国传染病数据分析可视化平台[J]. 数字技术与应用，2023-11-25, 28-30.
[26] 张豪;朱石磊;胡建华;杨洁. 基于B/S架构的校园论坛系统的设计与实现[J]. 电脑知识与技术，2023-11-25, 21-25.`

const arr = inputString.split(/\[\d+\]\s/).filter(Boolean)

const resultString = arr.reduce((prev, cur, index) => {
  return (prev += `[${index + 1}]` + cur)
}, "")

console.log(resultString)