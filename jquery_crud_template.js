$(document).ready(function () {
  //URL
  var urlGetAll = "";
  var urlGet = "";
  var urlCreate = "";
  var urlUpdate = "";
  var urlDelete = "";
  //END URL
  //-------------------------------------------------------------------------
  //EVENT
  $("#example").on("click", function () {
    var ajax = GetAll();
    ajax.done(function (result) {
      alert(result);
    });
    ajax.fail(function (result) {});
    ajax.always(function (result) {});
  });
  //END EVENT
  //-------------------------------------------------------------------------
  //FUNCTIONS
  function example(params) {
    return params;
  }
  //END FUNCTIONS
  //-------------------------------------------------------------------------
  //AJAX FUNCTIONS
  function GetAll(params = {}) {
    return $.ajax({
      type: "GET",
      url: urlGetAll,
      data: params,
      dataType: "json",
    });
  }

  function Get(params) {
    $.ajax({
      type: "GET",
      url: urlGet,
      data: params,
      dataType: "json",
    });
  }

  function Create(params) {
    $.ajax({
      type: "POST",
      url: urlCreate,
      data: params,
      dataType: "json",
    });
  }

  function Update(params) {
    $.ajax({
      type: "PUT",
      url: urlDelete,
      data: params,
      dataType: "json",
    });
  }

  function Delete(params) {
    $.ajax({
      type: "DELETE",
      url: urlUpdate,
      data: params,
      dataType: "json",
    });
  }
  //END AJAX FUNCTIONS
});
