!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=4)}({"1o8J":function(e,t){function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}window.urlAjaxHandlerCms=_SERVER_PATH+"/admin/api/",window.curItem,window.Cms=function(){function e(e,t){return new Cropper(e,t)}function t(e,t,o){var a=t.getCroppedCanvas(o),n=o.format||"jpeg";n="image/"+n,$("#cropper-data-"+e).val(a.toDataURL(n)),$("#cropper-preview-image-"+e).attr("src",a.toDataURL(n)),$("#cropper-filename-"+e).val(t.uploadedImageName)}function a(e){var t=e.data;$("images"==t?"#simpleGallery":"#simpleDocGallery").load(urlAjaxHandlerCms+"updateHtml/"+t+"/"+_CURMODEL+"/"+$("#itemId").val())}return{init:function(){var e;$('[data-toggle="tooltip"]').tooltip(),jQuery(".popovers").popover(),jQuery(".popovers-show").popover("show"),jQuery(".popovers-hide").popover("hide"),jQuery(".popovers-toggle").popover("toggle"),jQuery(".popovers-destroy").popover("destroy"),jQuery('[data-toggle="buttons-radio"]').button(),$(":input[data-list-value]").on("change",(function(){var e=$(this).val(),t=$(this).data("list-value").split("_"),o=$(this).data("list-name");$(this).is(":checkbox")&&(e=$(this).is(":checked")?1:0),$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+t[0]+"/"+t[1],data:{model:t[0],field:o,value:e},type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success")},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})})),$("[data-list-boolean]").on("click",(function(){var e=$(this).data("list-boolean").split("_"),t=$(this).data("list-name"),o=$(this).find(".bool-on"),a=$(this).find(".bool-off"),n=o.hasClass("d-none")?1:0;$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+e[0]+"/"+e[1],data:{model:e[0],field:t,value:n},type:"GET",dataType:"json",cache:!1,success:function(e){o.toggleClass("d-none"),a.toggleClass("d-none"),$.notify(e.message,"success")},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})})),$('[data-role="delete-item"]').on("click",(function(e){e.preventDefault();var t=this;bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(e){e&&(location.href=t.href)}))})),$('input[type="checkbox"].custom-control-input').on("change",(function(){$("input.custom-control-input:checked").length>0?$("#toolbar_deleteButtonHandler").stop().fadeIn():$("#toolbar_deleteButtonHandler").stop().fadeOut()})),$("#toolbar_editButtonHandler").on("click",(function(e){e.preventDefault(),location.href=$("#row_"+curItem+' [data-role="edit-item"] ')[0].href})),$("#toolbar_deleteButtonHandler").on("click",(function(e){e.preventDefault(),bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(e){e&&($('input[type="checkbox"].custom-control-input:checked').each((function(){$("#row_"+$(this).val()).fadeOut("1000"),deleteUrl=$("#row_"+$(this).val()+' [data-role="delete-item"] ')[0].href,curModel=_CURMODEL,$.ajax({url:urlAjaxHandlerCms+"delete/"+curModel+"/"+$(this).val(),type:"GET",dataType:"json",cache:!1,error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})})),$.notify("Selected items have been deleted"))}))})),jQuery("div.flash").not(".alert-important").delay(1500).slideUp(),jQuery(".list-toggle").on("click",(function(){jQuery(this).toggleClass("active")})),$("#sidebar").on("click",(function(e){e.stopPropagation()})),$("html, body").on("click",(function(){$("#sidebar").removeClass("open")})),e=$("header").outerHeight()+30,document.addEventListener("invalid",(function(t){$(t.target).addClass("invalid"),$("html, body").animate({scrollTop:$($(".invalid")[0]).offset().top-e},0)}),!0),document.addEventListener("change",(function(e){$(e.target).removeClass("invalid")}),!0)},initDatePicker:function(){$(".datepicker").datepicker({dateFormat:"dd-mm-yy"})},initUploadifiveSingle:function(){$(".file_upload_single").each((function(){var e=$(this);e.uploadifive({auto:!0,queueID:"queue_"+e.data("key"),uploadScript:urlAjaxHandlerCms+"uploadifiveSingle",onAddQueueItem:function(){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(t,o){var a=jQuery.parseJSON(o).filename;$('[name="'+e.data("key")+'"]').val(a)}})}))},initUploadifiveMedia:function(){var e=$("#file_upload_media");e.uploadifive({auto:!0,queueID:"queue_media",uploadScript:urlAjaxHandlerCms+"uploadifiveMedia",onAddQueueItem:function(){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(e,t){var o=jQuery.parseJSON(t);if("ko"==o.status){alert(o.error);var n='<span style ="color:red"> '.concat(o.error,"</span>");$(".fileinfo").html(n)}else a(o)}})},initTinymce:function(){var e;tinymce.init((o(e={selector:"textarea.wyswyg",plugins:["advlist autolink lists link image charmap print preview anchor textcolor colorpicker","searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste hr pagebreak help wordcount"],pagebreak_split_block:!0,branding:!1,file_picker_types:"image",images_upload_url:"/admin/api/upload-media-tinymce",images_upload_base_path:"/media/images/tinymce",convert_urls:!1,height:200,toolbar:"insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link | code | pagebreak"},"convert_urls",!1),o(e,"allow_unsafe_link_target",!0),o(e,"images_upload_handler",(function(e,t,o){var a,n;(a=new XMLHttpRequest).withCredentials=!1,a.open("POST","/admin/api/upload-media-tinymce"),a.onload=function(){var e;200==a.status?(e=JSON.parse(a.responseText))&&"string"==typeof e.location?t(e.location):o("Invalid JSON: "+a.responseText):o("HTTP Error: "+a.status)},(n=new FormData).append("file",e.blob(),e.filename()),n.append("_token",$('meta[name="csrf-token"]').attr("content")),a.send(n)})),e))},initColorPicker:function(){$(".color-picker").colorpicker({format:"hex"})},initFiles:function(){$(".form-file").find('input[type="file"]').each((function(){var e=$(this),t=e.siblings("label").first();e.on("change",(function(){Cms.updateFile(e,t)})),e.on("focus",(function(){e.addClass("has-focus")})),e.on("blur",(function(){e.removeClass("has-focus")}))}))},updateFile:function(e,t){var o="";files=e[0].files,(o=files&&files.length>1?(e.data("selected-caption")||"").replace("{count}",files.length):e.val().split("\\").pop())?t.html(o):t.html(e.data("empty-caption"))},initSortableList:function(e){$(e).sortable({revert:!0,items:"li:not(.sort-disabled)",update:function(){var t=$(e).sortable("serialize");$("#info").load(urlAjaxHandlerCms+"updateMediaSortList?"+t)}}),$("ul#simpleGallery").disableSelection()},initImageRelationList:function(){$("[data-image-relation]").on("click",(function(){var e=$(this).data("image-relation"),t=$(this).data("image-id");$("#"+e).val(t),$('[data-image-relation="'+e+'"]').each((function(){$(this).removeClass("active"),$(this).addClass("inactive")})),$(this).addClass("active")}))},initMediaModal:function(){$(document).on("submit","#media-edit-form",(function(e){e.preventDefault();var t=$(this).serializeArray(),o={};$.each(t,(function(e,t){o[t.name]=t.value})),$("#media_category_id option:selected").val()?media_category_title=$("#media_category_id option:selected").text():media_category_title="",$.ajax({type:"POST",dataType:"json",url:$(this).attr("action"),data:$(this).serialize(),success:function(e){var t='<div class="alert alert-info"><ul>';t+="<li>".concat(e.status,"</li>"),t+="</ul></div>",$("#errorBox").html(t),$(".modal-body").animate({scrollTop:0},200);var a="#box_media_"+o.id;$(a+" .media-title").text(o.title),$(a+" .media-category").text(media_category_title)},error:function(e){var t=e.responseJSON,o='<div class="alert alert-danger"><ul>';$.each(t.errors,(function(e,t){o+="<li>".concat(t,"</li>")})),o+="</ul></div>",$("#errorBox").html(o),$(".modal-body").animate({scrollTop:0},200)}})}))},initDateTimePicker:function(){$(".datetimepicker").datetimepicker({controlType:"select",oneLine:!0,dateFormat:"dd-mm-yy",timeFormat:"HH:mm:ss",hourMin:6,hourMax:22})},deleteImages:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(t){var o=e.id.split("-"),a=o[1],n=$("#box_"+o[1]+"_"+o[2]),i=$(e).data("locale");t&&$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+_CURMODEL+"/"+o[2],data:{model:_CURMODEL,field:a,value:"",locale:i},type:"GET",dataType:"json",cache:!1,success:function(e){$("input[name="+o[1]+"]").val(""),$.notify(e.message,"success"),n.hide()},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})}))},deleteItem:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(t){var o=e.id.split("_"),a=$("#box_"+o[1]+"_"+o[2]);t&&$.ajax({url:urlAjaxHandlerCms+"delete/"+o[1]+"/"+o[2],type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success"),a.hide()},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})}))},initCropper:function(o,n,i){var r=document.getElementById("cropper-container-"+o),l=e(r,n);$("#cropper-upload-"+o).on("change",(function(){var t=this.files;if(l&&t&&t.length){var a=t[0];/^image\/(png|jpeg|gif)/.test(a.type)?(l.uploadedImageURL&&URL.revokeObjectURL(l.uploadedImageURL),$("#cropper-toolbar-"+o).addClass("visible"),r.src=URL.createObjectURL(a),l.destroy(),(l=e(r,n)).uploadedImageType=a.type,l.uploadedImageName=a.name,l.uploadedImageURL=r.src):window.alert("Please choose an image file.")}else $("#cropper-toolbar-"+o).removeClass("visible")})),$("#cropper-zoom-in-"+o).on("click",(function(e){e.preventDefault(),l&&(l.zoom(.1),setTimeout((function(){t(o,l,i)}),100))})),$("#cropper-zoom-out-"+o).on("click",(function(e){e.preventDefault(),l&&(l.zoom(-.1),setTimeout((function(){t(o,l,i)}),100))})),$("#cropper-save-"+o).on("click",(function(e){e.preventDefault(),l&&(t(o,l,i),$.ajax({url:urlAjaxHandlerCms+"cropperMedia",type:"POST",data:{id:$("#itemId").val(),image:$("#cropper-data-"+o).val(),filename:$("#cropper-filename-"+o).val(),myImgType:$("#myImgType").val(),model:_CURMODEL,_token:$('meta[name="csrf-token"]').attr("content")}}).done((function(e){a(e),l.destroy(),r.src="",$("#cropper-upload-"+o).val("").trigger("change")})).fail((function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)})))})),r.addEventListener("cropend",(function(){t(o,l,i)})),r.addEventListener("ready",(function(){t(o,l,i)}))}}}()},4:function(e,t,o){e.exports=o("1o8J")}});