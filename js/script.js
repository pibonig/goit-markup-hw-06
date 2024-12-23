const orderModal = $(".order-modal")
const mobileMenu = $(".mobile-menu")

$("[modal-open]").click(function () {
    orderModal.show()
})

$("[menu-open]").click(function () {
    mobileMenu.show()
})

$("[modal-close]").click(function () {
    orderModal.hide()
    mobileMenu.hide()
})

$(orderModal).click(function ({target}) {
    if (!($(".modal".is(target)) && $(".modal".has(target).length === 0) {
        orderModal.hide()
    }
})

$(mobileMenu).click(function ({target}) {
    if (!($(".modal".is(target)) && $(".modal".has(target).length === 0) {
        mobileMenu.hide()
    }
})
