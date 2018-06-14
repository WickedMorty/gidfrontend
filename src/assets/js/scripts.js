$(document).ready(function() {

	$('#sidebarToggle').on('click', function(){
		$(this).closest('#sidebar').toggleClass('active');
	});

	$('.deadline-block :checkbox').on('change', function () {
		var checkbox = $(this);
		var checked = $(checkbox).is(':checked');
		if (checked && $('.deadline-block :checkbox:checked').length != 0) {
			$('.deadline-block :checkbox').not(this).prop('checked', false);
		}
		$('.deadline-block :checkbox').each(function () {
			if ($(this).val() !== $(checkbox).val()) {
				$(this).prop('checked', checked);
			} else {
				return false;
			}
		});
	});
	
});