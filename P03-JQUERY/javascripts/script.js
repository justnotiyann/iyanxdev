$(document).ready(() => {
  $(".nama").click(function () {
    alert("hai namamu adalah " + $(this).html() + "!");
  });
  $(".alamat").click(function (event) {
    alert(`Alamatmu di ` + $(this).html());
  });

  // GET BUTTON
  $(".hapus").click(function () {
    const res = confirm("Yakin dihapus ?!");
    if (!res) return;
    alert("Tapi ngga bisa hehehehe");
  });
  $(".edit").click(function () {
    const res = confirm("Yakin Diedit ?!");
    if (!res) return;
    alert("Tapi edit");
  });
});
