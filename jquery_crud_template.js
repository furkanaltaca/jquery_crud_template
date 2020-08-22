$(document).ready(function () {
  //URL
  var urlGetAll = "";
  var urlGet = "";
  var urlCreate = "";
  var urlUpdate = "";
  var urlDelete = "";
  //END URL
  //-------------------------------------------------------------------------
  //ARRANGE
  var dataTable = $("#exampleDataTable");
  var dataTableConfig = {
    dom: "Bfrtip",
    processing: true,
    serverSide: true,
    responsive: true,
    pageLength: 15,
    ajax: GetDataTableAjaxConfig(),
    columns: [
      { data: "image" },
      { data: "title" },
      { data: "category.name" },
      { data: "hit" },
      { data: "created_at" },
      { data: "status" },
      { data: "transactions" },
    ],
    columnDefs: [
      {
        targets: -1,
        data: null,
        defaultContent: "<button>Click!</button>",
      },
      {
        targets: -1, //-1 meaning is from right
        data: null,
        defaultContent: "<i>Not set</i>",
        render: function (data, type, row) {
          return "<button>datatable button</button>";
        },
      },
    ],
  };
  var example = $("#example");
  //END ARRANGE
  //-------------------------------------------------------------------------
  //EVENT
  example.on("click", function () {
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
  function GetDataTableAjaxConfig(params = {}){
    return {
      type: "GET",
      url: urlGetAll,
      data: params,
      dataType: "json",
    };
  }

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
      url: urlUpdate,
      data: params,
      dataType: "json",
    });
  }

  function Delete(params) {
    $.ajax({
      type: "DELETE",
      url: urlDelete,
      data: params,
      dataType: "json",
    });
  }
  //END AJAX FUNCTIONS
});
