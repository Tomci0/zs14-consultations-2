$(() => {
    
    // SHOW TEXT AREA ON OTHER AND CHANGE VALUES IN SELECT

    $('input[type=radio][name="reason-entering"]').on('change', function() {
        const value = this.value

        if (value == '3') {
            $('#work-type-select').hide();
            $('#additional-info-input').show();
        } else {
            $('#work-type-select').show();
            $('#additional-info-input').hide();
        }
    });
});