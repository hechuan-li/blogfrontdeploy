(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a6c65b8"],{"42d9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit_wrap wrapper"},[i("div",{staticClass:"backBtn"},[i("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.goBack}},[t._v("Back")])],1),i("div",{staticClass:"edit_title"},[t._v("title:")]),i("el-input",{attrs:{placeholder:"please edit the article title"},model:{value:t.article_title,callback:function(e){t.article_title=e},expression:"article_title"}}),i("div",{staticClass:"edit_title"},[t._v("article content:")]),i("div",{staticClass:"markdown"},[i("mavon-editor",{model:{value:t.article_content,callback:function(e){t.article_content=e},expression:"article_content"}})],1),i("div",{staticClass:"save_btn"},[i("el-button",{attrs:{type:"success",size:"small"},on:{click:t.save}},[t._v("save")])],1)],1)},s=[],c={data:function(){return{article_title:"",article_content:""}},methods:{goBack:function(){this.$router.go(-1)},save:function(){var t=this;"0"===this.$route.params.id?this.$axios.post("/api/article/add",{title:this.article_title,content:this.article_content,user:sessionStorage.getItem("username")}).then((function(e){0===e.data.code&&t.$message({message:"update success",type:"success"}),setTimeout((function(){t.$router.push("/blog")}),1e3)})):this.$axios.post("/api/article/update",{params:{article_id:this.$route.params.id,title:this.article_title,content:this.article_content}}).then((function(t){console.log(t)}))},getDetail:function(){var t=this;this.$axios.get("/api/article/detail",{params:{article_id:this.$route.params.id}}).then((function(e){t.article_title=e.data.article.title,t.article_content=e.data.article.content}))}},created:function(){"0"!==this.$route.params.id&&this.getDetail()}},n=c,l=(i("c68b"),i("2877")),o=Object(l["a"])(n,a,s,!1,null,"0b308397",null);e["default"]=o.exports},"44cb":function(t,e,i){},c68b:function(t,e,i){"use strict";var a=i("44cb"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-0a6c65b8.dd46de2b.js.map