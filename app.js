$(document).ready(() => {
    $('.nav-item').click((event) => {
        $('.nav-item a').removeClass('active')
        const element = $(event.currentTarget).children().eq(0)
        element.addClass('active')
    }) 
})

$(document).ready(() => {
    $('#tabs .btn').click((event) => {
        $('#tabs .btn').removeClass('active')
        const element = $(event.currentTarget)
        element.addClass('active')
    })
})