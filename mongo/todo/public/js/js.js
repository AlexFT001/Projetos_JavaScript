$(".recordCheckBox").click(async (obj) =>{

  const delay = 150;//ms

  const id = obj.delegateTarget.id;
  $.post("/deleteRecord",
  {
    id: id,
  },
  function(data, status){
    if(status == "success")
    {
      location.reload()
    }
  });

})

const nomeDoCookie = "__Secure-1PAPISID";
const valorDoCookie = document.cookie
console.log(valorDoCookie);