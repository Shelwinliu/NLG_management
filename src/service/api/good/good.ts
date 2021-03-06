import hyRequest from '../../index'
import IDataType from '../type'

export function changeGoodStatus(goodId: number, status: number) {
  return hyRequest.patch<IDataType>({
    url: `/good/status/${goodId}`,
    data: { status },
    method: 'PATCH'
  })
}

export function changeAuditStatus(goodId: number, status: number) {
  return hyRequest.patch<IDataType>({
    url: `/good/audit/${goodId}`,
    data: { status },
    method: 'PATCH'
  })
}
