(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["admin/app"];var n=t.n(o);const s=flarum.core.compat["common/Model"];var a=t.n(s);const r=flarum.core.compat["common/models/Forum"];var i=t.n(r);function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e)}var c=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).id=a().attribute("id"),e.service=a().attribute("service"),e.url=a().attribute("url"),e.error=a().attribute("error"),e.events=a().attribute("events"),e.tagIds=a().attribute("tag_id"),e.groupId=a().attribute("group_id"),e.extraText=a().attribute("extra_text"),e.isValid=a().attribute("is_valid",Boolean),e.usePlainText=a().attribute("use_plain_text",Boolean),e.maxPostContentLength=a().attribute("max_post_content_length"),e}u(e,t);var o=e.prototype;return o.apiEndpoint=function(){return"/fof/webhooks"+(this.exists?"/"+this.data.id:"")},o.tags=function(){return this.tagIds().map((function(t){return n().store.getById("tags",t)}))},e}(a());const h=flarum.core.compat["admin/components/ExtensionPage"];var d=t.n(h);const b=flarum.core.compat["common/utils/Stream"];var p=t.n(b);const f=flarum.core.compat["common/utils/withAttr"];var g=t.n(f);const v=flarum.core.compat["common/components/Button"];var k=t.n(v);const w=flarum.core.compat["common/components/Select"];var x=t.n(w);const y=flarum.core.compat["common/components/LoadingIndicator"];var _=t.n(y);const N=flarum.core.compat["common/Component"];var W=t.n(N);const T=flarum.core.compat["common/components/Dropdown"];var P=t.n(T);const C=flarum.core.compat["common/components/Alert"];var B=t.n(C);const O=flarum.core.compat["tags/common/helpers/tagsLabel"];var I=t.n(O);const F=flarum.core.compat["tags/common/components/TagSelectionModal"];var L=t.n(F);const D=flarum.core.compat["common/components/Switch"];var S=t.n(D);const j=flarum.core.compat["common/helpers/icon"];var E=t.n(j);const M=flarum.core.compat["common/models/Group"];var z=t.n(M);const A=flarum.core.compat["common/components/Modal"];var U=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.webhook=this.attrs.webhook;var o,s,a,r,i=n().data["fof-webhooks.events"];this.groupId=p()(this.webhook.groupId()||z().GUEST_ID),this.extraText=p()(this.webhook.extraText()||""),this.usePlainText=p()(this.webhook.usePlainText()),this.maxPostContentLength=p()(this.webhook.maxPostContentLength()),this.events=(o=i.reduce((function(t,e){console.log(e);var o=/((?:[a-z]\\?)+?)\\Events?\\([a-z]+)/i.exec(e);if(!o)return t.other.push({full:e,name:e}),t.other=t.other.sort(),t;var n=o[1].toLowerCase().replaceAll("\\",".");return t[n]||(t[n]=[]),t[n]=t[n].concat({full:e,name:o[2]}).sort(),t}),{other:[]}),s=function(t){return t.split(".")[0]},a=Object.keys(o),r=Object.values(o),a.map(s).reduce((function(t,e,o){return t[e]||(t[e]={}),t[e][a[o]]=r[o],t}),{}))},o.className=function(){return"Modal--medium"},o.title=function(){return n().translator.trans("fof-webhooks.admin.settings.modal.title")},o.content=function(){var t=this,e={2:"fas fa-globe",3:"fas fa-user"},o=n().store.getById("groups",this.groupId());return m("div",{className:"FofWebhooksModal Modal-body"},m("form",{className:"Form",onsubmit:this.onsubmit.bind(this)},m(S(),{state:this.usePlainText(),onchange:this.usePlainText},n().translator.trans("fof-webhooks.admin.settings.modal.use_plain_text_label")),m("div",{className:"Form-group"},m("label",{className:"label"},n().translator.trans("fof-webhooks.admin.settings.modal.max_post_content_length_label")),m("p",{className:"helpText"},n().translator.trans("fof-webhooks.admin.settings.modal.max_post_content_length_help")),m("input",{type:"number",min:"0",className:"FormControl",bidi:this.maxPostContentLength,onkeypress:this.onkeypress.bind(this)})),m("div",{className:"Form-group hasLoading"},m("label",{className:"label"},n().translator.trans("fof-webhooks.admin.settings.modal.extra_text_label")),m("p",{className:"helpText"},n().translator.trans("fof-webhooks.admin.settings.modal.extra_text_help")),m("input",{type:"text",className:"FormControl",bidi:this.extraText,onkeypress:this.onkeypress.bind(this)})),m("div",{className:"Form-group"},m("label",{className:"label"},n().translator.trans("fof-webhooks.admin.settings.modal.group_label")),m("p",{className:"helpText"},n().translator.trans("fof-webhooks.admin.settings.modal.group_help")),m(P(),{label:[E()(o.icon()||e[o.id()]),o.namePlural()],buttonClassName:"Button Button--danger"},n().store.all("groups").filter((function(t){return["1","2"].includes(t.id())})).map((function(n){return m(k(),{active:o.id()===n.id(),disabled:o.id()===n.id(),icon:n.icon()||e[n.id()],onclick:function(){return t.groupId(n.id())}},n.namePlural())})))),m("div",{className:"Form-group Webhook-events"},m("label",{className:"label"},n().translator.trans("fof-webhooks.admin.settings.modal.events_label")),n().translator.trans("fof-webhooks.admin.settings.modal.description"),Object.entries(this.events).map((function(e){var o=e[1];return m("div",null,Object.entries(o).sort((0,function(t,e){var o=t[0].toUpperCase(),n=e[0].toUpperCase();return o<n?-1:o>n?1:0})).map((function(e){var o=e[0],n=e[1];return n.length?m("div",null,m("h3",null,t.translate(o)),n.map((function(e){return m(S(),{state:t.webhook.events().includes(e.full),onchange:t.onchange.bind(t,e.full)},t.translate(o,e.name.toLowerCase()))}))):null})))}))),m("div",{className:"Form-group"},m(k(),{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.isDirty()},n().translator.trans("core.admin.settings.submit_button")))))},o.translate=function(t,e){return void 0===e&&(e="title"),n().translator.trans("fof-webhooks.admin.settings.actions."+t+"."+e)},o.isDirty=function(){return this.extraText()!=this.webhook.extraText()||this.groupId()!==this.webhook.groupId()||this.usePlainText()!==this.webhook.usePlainText()||this.maxPostContentLength()!=this.webhook.maxPostContentLength()},o.onsubmit=function(t){var e=this;return t.preventDefault(),this.loading=!0,this.webhook.save({extraText:this.extraText(),group_id:this.groupId(),use_plain_text:this.usePlainText(),max_post_content_length:this.maxPostContentLength()||0}).then((function(){e.loading=!1,m.redraw()})).catch((function(){e.loading=!1,m.redraw()}))},o.onkeypress=function(t){"Enter"===t.key&&this.onsubmit(t)},o.onchange=function(t,e,o){o.loading=!0;var n=this.webhook.events();return e?n.push(t):n.splice(n.indexOf(t),1),this.attrs.updateWebhook(n).then((function(){o.loading=!1,m.redraw()}))},e}(t.n(A)()),G=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.webhook=this.attrs.webhook,this.services=this.attrs.services,this.url=p()(this.webhook.url()),this.service=p()(this.webhook.service()),this.events=p()(this.webhook.events()),this.error=p()(this.webhook.error()),this.loading={}},o.view=function(){var t=this,e=this.webhook,o=this.services,s=n().initializers.has("flarum-tags"),a=e.tags().filter(Boolean),r=e.service(),i=[e.error&&e.error()];o[r]?e.isValid()?s||0===e.tags().length?a.length!==e.attribute("tag_id").length&&i.push(n().translator.trans("fof-webhooks.admin.errors.tag_invalid")):i.push(n().translator.trans("fof-webhooks.admin.errors.tag_disabled")):i.push(n().translator.trans("fof-webhooks.admin.errors.url_invalid")):i.push(n().translator.trans("fof-webhooks.admin.errors.service_not_found",{service:r}));var l=function(){return n().modal.show(L(),{selectedTags:a,onsubmit:function(e){return t.update("tag_id")(e.map((function(t){return t.id()})))}})};return m("div",{className:"Webhooks--row","data-webhook-id":e.id()},m("div",{className:"Webhook-input"},m(x(),{options:o,value:r,onchange:this.update("service"),disabled:this.loading.service}),m("input",{className:"FormControl Webhook-url",type:"url",value:this.url(),onchange:g()("value",this.update("url")),disabled:this.loading.url,placeholder:n().translator.trans("fof-webhooks.admin.settings.help.url")}),s&&(a.length?I()(a,{onclick:l}):m("span",{className:"TagsLabel",onclick:l},n().translator.trans("fof-webhooks.admin.settings.item.tag_any_label"))),m(k(),{type:"button",className:"Button Webhook-button",icon:"fas fa-edit",onclick:function(){return n().modal.show(U,{webhook:e,updateWebhook:t.update("events")})}}),m(k(),{type:"button",className:"Button Button--warning Webhook-button",icon:"fas fa-times",onclick:this.delete.bind(this)})),!this.events().length&&m(B(),{className:"Webhook-error",dismissible:!1},n().translator.trans("fof-webhooks.admin.settings.help.disabled")),i.filter(Boolean).map((function(t){return m(B(),{className:"Webhook-error",type:"error",dismissible:!1},n().translator.trans(t))})))},o.update=function(t){var e=this;return function(o){var n;return e.loading[t]=!0,e.webhook.save((n={},n[t]=o,n)).catch((function(){})).then((function(){e.loading[t]=!1,e[t]&&e[t](o),m.redraw()}))}},o.delete=function(){return this.webhook.delete().then((function(){return m.redraw()}))},e}(W()),V=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.values={},this.services=n().data["fof-webhooks.services"].reduce((function(t,e){return t[e]=n().translator.trans("fof-webhooks.admin.settings.services."+e),t}),{}),this.newWebhook={service:p()("discord"),url:p()(""),loading:p()(!1)},this.loadingData=p()(!0)},o.oncreate=function(e){var o=this;t.prototype.oncreate.call(this,e),Promise.all([n().store.find("fof/webhooks"),this.isTagsEnabled()&&n().store.find("tags")]).then((function(){o.loadingData(!1),m.redraw()}))},o.content=function(){var t=this,e=n().store.all("webhooks");return this.loadingData()?m(_(),null):m("div",{className:"WebhookContent"},m("div",{className:"container"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"boolean",setting:"fof-webhooks.debug",label:n().translator.trans("fof-webhooks.admin.settings.debug_label"),help:n().translator.trans("fof-webhooks.admin.settings.debug_help"),loading:this.loading,onchange:this.updateDebug.bind(this)})),m("hr",null),m("form",null,m("p",{className:"helpText"},n().translator.trans("fof-webhooks.admin.settings.help.general")),this.isTagsEnabled()&&m("p",{className:"helpText"},n().translator.trans("fof-webhooks.admin.settings.help.tags")),m("fieldset",null,m("div",{className:"Webhooks--Container"},e.map((function(e){return m(G,{webhook:e,services:t.services})})),m("div",{className:"Webhooks--row"},m("div",{className:"Webhook-input"},m(x(),{options:this.services,value:this.newWebhook.service(),onchange:this.newWebhook.service}),m("input",{className:"FormControl Webhook-url",type:"url",placeholder:n().translator.trans("fof-webhooks.admin.settings.help.url"),onchange:g()("value",this.newWebhook.url),onkeypress:this.onkeypress.bind(this)}),m(k(),{type:"button",loading:this.newWebhook.loading(),className:"Button Button--warning Webhook-button",icon:"fas fa-plus",onclick:this.addWebhook.bind(this)}))))))))},o.addWebhook=function(){var t=this;if(!this.newWebhook.loading())return this.newWebhook.loading(!0),n().store.createRecord("webhooks").save({service:this.newWebhook.service(),url:this.newWebhook.url()}).then((function(){t.newWebhook.service("discord"),t.newWebhook.url(""),t.newWebhook.loading(!1),m.redraw()})).catch((function(){t.newWebhook.loading(!1),m.redraw()}))},o.onkeypress=function(t){"Enter"===t.key&&this.addWebhook()},o.changed=function(){var t=this;return this.fields.some((function(e){return t.values[e]()!==(n().data.settings[t.addPrefix(e)]||"")}))},o.isTagsEnabled=function(){return!!flarum.extensions["flarum-tags"]},o.updateDebug=function(t){return this.setting("fof-webhooks.debug")(t),this.saveSettings(new Event(null))},e}(d());n().initializers.add("behzadbabaei/webhooks",(function(){n().store.models.webhooks=c,i().prototype.webhooks=a().hasMany("webhooks"),n().extensionData.for("fof-webhooks").registerPage(V),n().extensionData.for("behzadbabaei-webhooks").registerPage(V)}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map