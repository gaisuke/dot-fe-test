import { Form } from "react-bootstrap";

function SelectProvince(props) {
  return (
    <Form.Select aria-label="Default select example" className="mt-2" onChange={(e)=>props.eventHandler(e.target.value)} defaultValue="default">
      <option readOnly value="default">Pilih Provinsi</option>
      {props.data?.map((item, key) => {
        return <option value={item.province_id} key={"provinsi-"+key}>{item.province}</option>;
      })}
    </Form.Select>
  );
}

export default SelectProvince
