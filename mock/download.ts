import { MockMethod } from 'vite-plugin-mock';

/** 开发环境设置 VITE_MOCK 时可走本地 mock，验证预览流程 */
export default [
  {
    url: '/openapi/capcut-mate/v1/gen_video_status',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: '成功',
        draft_url:
          'https://capcut-mate.jcaigc.cn/openapi/capcut-mate/v1/get_draft?draft_id=demo',
        status: 'completed',
        progress: 100,
        video_url:
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        error_message: '',
        created_at: '2026-05-07T15:05:33.344351',
        started_at: '2026-05-07T15:05:34.090527',
        completed_at: '2026-05-07T15:07:16.422081',
      };
    },
  },
] as MockMethod[];
