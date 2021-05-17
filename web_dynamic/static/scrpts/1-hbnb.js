$(function () {

    const AmenitiesList = {};
  
    $('div.amenities li input').change(
  
      function () {
  
        if ($(this).is(':checked')) {
          AmenitiesList[($(this).attr('data-id'))] = $(this).attr('data-name');
        } else {
          delete AmenitiesList[($(this).attr('data-id'))];
        }
        $('div.amenities h4').html(Object.values(AmenitiesList).join(', ') || '&nbsp;');
  
      });
  });


