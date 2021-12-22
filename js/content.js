$(document).ready(function () {
  $.getJSON("/blog/json/list.json", function (data) {
    // console.log(data)
    getArticle(data)
    getClassify(data)
  })
  function getArticle(data) {
    let list = ""
    data.articleList.forEach(function (item) {
      list +=
        `<li>` +
        `<a href="${item.url}" title="${item.title}">${item.title}</a>` +
        `</li>`
    })
    $("#articleListRight").html(list)
  }
  function getClassify(data) {
    let classifyHtml = ""
    data.classifyList.forEach(function (item) {
      classifyHtml += `<a href="/blog/pages/classify.html?label=${item}">${item}</a>`
    })
    $("#classifyList").html(classifyHtml)
  }
})
