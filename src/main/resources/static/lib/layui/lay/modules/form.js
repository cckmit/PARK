/** layui-v2.5.4 MIT License By https://www.layui.com */
 ;layui.define("layer",function(e){"use strict";var t=layui.$,i=layui.layer,a=layui.hint(),n=layui.device(),l="form",r=".layui-form",o="layui-this",s="layui-hide",c="layui-disabled",u=function(){this.config={verify:{required:[/[\S]+/,"必填项不能为空"],phone:[/^1\d{10}$/,"请输入正确的手机号"],email:[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"邮箱格式不正确"],url:[/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"],number:function(e){if(!e||isNaN(e))return"只能填写数字"},date:[/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,"日期格式不正确"],identity:[/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,"请输入正确的身份证号"]}}};u.prototype.set=function(e){var i=this;return t.extend(!0,i.config,e),i},u.prototype.verify=function(e){var i=this;return t.extend(!0,i.config.verify,e),i},u.prototype.on=function(e,t){return layui.onevent.call(this,l,e,t)},u.prototype.off=function(e,t){return layui.offevent.call(this,l,e,t)},u.prototype.val=function(e,i){var a=this;if(!i||"string"!=typeof e)return"string"==typeof e?a.getValue(e):a.getValue(null,e);var n=t(r+'[lay-filter="'+e+'"]');n.each(function(e,a){var n=t(this);layui.each(i,function(e,t){var i,a=n.find('[name="'+e+'"]');a[0]&&(i=a[0].type,"checkbox"===i?a[0].checked=t:"radio"===i?a.each(function(){this.value==t&&(this.checked=!0)}):a.val(t))})}),f.render(null,e)},u.prototype.getValue=function(e,i){i=i||t(r+'[lay-filter="'+e+'"]').eq(0);var a={},n={},l=i.find("input,select,textarea");return layui.each(l,function(e,t){if(t.name=(t.name||"").replace(/^\s*|\s*&/,""),t.name){if(/^.*\[\]$/.test(t.name)){var i=t.name.match(/^(.*)\[\]$/g)[0];a[i]=0|a[i],t.name=t.name.replace(/^(.*)\[\]$/,"$1["+a[i]++ +"]")}/^checkbox|radio$/.test(t.type)&&!t.checked||(n[t.name]=t.value)}}),n},u.prototype.render=function(e,i){var n=this,u=t(r+function(){return i?'[lay-filter="'+i+'"]':""}()),d={select:function(e){var i,a="请选择",n="layui-form-select",r="layui-select-title",d="layui-select-none",f="",h=e||u.find("select"),y=function(e,a){t(e.target).parent().hasClass(r)&&!a||(t("."+n).removeClass(n+"ed "+n+"up"),i&&f&&i.val(f)),i=null},p=function(e,a,u){var h,p=t(this),m=e.find("."+r),g=m.find("input"),k=e.find("dl"),x=k.children("dd"),b=this.selectedIndex;if(!a){var C=function(){var t=e.offset().top+e.outerHeight()+5-v.scrollTop(),i=k.outerHeight();b=p[0].selectedIndex,e.addClass(n+"ed"),x.removeClass(s),h=null,x.eq(b).addClass(o).siblings().removeClass(o),t+i>v.height()&&t>=i&&e.addClass(n+"up"),T()},w=function(i){e.removeClass(n+"ed "+n+"up"),g.blur(),h=null,i||$(g.val(),function(e){var i=p[0].selectedIndex;e&&(f=t(p[0].options[i]).html(),0===i&&f===g.attr("placeholder")&&(f=""),g.val(f||""))})},T=function(){var e=k.children("dd."+o);if(e[0]){var t=e.position().top,i=k.height(),a=e.height();t>i&&k.scrollTop(t+k.scrollTop()-i+a-5),t<0&&k.scrollTop(t+k.scrollTop()-5)}};m.on("click",function(t){e.hasClass(n+"ed")?w():(y(t,!0),C()),k.find("."+d).remove()}),m.find(".layui-edge").on("click",function(){g.focus()}),g.on("keyup",function(e){var t=e.keyCode;9===t&&C()}).on("keydown",function(e){var t=e.keyCode;9===t&&w();var i=function(t,a){var n,l;e.preventDefault();var r=function(){var e=k.children("dd."+o);if(k.children("dd."+s)[0]&&"next"===t){var i=k.children("dd:not(."+s+",."+c+")"),n=i.eq(0).index();if(n>=0&&n<e.index()&&!i.hasClass(o))return i.eq(0).prev()[0]?i.eq(0).prev():k.children(":last")}return a&&a[0]?a:h&&h[0]?h:e}();return l=r[t](),n=r[t]("dd:not(."+s+")"),l[0]?(h=r[t](),n[0]&&!n.hasClass(c)||!h[0]?(n.addClass(o).siblings().removeClass(o),void T()):i(t,h)):h=null};38===t&&i("prev"),40===t&&i("next"),13===t&&(e.preventDefault(),k.children("dd."+o).trigger("click"))});var $=function(e,i,a){var n=0;layui.each(x,function(){var i=t(this),l=i.text(),r=l.indexOf(e)===-1;(""===e||"blur"===a?e!==l:r)&&n++,"keyup"===a&&i[r?"addClass":"removeClass"](s)});var l=n===x.length;return i(l),l},q=function(e){var t=this.value,i=e.keyCode;return 9!==i&&13!==i&&37!==i&&38!==i&&39!==i&&40!==i&&($(t,function(e){e?k.find("."+d)[0]||k.append('<p class="'+d+'">无匹配项</p>'):k.find("."+d).remove()},"keyup"),""===t&&k.find("."+d).remove(),void T())};u&&g.on("keyup",q).on("blur",function(e){var a=p[0].selectedIndex;i=g,f=t(p[0].options[a]).html(),0===a&&f===g.attr("placeholder")&&(f=""),setTimeout(function(){$(g.val(),function(e){f||g.val("")},"blur")},200)}),x.on("click",function(){var i=t(this),a=i.attr("lay-value"),n=p.attr("lay-filter");if(i.hasClass(c))return!1;i.hasClass("layui-select-tips")?g.val(""):(g.val(i.text()),i.addClass(o)),i.siblings().removeClass(o);var r=p.val();return p.val(a).removeClass("layui-form-danger"),layui.event.call(this,l,"select("+n+")",{elem:p[0],value:a,othis:e}),w(!0),r!==a&&p.trigger("change"),!1}),e.find("dl>dt").on("click",function(e){return!1}),t(document).off("click",y).on("click",y)}};h.each(function(e,i){var l=t(this),s=l.next("."+n),u=this.disabled,d=i.value,f=t(i.options[i.selectedIndex]),h=i.options[0];if("string"==typeof l.attr("lay-ignore"))return l.show();var v="string"==typeof l.attr("lay-search"),y=h?h.value?a:h.innerHTML||a:a,m=t(['<div class="'+(v?"":"layui-unselect ")+n,(u?" layui-select-disabled":"")+'">','<div class="'+r+'">','<input type="text" placeholder="'+y+'" '+('value="'+(d?f.html():"")+'"')+(v?"":" readonly")+' class="layui-input'+(v?"":" layui-unselect")+(u?" "+c:"")+'">','<i class="layui-edge"></i></div>','<dl class="layui-anim layui-anim-upbit'+(l.find("optgroup")[0]?" layui-select-group":"")+'">',function(e){var t=[];return layui.each(e,function(e,i){0!==e||i.value?"optgroup"===i.tagName.toLowerCase()?t.push("<dt>"+i.label+"</dt>"):t.push('<dd lay-value="'+i.value+'" class="'+(d===i.value?o:"")+(i.disabled?" "+c:"")+'">'+i.innerHTML+"</dd>"):t.push('<dd lay-value="" class="layui-select-tips">'+(i.innerHTML||a)+"</dd>")}),0===t.length&&t.push('<dd lay-value="" class="'+c+'">没有选项</dd>'),t.join("")}(l.find("*"))+"</dl>","</div>"].join(""));s[0]&&s.remove(),l.after(m),p.call(this,m,u,v)})},checkbox:function(e){var i={checkbox:["layui-form-checkbox","layui-form-checked","checkbox"],_switch:["layui-form-switch","layui-form-onswitch","switch"]},a=e||u.find("input[type=checkbox]"),n=function(e,i){var a=t(this);e.on("click",function(){var t=a.attr("lay-filter"),n=(a.attr("lay-text")||"").split("|");a[0].disabled||"switch"===i[2]&&layui.event.call(a[0],l,"beforeSwitch("+t+")",{elem:a[0],value:a[0].value,othis:e})===!1||(a[0].checked?(a[0].checked=!1,e.removeClass(i[1]).find("em").text(n[1])):(a[0].checked=!0,e.addClass(i[1]).find("em").text(n[0])),layui.event.call(a[0],l,i[2]+"("+t+")",{elem:a[0],value:a[0].value,othis:e}),a.trigger("change"))})};a.each(function(e,a){var l=t(this),r=l.attr("lay-skin"),o=(l.attr("lay-text")||"").split("|"),s=this.disabled;"switch"===r&&(r="_"+r);var u=i[r]||i.checkbox;if("string"==typeof l.attr("lay-ignore"))return l.show();var d=l.next("."+u[0]),f=t(['<div class="layui-unselect '+u[0],a.checked?" "+u[1]:"",s?" layui-checkbox-disbaled "+c:"",'"',r?' lay-skin="'+r+'"':"",">",function(){var e=a.title.replace(/\s/g,""),t={checkbox:[e?"<span>"+a.title+"</span>":"",'<i class="layui-icon layui-icon-ok"></i>'].join(""),_switch:"<em>"+((a.checked?o[0]:o[1])||"")+"</em><i></i>"};return t[r]||t.checkbox}(),"</div>"].join(""));d[0]&&d.remove(),l.after(f),n.call(this,f,u)})},radio:function(e){var i="layui-form-radio",a=["&#xe643;","&#xe63f;"],n=e||u.find("input[type=radio]"),o=function(e){var n=t(this),o="layui-anim-scaleSpring";e.on("click",function(){var s=n[0].name,c=n.parents(r),u=n.attr("lay-filter"),d=c.find("input[name="+s.replace(/(\.|#|\[|\])/g,"\\$1")+"]");if(!n[0].disabled){var f=n[0].checked;layui.each(d,function(){var e=t(this).next("."+i);this.checked=!1,e.removeClass(i+"ed"),e.find(".layui-icon").removeClass(o).html(a[1])}),n[0].checked=!0,e.addClass(i+"ed"),e.find(".layui-icon").addClass(o).html(a[0]),layui.event.call(n[0],l,"radio("+u+")",{elem:n[0],value:n[0].value,othis:e}),f||n.trigger("change")}})};n.each(function(e,n){var l=t(this),r=l.next("."+i),s=this.disabled;if("string"==typeof l.attr("lay-ignore"))return l.show();r[0]&&r.remove();var u=t(['<div class="layui-unselect '+i,n.checked?" "+i+"ed":"",(s?" layui-radio-disbaled "+c:"")+'">','<i class="layui-anim layui-icon">'+a[n.checked?0:1]+"</i>","<div>"+function(){var e=n.title||"";return"string"==typeof l.next().attr("lay-radio")&&(e=l.next().html(),l.next().remove()),e}()+"</div>","</div>"].join(""));l.after(u),o.call(this,u)})}};return e&&"string"!=typeof e?e.each(function(e,i){var a=t(i);a.closest(r).length&&("SELECT"===i.tagName?d.select(a):"INPUT"===i.tagName&&("checkbox"===i.type?d.checkbox(a):"radio"===i.type&&d.radio(a)))}):e?d[e]?d[e]():a.error("不支持的"+e+"表单渲染"):layui.each(d,function(e,t){t()}),n};var d=function(){var e=null,a=f.config.verify,o="layui-form-danger",s={},c=t(this),u=c.parents(r),d=u.find("*[lay-verify]"),h=c.parents("form")[0],v=c.attr("lay-filter");return layui.each(d,function(l,r){var s=t(this),c=s.attr("lay-verify").split("|"),u=s.attr("lay-verType"),d=s.val();if(s.removeClass(o),layui.each(c,function(t,l){var c,f="",h="function"==typeof a[l];if(a[l]){var c=h?f=a[l](d,r):!a[l][0].test(d);if(f=f||a[l][1],"required"===l&&(f=s.attr("lay-reqText")||f),c)return"tips"===u?i.tips(f,function(){return"string"==typeof s.attr("lay-ignore")||"select"!==r.tagName.toLowerCase()&&!/^checkbox|radio$/.test(r.type)?s:s.next()}(),{tips:1}):"alert"===u?i.alert(f,{title:"提示",shadeClose:!0}):i.msg(f,{icon:5,shift:6}),n.android||n.ios||setTimeout(function(){r.focus()},7),s.addClass(o),e=!0}}),e)return e}),!e&&(s=f.getValue(null,u),layui.event.call(this,l,"submit("+v+")",{elem:this,form:h,field:s}))},f=new u,h=t(document),v=t(window);f.render(),h.on("reset",r,function(){var e=t(this).attr("lay-filter");setTimeout(function(){f.render(null,e)},50)}),h.on("submit",r,d).on("click","*[lay-submit]",d),e(l,f)});