import { getUser } from '../contexts'
import { PERMISSION } from '../constants'

const checkPermission = (permission) =>
  getUser()?.permission?.includes(permission)

const getPermission = () => {
  return {
    canRead() {
      return checkPermission(PERMISSION.READ)
    },
    canCreate() {
      return checkPermission(PERMISSION.CREATE)
    },
    canUpdate() {
      return checkPermission(PERMISSION.UPDATE)
    },
    canDelete() {
      return checkPermission(PERMISSION.DELETE)
    },
  }
}

export { getPermission, checkPermission }
