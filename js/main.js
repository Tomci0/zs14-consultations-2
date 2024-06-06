$(async () => {    
    onPageLoad();
});

function onPageLoad() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // if window is smaller than 768px, hide the sidebar

    if (window.innerWidth < 768) {
        $('#navbar #user #user-data').attr('disabled', 'disabled')
    }
}