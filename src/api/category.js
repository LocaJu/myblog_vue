import request from '@/utils/request'

// 查询分类列表
export function getCategoryList() {
    return request({
        url: '/category/getCategoryList',
        headers: {
          isToken: true,
          token:Storage.token
        },
        method: 'get'
    })
}
