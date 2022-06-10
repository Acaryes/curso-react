import ItemCount from "../ItemCount/ItemCount";



export default function ItemListContainer(props) {
    const {mensaje} = props;
    
  return (
    <>
    <div>{mensaje}</div>
    <ItemCount initial={1} stock={3}/>
    </>
  )
}
