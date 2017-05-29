function show_txt () {

			var textArea = document.getElementById('own_txt');
			var div = document.getElementById('show_txt');


			var text = textArea.value;


			text = text.replace(/\</gi, "<");
			text = text.replace(/\>/gi, ">");


			text = text.replace(/\n/gi, "<br/>");


			text = text.replace(/\[b\]/gi, "<b>");
			text = text.replace(/\[\/b\]/gi, "</b>");

			text = text.replace(/\[i\]/gi, "<i>");
			text = text.replace(/\[\/i\]/gi, "</i>");

			text = text.replace(/\[u\]/gi, "<u>");
			text = text.replace(/\[\/u\]/gi, "</u>");


			div.innerHTML = text;
		}

		function mod_selection (value_1,value_2) {

			var textArea = document.getElementById('own_txt');


			if( -1 != navigator.userAgent.indexOf ("MSIE") ) {

				var range = document.selection.createRange();
				var stored_range = range.duplicate();

				if(stored_range.length > 0) {
					stored_range.moveToElementText(textArea);
					stored_range.setEndPoint('EndToEnd', range);
					textArea.selectionstart = stored_range.text.length - range.text.length;
					textArea.selectionend = textArea.selectionstart + range.text.length;
				}
			}

			if (typeof(textArea.selectionstart) != "undefined") {

				var start = textArea.value.substr(0, textArea.selectionstart);
				var select = textArea.value.substr(textArea.selectionstart, textArea.selectionend - textArea.selectionstart);
				var end = textArea.value.substr(textArea.selectionend);


				textArea.value = start + value_1 + select + value_2 + end;
			}
		}
