$(async (): Promise<void> => {

    // 
    // LOADING ELEMENTS
    // SIDEBAR AND TOPBAR 
    // 

   await loadElement();
})

const loadElement = async (): Promise<void> => {
    return new Promise((resolve, rej) => {
        $('#sidebar').load('/sidebar', () => {
            $('#topbar').load('/topbar', () => {
                resolve();
            })
        })
    }) 
}