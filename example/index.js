const elasticlunr = require('../dist/elasticlunr.ja.js');
//const elasticlunr = require('../src/index.js');

// Sample config data
const config = {"doc_urls":["chapter_1.html#サマリー","chapter_2.html#詳細"],"index":{"documentStore":{"docInfo":{"0":{"body":2,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"サマリーをここに書きます Hello world 本","breadcrumbs":"サマリー","id":"0","title":"サマリー"},"1":{"body":"話が長い おさかなを買いました 本","breadcrumbs":"詳細","id":"1","title":"詳細"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"df":0,"docs":{}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}}

// インデックス構築
const index = elasticlunr.Index.load(config.index);
/*
const index = elasticlunr(function(){
    this.use(elasticlunr.jp)
    config.index.fields.forEach(f => {
        this.addField(f)
    });
    this.setRef('id');
})*/

// ドキュメント追加
Object.keys(config.index.documentStore.docs).forEach(key => {
    index.addDoc(config.index.documentStore.docs[key])
});

const r = index.search("おさかな", {
    fields: {
        body: {boost: 2},
    },
    expand: true,
});

console.log(r);
