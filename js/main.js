$(function() {

  var itemAmounts = {
    '25': {
      yardSigns: 2,
      doorHangers: 10,
      phoneCalls: 0
    },
    '50': {
      yardSigns: 4,
      doorHangers: 20,
      phoneCalls: 3
    },
    '100': {
      yardSigns: 8,
      doorHangers: 40,
      phoneCalls: 6
    },
    '250': {
      yardSigns: 20,
      doorHangers: 100,
      phoneCalls: 15
    },
    '500': {
      yardSigns: 40,
      doorHangers: 200,
      phoneCalls: 30
    },
    '1000': {
      yardSigns: 80,
      doorHangers: 400,
      phoneCalls: 60
    },
    '5000': {
      yardSigns: 400,
      doorHangers: 2000,
      phoneCalls: 300
    }
  }

  function updateRequestButtons(value) {
    var mapObject = itemAmounts[value];

    for (var key in mapObject) {
      var quantityText = $('[data-map-key="' + key + '"]').find('.quantity');

      if (mapObject[key] == 0) {
        quantityText.parents('.button').addClass('hidden');
      }
      else {
        quantityText.parents('.button').removeClass('hidden');
        quantityText.text(mapObject[key] + ' ');
      }
    }
  }

  function resetRequestButtons() {
    var quantityText = $('.quantity');
    var hiddenButtons = $('.button.hidden');

    quantityText.empty();
    hiddenButtons.removeClass('hidden');
  }
  
  $('form').on('click', '.button', function(e) {
    var buttons = $(this).parents('.button-set').find('.button');

    if (!$(this).hasClass('selected')) {
      buttons.removeClass('selected');
      $(this).addClass('selected');
    }
    else {
      $(this).removeClass('selected');
    }

    var selectedValue = $('.button.selected').attr('data-amount');

    if (selectedValue !== undefined) {
      updateRequestButtons(selectedValue);
    }
    else {
      resetRequestButtons();
    }

    e.preventDefault();
    e.stopPropagation();  
  });

  $('.spending-categories h4 a').on('click', function(e) {
    var info = $('.category-info');
    var link = $('.more-text');
    var icon = $('.spending-categories').find('i');

    if (!info.hasClass('expanded')) {
      info.slideDown('fast').addClass('expanded');
      link.text('Less');
      icon.removeAttr('class').addClass('fa fa-caret-up');
    }
    else {
      info.slideUp('fast', function() {
        info.removeClass('expanded').removeAttr('style');
        link.text('More');
        icon.removeAttr('class').addClass('fa fa-caret-down');
      });
    }

    e.preventDefault();
    e.stopPropagation();
  });

});