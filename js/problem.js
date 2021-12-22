$(document).ready(function () {
  // 提交搜索数据
  $("#submit").on("click", function () {
    let val = $("#keyboard").val()
    // console.log(val)
    $.getJSON("/json/problemList.json", function (data) {
      // console.log(data)
      getArticle(data, val)
    })
  })

  $.getJSON("/json/problemList.json", function (data) {
    // console.log(data)
    getArticle(data)
    getClassify(data)
  })
  function getArticle(data, val) {
    let articleHtml = ""
    let list = ""
    if (val) {
      data.articleList.forEach(function (item) {
        if (item.title.indexOf(val) >= 0) {
          articleHtml +=
            `<li class="blogs_list">` +
            `<a href="${item.url}">` +
            `<em>${item.label}</em>` +
            `<i><img src="${item.thumb}" alt="${item.title}"></i>` +
            `<h2>${item.title}</h2>` +
            `<p>${item.introduction}</p>` +
            `<div class="blogs_base"><span class="blogs_time">${item.time}</span></div>` +
            `</a>` +
            `</li>`

          list +=
            `<li>` +
            `<a href="${item.url}" title="${item.title}">${item.title}</a>` +
            `</li>`
        }
      })
    } else {
      data.articleList.forEach(function (item) {
        articleHtml +=
          `<li class="blogs_list">` +
          `<a href="${item.url}">` +
          `<em>${item.label}</em>` +
          `<i><img src="${item.thumb}" alt="${item.title}"></i>` +
          `<h2>${item.title}</h2>` +
          `<p>${item.introduction}</p>` +
          `<div class="blogs_base"><span class="blogs_time">${item.time}</span></div>` +
          `</a>` +
          `</li>`

        list +=
          `<li>` +
          `<a href="${item.url}" title="${item.title}">${item.title}</a>` +
          `</li>`
      })
    }
    $("#articleList").html(articleHtml)
    $("#articleListRight").html(list)
  }
  function getClassify(data) {
    let classifyHtml = ""
    data.classifyList.forEach(function (item) {
      classifyHtml += `<a href="/pages/classify.html?label=${item}">${item}</a>`
    })
    $("#classifyList").html(classifyHtml)
  }
})
