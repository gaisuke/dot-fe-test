import { Form } from "react-bootstrap";

function SelectCity(props) {
  return (
    <Form.Select aria-label="Default select example" className="mt-2" onChange={(e)=>props.eventHandler(e.target.value)} defaultValue="default">
      <option readOnly value="default">Pilih Kota</option>
      {props.data?.map((item, key) => {
        return <option value={item.city_id} key={"city2-"+key}>{item.type} {item.city_name}</option>;
      })}
    </Form.Select>
  );
}

export default SelectCity
