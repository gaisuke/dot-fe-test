import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useEffect, useState } from "react";
import ListServis from "./ListServis";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SelectProvince from "./component/SelectProvince";
import SelectCity from "./component/SelectCity";
import { GetCity, GetTarif } from "./ReduxApp/CRUD";
import * as acAuth from "./../Auth/ReduxAuth/Redux";
import { useNavigate } from "react-router-dom";

function CekOngkir() {
  const dataList = useSelector(({ data }) => data, shallowEqual);

  const [param, setParam] = useState({});
  const [idProvince, setIdProvince] = useState("");
  const [city, setCity] = useState("");
  const [idProvince2, setIdProvince2] = useState("");
  const [city2, setCity2] = useState("");
  const [finalData, setFinalData] = useState({
    origin: "",
    destination: "",
    weight: 0,
    courier: "",
  });
  const [ongkir, setOngkir] = useState([]);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    setParam(dataList);
  });

  useEffect(() => {
    if (idProvince !== "") {
      GetCity(idProvince)
        .then((res) => {
          const cityList = res?.data?.rajaongkir?.results;
          setCity(cityList);
        })
        .catch(() => {
          console.log("error city");
        });
    }
  }, [idProvince]);

  useEffect(() => {
    if (idProvince2 !== "") {
      GetCity(idProvince2)
        .then((res) => {
          const cityList = res?.data?.rajaongkir?.results;
          setCity2(cityList);
        })
        .catch(() => {
          console.log("error province");
        });
    }
  }, [idProvince2]);

  const provinceSelected = (id) => {
    if (idProvince !== id) {
      setIdProvince(id);
    }
  };

  const provinceSelected2 = (id) => {
    if (idProvince2 !== id) {
      setIdProvince2(id);
    }
  };

  const citySelected = (id) => {
    setFinalData({
      origin: id,
      destination: finalData.destination,
      weight: finalData.weight,
      courier: finalData.courier,
    });
  };

  const citySelected2 = (id) => {
    setFinalData({
      origin: finalData.origin,
      destination: id,
      weight: finalData.weight,
      courier: finalData.courier,
    });
  };

  const weightChangeHandler = (weightData) => {
    setFinalData({
      origin: finalData.origin,
      destination: finalData.destination,
      weight: weightData,
      courier: finalData.courier,
    });
  };

  const changePerusahaanHandler = (value) => {
    setFinalData({
      origin: finalData.origin,
      destination: finalData.destination,
      weight: finalData.weight,
      courier: value,
    });
  };

  const CariTarifHandler = () => {
      //if(finalData.origin!==""&&finalData.destination!==""&&finalData.weight!==0){
        GetTarif(finalData)
        .then((restarif) => {
          setOngkir(restarif?.data?.rajaongkir?.results[0]);
        })
        .catch(() => {
            alert("harap isikan : asal, tujuan,berat dan perusahaan pengiriman")
        });
      //}
      
    //   else{
    //       alert("harap isikan : asal, tujuan,berat dan perusahaan pengiriman")
    //   }
    
  };

  const logoutHandler = () => {
    dispatch(acAuth.actions.acLogout());
    setTimeout(() => nav("/login", { replace: true }), 3000);
  };

  if (param?.data?.results !== undefined) {
    return (
      <div className="Container">
        <div className="app-container">
          <div className="row mx-0">
            <h2 className="col-10">Cek Tarif Pengiriman</h2>
            <Button
              className="col-2"
              variant="primary"
              type="button"
              onClick={() => logoutHandler()}
            >
              Logout
            </Button>
          </div>

          <div className="row m-0 my-4">
          <div className="col-md-5"><h5>Asal</h5></div>
          <div className="col-md-2"></div>
          <div className="col-md-5"><h5>Tujuan</h5></div>
            <div className="col-md-2">
              <p className="mt-2">Provinsi</p>
              <p className="mt-4">Kota</p>
            </div>
            <div className="col-md-3">
              <SelectProvince
                data={param?.data?.results}
                eventHandler={provinceSelected}
              />
              {city !== "" ? (
                <SelectCity data={city} eventHandler={citySelected} />
              ) : (
                ""
              )}
            </div>
            <div className="col-md-2 text-center middle">
              <p className="mt-2">Menuju</p>
            </div>
            <div className="col-md-2">
              <p className="mt-2">Provinsi</p>
              <p className="mt-4">Kota</p>
            </div>
            <div className="col-md-3">
              <SelectProvince
                data={param?.data?.results}
                eventHandler={provinceSelected2}
              />
              {city2 !== "" ? (
                <SelectCity data={city2} eventHandler={citySelected2} />
              ) : (
                ""
              )}
            </div>
            <div className="col-md-2">
              <p className="mt-2">Berat</p>
            </div>
            <div className="col-md-2">
              <Form.Control
                type="number"
                placeholder="Berat"
                onChange={(e) => weightChangeHandler(e.target.value)}
                value={finalData.weight}
              />
            </div>
            <div className="col-md-1">
              <p className="mt-2">Gram</p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <p className="mt-2">Pengiriman</p>
            </div>
            <div className="col-md-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => changePerusahaanHandler(e.target.value)}
                defaultValue="default"
              >
                <option readOnly value="default">
                  Pilih Pengiriman
                </option>
                <option value="jne">JNE</option>
                <option value="pos">Pos</option>
                <option value="tiki">TIKI</option>
              </Form.Select>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              variant="primary"
              type="button"
              className="w-100"
              onClick={() => CariTarifHandler()}
            >
              Cari Tarif
            </Button>
          </div>
          <div className="col-md-12">
            {ongkir?.costs?.map((item, key) => {
              return <ListServis data={item} key={"ongkir-" + key} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return "progress";
  }
}

export default CekOngkir;
