import { Modal } from 'antd';

export  function showError(e) {
  return (
    Modal.error({
      title: e.message,
    })
  )
}