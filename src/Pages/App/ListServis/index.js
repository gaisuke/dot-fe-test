import "./index.css";
import ListTarif from "./../ListTarif";

function ListServis(props) {
  if (props.data !== []) {
    return (
      <div className="list-servis">
        <h3>{props.data.service}</h3>
        <span className="text-muted">{props.data.description} </span>
        <div className="row mx-0">
          {props.data.cost?.map((item, key) => {
            return <ListTarif data={item} key={"costs-"+key}/>;
          })}
        </div>
      </div>
    );
  } else {
    return "Tidak ada data";
  }
}

export default ListServis;
