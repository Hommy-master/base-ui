import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/openapi/v1/bots/custom',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: '获取成功',
        data: {
          list: [
            {
              id: 454,
              budget: '¥1,500 - ¥3,000',
              videoLink:
                '9.28 复制打开抖音，看看【孙耀佛山精选诚心家具的作品】一个视频找到别墅豪宅都在用的平价好家具 # 家具 ... https://v.douyin.com/cNxPylPcfp8/ O@x.fo 12/05 Wmq:/ \n\n对标效果视频截图：\n![对标效果截图](https://s.coze.cn/t/P7T1j82IXHM/)',
              description: '定制工作流',
              status: 'pending',
              contactType: 'phone',
              contactValue: '13245645678',
              createAt: '2026-01-07T20:35:06'
            },{
              id: 4543,
              budget: '¥1,500 - ¥3,000',
              videoLink:
                '9.28 复制打开抖音，看看【孙耀佛山精选诚心家具的作品】一个视频找到别墅豪宅都在用的平价好家具 # 家具 ... https://v.douyin.com/cNxPylPcfp8/ O@x.fo 12/05 Wmq:/ \n\n对标效果视频截图：\n![对标效果截图](https://s.coze.cn/t/P7T1j82IXHM/)',
              description: '定制工作流',
              status: 'processing',
              contactType: 'phone',
              contactValue: '13245645678',
              createAt: '2026-01-07T20:35:06'
            },{
              id: 45434,
              budget: '¥1,500 - ¥3,000',
              videoLink:
                '9.28 复制打开抖音，看看【孙耀佛山精选诚心家具的作品】一个视频找到别墅豪宅都在用的平价好家具 # 家具 ... https://v.douyin.com/cNxPylPcfp8/ O@x.fo 12/05 Wmq:/ \n\n对标效果视频截图：\n![对标效果截图](https://s.coze.cn/t/P7T1j82IXHM/)',
              description: '定制工作流',
              status: 'completed',
              contactType: 'wechart',
              contactValue: '13245645678',
              createAt: '2026-01-07T20:35:06'
            },
          ],
          totalCount: 1,
          totalPages: 1,
          currentPage: 1,
          pageSize: 10,
        },
      };
    },
  },
  {
    url: '/openapi/v1/bots/custom',
    method: 'post',
    response: () => {
      return {
        code: 0,
        msg: '创建成功'
      };
    },
  },
  {
    // 获取智能体集合
    url: '/openapi/v1/bots',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: '获取成功',
        data: {
          list: [
            {
              id: 1236,
              botID: '7543517654767206440',
              name: '奇诡生灵与传奇人物故事视频',
              description: '输入奇诡动物或者传奇人物生成故事视频',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1756362858204_3en9pa36njb.png',
              auditStatus: 1,
              category: '玄学',
              unlockCount: 1,
              totalRevenue: 4950,
              price: 99.0,
              workflows: [
                {
                  id: 1312,
                  botID: '7543520642533097523',
                  name: 'qishenglingrenwugushi',
                  description: '输入奇异动物人物名 如：九尾狐 一键生成奇诡生灵与传奇人物故事视频 ',
                  downloadURL:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1756362858204_3en9pa36njb.png',
                  createAt: '2025-08-28T14:35:44',
                  updateAt: '2025-08-28T14:41:59',
                },
              ],
              creatorName: '画师8633',
              creatorHeadImg: '',
              examples: [
                {
                  id: 938,
                  botID: '7543517654767206440',
                  imageUrl: '',
                  videoUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1755176691311_powqi9i7o6c.mp4',
                  createAt: '2025-08-28T14:37:35',
                  updatedAt: '2025-10-05T00:24:20',
                },
              ],
            },
            {
              id: 1218,
              botID: '7543300638496260146',
              name: '仙侠御剑飞仙短视频生成器',
              description:
                '请大侠输入御剑飞行、万剑归宗、飞鹤仙子、六脉神剑等武术招数，我会帮你生成超仙的仙侠大片',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1756314765964_ii593840oj.jpg',
              auditStatus: 1,
              createAt: '2025-08-28T01:12:46',
              category: '玄学',
              unlockCount: 0,
              totalRevenue: 0,
              price: 59.9,
              workflows: [
                {
                  id: '7542184605497294888',
                  name: '仙侠剧特效短视频生成器',
                  description:
                    '输入剑侠招数，一键生成仙侠剧特效视频，每个短视频花费0.5元左右（速推svip）',
                  botID: '7543300638496260146',
                  downloadURL:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1756314765964_ii593840oj.jpg',
                  createAt: '2025-08-28T01:14:42',
                  updateAt: '2025-08-28T01:14:42',
                },
              ],
              creatorName: '玛大丽',
              creatorHeadImg: '',
              examples: [
                {
                  id: 932,
                  botID: '7543300638496260146',
                  imageUrl: '',
                  videoUrl:
                    'https://lf9-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/1361630598274635/video/mp4/7557401486133608457/1756314926254_kzzl85u9mm.mp4?lk3s=50ccb0c5&x-expires=1760199909&x-signature=9DjuOKUbdIzFlUSjkNNjSdzbjbg%3D',
                  createAt: '2025-08-28T01:15:33',
                  updateAt: '2025-10-05T00:25:09',
                },
              ],
            },
            {
              id: 1124,
              botID: '7541317941670002751',
              name: '穿越侏罗纪（自拍）',
              description: '冒险探索类视频，自拍视角',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755850526318_7zrfsf7fiq5.png',
              auditStatus: 1,
              createAt: '2025-08-22T16:15:27',
              category: '玄学',
              unlockCount: 0,
              totalRevenue: 0,
              price: 29.99,
              workflows: [
                {
                  id: 1211,
                  botID: '7541318654273765417',
                  name: 'zipai',
                  description: '一键生成冒险主题的自拍视频',
                  downloadURL:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755850526318_7zrfsf7fiq5.png',
                  createAt: '2025-08-22T16:19:57',
                  updateAt: '2025-08-22T16:19:57',
                },
              ],
              creatorName: '逻辑向量',
              creatorHeadImg: '',
              examples: [
                {
                  id: 851,
                  botID: '7541317941670002751',
                  imageUrl: '',
                  videoUrl:
                    'https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/1361630598270539/video/mp4/7557402134740762624/1755850879098_m6k7am2yv8.mp4?lk3s=50ccb0c5&x-expires=1760200162&x-signature=Au0WE4LhmgvAQXShgPAFZOzjElA%3D',
                  createAt: '2025-08-22T16:21:22',
                  updateAt: '2025-10-05T00:29:22',
                },
              ],
            },
            {
              id: 1048,
              botID: '7540194454750445610',
              description: '用户上传人物图片和歌曲音频，一键生成任意人物对口型唱歌的视频',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755588996139_azg5w1080oj.jpg',
              auditStatus: 1,
              createAt: '2025-08-19T15:36:39',
              category: '玄学',
              unlockCount: 5,
              totalRevenue: 26700,
              price: 89.0,
              workflows: [
                {
                  id: 1146,
                  name: 'Duikouxing_changge',
                  description: '根据用户上传的人物图片和歌曲音频，一键生成任意人物对口型唱歌视频',
                  botID: '7540194454750445610',
                  iconUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755588996139_azg5w1080oj.jpg',
                  createAt: '2025-08-19T15:38:21',
                  updateAt: '2025-08-19T15:38:21',
                },
              ],
              creatorName: '江山',
              creatorHeadImg: '',
              examples: [
                {
                  id: 783,
                  botID: '7540194454750445610',
                  imageUrl: '',
                  videoUrl:
                    'https://lf26-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/2162074399288379/video/mp4/7557402459988541494/1755589142318_jvspbg1amk.mp4?lk3s=50ccb0c5&x-expires=1760200421&x-signature=JwVbgKyh5ZPKDDJ9TNK1c8Exv68%3D',
                  createAt: '2025-08-19T15:39:27',
                  updateAt: '2025-10-05T00:33:42',
                },
              ],
            },
            {
              id: 1001,
              botID: '7539335237659312154',
              name: '古代人穿越至现代',
              description: '一键制作短视频',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755391966805_jpmqmizje9.png',
              auditStatus: 1,
              createAt: '2025-08-17T08:52:48',
              category: '玄学',
              unlockCount: 5,
              totalRevenue: 4975,
              price: 19.9,
              workflows: [
                {
                  id: 1101,
                  name: 'gudairenchuanyue',
                  description: '一键制作古代人穿越至现代',
                  botID: '7539335237659312154',
                  space_id: '',
                  iconUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755391966805_jpmqmizje9.png',
                  createAt: '2025-08-17T08:53:47',
                  updateAt: '2025-08-17T08:53:47',
                },
              ],
              creatorName: '云A',
              creatorHeadImg:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/user_avatar/1755392957557_fss7r61vmls_%E6%96%87%E5%BF%83%E4%B8%80%E8%A8%80AI%E4%BD%9C%E5%9B%BE_20250817074411.png',
              examples: [
                {
                  id: 747,
                  botID: '7539335237659312154',
                  imageUrl: '',
                  videoUrl:
                    'https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/2270928429393000/video/quicktime/7557403174827524147/1755392048275_gbis3e8iz5o.mov?lk3s=50ccb0c5&x-expires=1760200486&x-signature=ViN99g%2FYUtSBk2I8TGPoDQz8T%2BI%3D',
                  createAt: '2025-08-17T08:54:21',
                  updateAt: '2025-10-05T00:34:47',
                },
              ],
            },
            {
              id: 996,
              botID: '7539188239581151271',
              name: '科幻 3D 电影视频创作专家',
              description:
                '在用户输入智谱大模型（https://www.bigmodel.cn/申请） api 和速推 api （https://www.51aigc.cc/#/userInfo申请）、科幻主题、科幻场景数量后，调用工作流，生成科幻 3D 电影视频剪映视频草稿。',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755489355072_lezptn52oxf.jpeg',
              auditStatus: 1,
              createAt: '2025-08-16T22:44:31',
              category: '玄学',
              price: 19.9,
              workflows: [
                {
                  id: 1097,
                  name: '科幻3D电影视频创作',
                  description:
                    '用户输入智谱大模型（https://www.bigmodel.cn/申请） 和 速推（https://www.51aigc.cc/#/userInfo申请）api，主题（如输入星球大战、异形外星生物入侵地球、变形金刚大战异形生物、月球叛军火之女等），科幻场景（每段5秒）数量，背景音乐根据主题自动挑选后生成剪映草稿视频，没有采用豆包图生视频等插件，太贵，本工作流没有扣钱。',
                  botID: '7539188239581151271',
                  createAt: '2025-08-16T22:47:58',
                  updateAt: '2025-08-16T22:47:58',
                },
              ],
              is_migrate: false,
              creatorName: 'youu',
              creatorHeadImg: '',
              examples: [
                {
                  id: 744,
                  botID: '7539188239581151271',
                  imageUrl: '',
                  videoUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1755355866881_qdi0xmqaxm8.mp4',
                  createAt: '2025-08-16T22:51:31',
                  auditStatus: 0,
                  coze_videoUrl: '',
                  updateAt: '2025-09-17T04:53:12',
                },
                {
                  id: 743,
                  botID: '7539188239581151271',
                  imageUrl: '',
                  videoUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1755355713710_bz0c93i14st.mp4',
                  createAt: '2025-08-16T22:48:58',
                  auditStatus: 0,
                  coze_videoUrl: '',
                  updateAt: '2025-09-17T04:53:12',
                },
              ],
            },
            {
              id: 991,
              botID: '7539134135819550756',
              space_id: '',
              name: 'TK爆款悬疑视频',
              description: '输入各种悬疑类主题如：贝克街的亡灵，开膛手杰克等等，生成视频链接',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755343257910_678i28443sk.png',
              sort: 13000,
              auditStatus: 1,
              level: 1,
              money: 6999,
              is_offical: 0,
              createAt: '2025-08-16T19:20:53',
              user_id: 402730,
              error_msg: '',
              bot_url: '',
              category: '玄学',
              phone_number: '',
              view_cnt: 799,
              unlockCount: 3,
              totalRevenue: 17497,
              digg_cnt: 0,
              is_unlocked: false,
              unlock_price: 6999,
              price: 69.99,
              price_desc: '69.99元',
              workflows: [
                {
                  id: 1093,
                  name: 'xuanyi',
                  description: '',
                  description_html: '',
                  botID: '7539134135819550756',
                  space_id: '',
                  iconUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755343257910_678i28443sk.png',
                  zip_url: '',
                  sort: 0,
                  cost_money: 0,
                  auditStatus: 1,
                  is_offical: 0,
                  input_data: '',
                  nodes_infos: '',
                  input_auditStatus: 0,
                  createAt: '2025-08-16T19:21:30',
                  updateAt: '2025-08-16T19:21:30',
                },
              ],
              is_migrate: false,
              creatorName: '普通人A',
              creatorHeadImg:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/user_avatar/1754091426022_5vqx45mx4x_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250730000909.jpg',
              examples: [
                {
                  id: 734,
                  botID: '7539134135819550756',
                  imageUrl: '',
                  videoUrl:
                    'https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3894913877416571/video/mp4/7557403994184876072/1755344220561_y38buzc3o8.mp4?lk3s=50ccb0c5&x-expires=1760200526&x-signature=VOwEczf6ForYnkKas1ufSsgRIRg%3D',
                  createAt: '2025-08-16T19:37:24',
                  auditStatus: 1,
                  coze_videoUrl:
                    'https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3894913877416571/video/mp4/7557403994184876072/1755344220561_y38buzc3o8.mp4?lk3s=50ccb0c5&x-expires=1760200526&x-signature=VOwEczf6ForYnkKas1ufSsgRIRg%3D',
                  updateAt: '2025-10-05T00:35:26',
                },
              ],
            },
            {
              id: 962,
              botID: '7538697755385069607',
              space_id: '',
              name: '城市AR秀视频',
              description: '输入背景音乐mp3文件及城市AR秀城市提示词，生成城市AR秀',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755240642573_berlg4m8t89.png',
              sort: 13000,
              auditStatus: 1,
              level: 1,
              money: 9900,
              is_offical: 0,
              createAt: '2025-08-15T14:50:39',
              user_id: 252510,
              error_msg: '',
              bot_url: '',
              category: '玄学',
              phone_number: '',
              view_cnt: 93,
              unlockCount: 0,
              totalRevenue: 0,
              digg_cnt: 0,
              is_unlocked: false,
              unlock_price: 9900,
              price: 99.0,
              price_desc: '99.00元',
              workflows: [
                {
                  id: 1064,
                  name: 'quanxishipinshipin_3D',
                  description:
                    'song*背景音乐 ：上传mp3格式背景音乐\nstyle*横竖屏：9:16 16:9\ntheme*视频文案：北京特色建筑，线框全息图，孤立的星空黑暗背景，发光的金色线条，标志性结构如故言的宫殿群、天坛的祈年殿等，复杂的图案围绕建筑展开，详细的建筑细节包括飞、斗拱、门窗等，视觉上令人惊叹，北京建筑历史意义，未来技术，8k风格，创意项目。\n\ncount视频数量 如：3   (直接决定最终视频时长)',
                  botID: '7538697755385069607',
                  downloadURL:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755240642573_berlg4m8t89.png',
                  createAt: '2025-08-15T14:53:42',
                  updateAt: '2025-08-15T14:53:42',
                },
              ],
              creatorName: '画师8633',
              creatorHeadImg: '',
              examples: [
                {
                  id: 674,
                  botID: '7538697755385069607',
                  imageUrl: '',
                  videoUrl:
                    'https://lf9-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/1361630598270539/video/mp4/7557403934688559104/1755241002609_l26kqhle3uq.mp4?lk3s=50ccb0c5&x-expires=1760200575&x-signature=354QllRK46eKwbWYqY1FwS6zLZs%3D',
                  createAt: '2025-08-15T14:56:39',
                  auditStatus: 1,
                  coze_videoUrl:
                    'https://lf9-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/1361630598270539/video/mp4/7557403934688559104/1755241002609_l26kqhle3uq.mp4?lk3s=50ccb0c5&x-expires=1760200575&x-signature=354QllRK46eKwbWYqY1FwS6zLZs%3D',
                  updateAt: '2025-10-05T00:36:16',
                },
              ],
            },
            {
              id: 946,
              botID: '7538419574812344335',
              space_id: '',
              name: '毛绒玩具',
              description: '输入一张任何物品的图片，生成对应的毛绒玩具视频',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755176590415_84wpjul1i9r.png',
              sort: 13000,
              auditStatus: 1,
              level: 1,
              money: 4900,
              is_offical: 0,
              createAt: '2025-08-14T21:03:12',
              user_id: 260025,
              error_msg: '',
              bot_url: 'https://www.coze.cn/space/7408396600428740608/bot/7538419574812344335',
              category: '玄学',
              phone_number: '',
              view_cnt: 70,
              unlockCount: 0,
              totalRevenue: 0,
              digg_cnt: 0,
              is_unlocked: false,
              unlock_price: 4900,
              price: 49.0,
              price_desc: '49.00元',
              workflows: [
                {
                  id: 1048,
                  name: 'mrwj',
                  description: '上传一张任何物品的图片，生成对应的毛绒玩具视频',
                  description_html: '',
                  botID: '7538419574812344335',
                  space_id: '',
                  downloadURL:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1755176590415_84wpjul1i9r.png',
                  zip_url: '',
                  sort: 0,
                  cost_money: 0,
                  auditStatus: 1,
                  is_offical: 0,
                  input_data: '',
                  nodes_infos: '',
                  input_auditStatus: 0,
                  createAt: '2025-08-14T21:04:07',
                  updateAt: '2025-08-14T21:04:07',
                },
              ],
              is_migrate: false,
              creatorName: '小优智能体',
              creatorHeadImg:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/user_avatar/1754366892616_qlrscbcofw_14.png',
              examples: [
                {
                  id: 635,
                  botID: '7538419574812344335',
                  imageUrl: '',
                  videoUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1755176691311_powqi9i7o6c.mp4',
                  createAt: '2025-08-14T21:04:52',
                  auditStatus: 0,
                  coze_videoUrl: '',
                  updateAt: '2025-09-17T04:53:12',
                },
                {
                  id: 634,
                  botID: '7538419574812344335',
                  imageUrl: '',
                  videoUrl:
                    'https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3965273130677195/video/mp4/7557404212448018468/1755176680847_vv8xkm5m0jd.mp4?lk3s=50ccb0c5&x-expires=1760200691&x-signature=9%2Fdh39dl%2F7gTJ6OZs3NXKLZTWcU%3D',
                  createAt: '2025-08-14T21:04:42',
                  auditStatus: 1,
                  coze_videoUrl:
                    'https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3965273130677195/video/mp4/7557404212448018468/1755176680847_vv8xkm5m0jd.mp4?lk3s=50ccb0c5&x-expires=1760200691&x-signature=9%2Fdh39dl%2F7gTJ6OZs3NXKLZTWcU%3D',
                  updateAt: '2025-10-05T00:38:11',
                },
                {
                  id: 633,
                  botID: '7538419574812344335',
                  imageUrl: '',
                  videoUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1755176672233_vpnr8sytpe.mp4',
                  createAt: '2025-08-14T21:04:33',
                  auditStatus: 0,
                  coze_videoUrl: '',
                  updateAt: '2025-09-17T04:53:12',
                },
              ],
            },
            {
              id: 876,
              botID: '7530482988661325874',
              space_id: '',
              name: '一键生成自拍视角视频',
              description:
                '一键生成自拍视角视频\nbgm 上传背景音乐\n\nprompt 图片描述词：倾斜构图、远景、超广角、自拍照、景深、空问感、层次感，(苗疆高颜值少女、面容精致垂眸、邪魅表情、金灰色头发、凌乱发丝,苗族服饰、薄纱轻盈、腮红、美瞳、眼影、口红、金饰、耳坠，苗族传统盛装，背景可见夜晚野外林中，主人背后跟着一排穿戴清朝官员服饰的尸,他们的额头贴着黄色长条纸张道家符箓。)强烈的民族风情，写实摄影风格，自然柔光，超高细节纹理，8k分辨率，避免现代元素，避免失真。',
              iconUrl: '',
              sort: 13000,
              auditStatus: 1,
              level: 1,
              money: 9900,
              is_offical: 0,
              createAt: '2025-08-12T21:16:40',
              user_id: 252510,
              error_msg: '',
              bot_url: '',
              category: '玄学',
              phone_number: '',
              view_cnt: 300,
              unlockCount: 6,
              totalRevenue: 29700,
              digg_cnt: 0,
              is_unlocked: false,
              unlock_price: 9900,
              price: 99.0,
              price_desc: '99.00元',
              workflows: [
                {
                  id: 976,
                  name: '7530485952625524736',
                  description:
                    '一键生成自拍视角视频\nbgm 上传背景音乐\n\nprompt 图片描述词：倾斜构图、远景、超广角、自拍照、景深、空问感、层次感，(苗疆高颜值少女、面容精致垂眸、邪魅表情、金灰色头发、凌乱发丝,苗族服饰、薄纱轻盈、腮红、美瞳、眼影、口红、金饰、耳坠，苗族传统盛装，背景可见夜晚野外林中，主人背后跟着一排穿戴清朝官员服饰的尸,他们的额头贴着黄色长条纸张道家符箓。)强烈的民族风情，写实摄影风格，自然柔光，超高细节纹理，8k分辨率，避免现代元素，避免失真。',
                  description_html: '',
                  botID: '7530482988661325874',
                  space_id: '',
                  downloadURL: '',
                  zip_url: '',
                  sort: 0,
                  cost_money: 0,
                  auditStatus: 1,
                  is_offical: 0,
                  input_data: '',
                  nodes_infos: '',
                  input_auditStatus: 0,
                  createAt: '2025-08-12T21:18:52',
                  updateAt: '2025-08-12T21:18:52',
                },
              ],
              is_migrate: false,
              creatorName: '画师8633',
              creatorHeadImg: '',
              examples: [
                {
                  id: 999,
                  botID: '7530482988661325874',
                  imageUrl:
                    'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/images/1756774468384_vkdwossvgw.png',
                  videoUrl: '',
                  createAt: '2025-09-02T08:54:28',
                  auditStatus: 0,
                  coze_videoUrl: '',
                  updateAt: '2025-09-17T04:53:12',
                },
                {
                  id: 586,
                  botID: '7530482988661325874',
                  imageUrl: '',
                  videoUrl:
                    'https://lf26-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3965273130677195/video/mp4/7557402775542890538/1755070411754_39peqeu37xi.mp4?lk3s=50ccb0c5&x-expires=1760200887&x-signature=%2BY%2F4MsM%2Fmqw%2FBGIHGoSbXD7CJlc%3D',
                  createAt: '2025-08-13T15:33:35',
                  auditStatus: 1,
                  coze_videoUrl:
                    'https://lf26-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3965273130677195/video/mp4/7557402775542890538/1755070411754_39peqeu37xi.mp4?lk3s=50ccb0c5&x-expires=1760200887&x-signature=%2BY%2F4MsM%2Fmqw%2FBGIHGoSbXD7CJlc%3D',
                  updateAt: '2025-10-05T00:41:28',
                },
              ],
            },
          ],
          totalCount: 19,
          total_pages: 2,
          current_page: 1,
          page_size: 10,
          today_new_bot_count: 0,
          today_new_workflow_count: 0,
          total_workflow_count: 977,
        },
      };
    },
  },
  {
    url: '/openapi/v1/bots',
    method: 'post',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '添加成功',
      };
    },
  },
  {
    // 获取我的智能体列表
    url: '/openapi/v1/bots/me',
    method: 'get',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '获取成功',
        data: {
          list: [
            {
              id: '1752',
              botID: '1752',
              name: '12',
              description: '21',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1761400113285_sv8j43e0bt.png',
              price: 12,
              auditStatus: 0,
              unlockCount: 0,
              totalRevenue: 0,
            },
            {
              id: '3434',
              botID: '3434',
              name: '43',
              description: '43',
              iconUrl: '',
              price: 12,
              auditStatus: 0,
              unlockCount: 0,
              totalRevenue: 0,
            },
            {
              id: '7523862549197062187',
              botID: '7523862549197062187',
              name: '绮梦朝代影像生成师',
              description: '绮梦朝代影像生成师',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1761231537425_mcw39g8bejn.png',
              price: 12,
              auditStatus: 0,
              unlockCount: 0,
              totalRevenue: 0,
            },
          ],
          totalCount: 4,
          totalPages: 1,
          currentPage: 1,
          pageSize: 20,
        },
      };
    },
  },
  {
    // 智能体详情信息
    url: '/openapi/v1/bots/:id',
    method: 'get',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '获取成功',
        data: {
          id: 1736,
          botID: '7523862549197062187',
          space_id: '',
          name: '绮梦朝代影像生成师',
          description: '绮梦朝代影像生成师',
          iconUrl:
            'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1761231537425_mcw39g8bejn.png',
          sort: 0,
          auditStatus: 3,
          level: 1,
          money: 9900,
          is_offical: 0,
          createAt: '2025-10-23T22:58:58',
          user_id: 23477,
          error_msg: '',
          bot_url:
            'https://www.coze.cn/store/agent/7523862329289736231?from=bots_card&bid=6hui25p0g6013',
          category: '其他',
          phone_number: '',
          view_cnt: 0,
          unlockCount: 0,
          totalRevenue: 0,
          digg_cnt: 0,
          auditStatus_desc: '审核中',
          active_workflow_count: 2,
          total_workflow_count: 2,
          unlock_count: 0,
          total_earnings: 0,
          total_earnings_yuan: 0.0,
          recent_unlocks: [],
          creatorName: 'oasjw7HDZO9XyHB_WNPnR30Zzkeg',
          creatorHeadImg: '',
          workflows: [
            {
              id: '7536984281530794034',
              name: '简笔画英文',
              description:
                '输入情感主题，一键生成简笔画英文视频\n开始输入情感相关主题即可，比如：爱情的样子',
              botID: '7537336746447929407',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1754924408031_1kxehr2e49y.png',
              downloadURL: '',
              createAt: '2025-08-11T23:01:00',
              updateAt: '2025-08-13T11:32:51',
            },
          ],
          examples: [
            {
              id: 1377,
              botID: '7523862549197062187',
              imageUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/images/1761232041164_kc79ut4i55.png',
              videoUrl:
                'https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/3894913877416571/video/quicktime/7566688116233420800/1754924580570_ckds4tez6wa.mov?lk3s=50ccb0c5&x-expires=1762361969&x-signature=HX51SxKxhy0F%2FRX%2FDU5heP7x4o8%3D',
              createAt: '2025-10-23T23:07:24',
              auditStatus: 0,
              updateAt: '2025-10-23T23:07:23',
            },
          ],
        },
      };
    },
  },
  {
    url: '/openapi/v1/bots/:botID',
    method: 'delete',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '删除成功',
      };
    },
  },
  {
    url: '/openapi/v1/bots/:botID/workflows',
    method: 'delete',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '删除成功',
      };
    },
  },
  {
    // 添加智能体中的工作流
    url: '/openapi/v1/bots/:botID/workflows',
    method: 'post',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '添加工作流成功',
        data: {
          list: [
            {
              id: '7523763281497538599',
              name: 'QimengPhotoAlbumRhythmEditing2',
              description: '输入时代主题，如：宋朝、唐朝、秦朝等，自动生成对应朝代的视频',
              description_html: '',
              botID: '7523862549197062187',
              space_id: '',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1761231537425_mcw39g8bejn.png',
              zip_url:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/workflows/1761231644939_s2f8jt8iz1.zip',
              sort: 0,
              cost_money: 0,
              auditStatus: 1,
              is_offical: 0,
              input_data: '',
              nodes_infos: '',
              input_auditStatus: 0,
              createAt: '2025-10-23T23:00:45',
              updateAt: '2025-10-23T23:00:45',
              auditStatus_desc: '正常',
            },
            {
              id: '7523763281497538598',
              name: 'QimengPhotoAlbumRhythmEditing',
              description: '输入时代主题，如：宋朝、唐朝、秦朝等，自动生成对应朝代的视频',
              description_html: '',
              botID: '7523862549197062187',
              space_id: '',
              iconUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/avatars/1761231537425_mcw39g8bejn.png',
              zip_url:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/workflows/1761231644449_psl9n4iqbtk.zip',
              sort: 0,
              cost_money: 0,
              auditStatus: 1,
              is_offical: 0,
              input_data: '',
              nodes_infos: '',
              input_auditStatus: 0,
              createAt: '2025-10-23T23:00:44',
              updateAt: '2025-10-23T23:00:44',
              auditStatus_desc: '正常',
            },
          ],
          total_count: 2,
          total_pages: 1,
          current_page: 1,
          page_size: 50,
        },
      };
    },
  },
  {
    url: '/openapi/v1/bots/:botID/workflows/:workflowID',
    method: 'delete',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '删除工作流成功',
      };
    },
  },
  {
    // 添加智能中的案例
    url: '/openapi/v1/bots/:botID/examples',
    method: 'post',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '添加成功',
        data: {
          list: [
            {
              id: 1377,
              botID: '7523862549197062187',
              imageUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/images/1761232041164_kc79ut4i55.png',
              videoUrl:
                'https://ve-template-0920.oss-cn-shanghai.aliyuncs.com/creator_center/cases/videos/1761232043393_adklhgtuzy.mp4',
              createAt: '2025-10-23T23:07:24',
              auditStatus: 0,
              updateAt: '2025-10-23T23:07:23',
            },
          ],
          total_count: 1,
          total_pages: 1,
          current_page: 1,
          page_size: 50,
        },
      };
    },
  },
  {
    url: '/openapi/v1/bots/:botID/examples/:exampleID',
    method: 'delete',
    createAtout: 2000,
    response: () => {
      return {
        code: 0,
        msg: '删除案例成功',
      };
    },
  },
] as MockMethod[];
