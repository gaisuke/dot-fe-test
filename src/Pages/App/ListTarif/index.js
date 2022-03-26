import "./index.css";

function ListTarif(props) {
    if(props.data!==[]){
        return (
            <div className="list-tarif">
                <p className="mb-0">Rp. {props.data.value}</p>
                <label>ETD: {props.data.etd} Hari</label>
            </div>
          );
    }else{
        return "Tidak ada data";
    }
 
}

export default ListTarif;
