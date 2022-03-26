const express = require("express");
const router = express.Router();
var http = require("https");
const { init } = require("rajaongkir-node-js");
const request = init("f6542dedd3c82849d0e33a16614145ee", "starter");

router.get("/provinsi", function (req, res) {
  const province = request.get("/province");
  province
    .then((prov) => {
      let js = JSON.parse(prov);
      res.send(js);
    })
    .catch(function (error) {
      console.log(error);
      console.log(request);
    });
});

router.get("/kota/:id", function (req, res) {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);
  allCityInProvince.then((city) => {
    let citi = JSON.parse(city);
    res.send(citi);
  });
});

router.post("/ongkir", function (req, res) {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier, // bisa merequest satu atau beberapa kurir sekaligus
  };
  const cost = request.post("cost", data);
  cost.then((cst) => {
    res.send(cst);
  });
});

router.post("/auth", function (req, res) {
    const form = req.body;
    if(form.username=="admin"&&form.password=="admin"){
        res.send({status:"Berhasil",code:200,token:"this-is-token"});
    }else{
        res.send({status:"Gagal",code:500});
    }
});

module.exports = router;
