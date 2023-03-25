import Vue from 'vue'
import Clipboard from 'clipboard'
// 复制剪切
function clipboardSuccess() {
    Vue.prototype.$toasted.success('复制成功');
}

function clipboardError() {
    Vue.prototype.$toasted.error('复制失败');
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
