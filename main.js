// function createToast(type = 'info', title = '', msg = '', duration = 3000) {

// }

// createToast(type, title, msg, duration)

function createToast({
    type = 'info',
    title = '',
    msg = '',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div')
        toast.classList.add('toast', `toast--${type}`)

        const delay = (duration/1000).toFixed(2);
        toast.style.animation = `FadeInLeft ease 0.5s, FadeOut linear 1s ${delay}s forwards`

        //autoRemoveAnimation
        const timeRemove = duration + 1000
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, timeRemove)

        //removeOnClick
        toast.onclick = function(e){
            if(e.target.closest('.close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icons = {
            success: 'bx bxs-check-circle',
            info: 'bx bxs-info-circle',
            warning: 'bx bxs-error',
            error: 'bx bxs-error',
        }
        const icon = icons[type]

        toast.innerHTML = `
            <div class="type">
                <i class='${icon}'></i>
            </div>
            <div class="body">
                <div class="title">${title}</div>
                <div class="msg">${msg}</div>
            </div>
            <div class="close">
                <i class='bx bx-x'></i>
            </div>
            `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    createToast({
        type: 'success',
        title: 'Thành công!',
        msg: 'Bạn đã đăng nhập thành công tại F8.',
        duration: 3000
    })
}

function showErrorToast() {
    createToast({
        type: 'error',
        title: 'Thất bại!',
        msg: 'Vui lòng liên hệ quản trị viên để được hỗ trợ.',
        duration: 1000
    })
}

