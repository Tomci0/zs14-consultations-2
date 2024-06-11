$(async () => {


    // LOAD ELEMENTS
    await loadElements();

    console.log($('.dropdown-center'))

    $('#notification-dropdown').on('shown.bs.dropdown', () => {
        $('#notification-dropdown').addClass('active')
    });

    $('#notification-dropdown').on('hidden.bs.dropdown', () => {
        $('#notification-dropdown').removeClass('active')
    });
})

// CREATE PROMISE FUNCTION 

const loadElements = () => {
    // CREATE PROMISE FUNCTION 

    return new Promise((resolve, reject) => {
        // LOAD ELEMENTS
        $('#sidebar').load('/sidebar', () => {
            $('#topbar').load('/topbar', () => {
                resolve();
            })
        });
    })
}